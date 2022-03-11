import React, {FC, useCallback, useEffect, useMemo, useState} from 'react';
import {DatePicker, Form, Input, Radio, Select, Button} from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { clientSelector } from 'state/selectors';
import useActions from 'state/action-creators';
import { Client } from 'types/client';
import { filterOptionFn, getAllCountriesOptions } from 'utils/helper';
import css from "../Forms.module.scss";

const {Item: FormItem} = Form;
const {Option} = Select;


interface Props { }

const PersonalInfoForm: FC<Props> = () => {
  /* Actions */
  const dispatch = useDispatch();
  const { 
    updateClient,
    updateRegisterStatus
  } = useActions(dispatch);

  /* States */
  const client = useSelector(clientSelector);
  const [savedFormValues, setSavedFormValues] = useState(client);

  const [form] = Form.useForm();

  // == all countries list
  const allCountriesOptions = useMemo(() => {
    const allOptions = getAllCountriesOptions();
    return allOptions;
  }, []);


  /* Fns */

  // Note: we use redux update for only client full name, for real-time updating client name in <Nav />
  const handleFistLastNameInputsChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const inputName = event.target.id;
    const value = event.target.value;

    const newClientValue = {...client, [inputName]: value};

    // == update info in redux
    updateClient(newClientValue);
  }


  /************** Form Submit ****************/
  const handleFormSubmit = (values: Client) => {
    updateClient(values);


    /**** API Call Here | for saving the data in the database ****/

    /**** Update Page State ****/
    updateRegisterStatus("addressInformation"); // next level
  };

  console.log('==== initialValues', savedFormValues);

  return (<>
    <h3 className={css.pageTitle}>Personal Information</h3>

    <Form form={form} className={css.form} onFinish={handleFormSubmit} initialValues={savedFormValues}>
      <FormItem
        label="Initials:" 
        name="initials"
      >
        <Input placeholder="Dr." />
      </FormItem>

      <FormItem
        label="First Name:" 
        name="firstName"
        rules={[{required: true}]}
      >
        <Input onChange={handleFistLastNameInputsChange} />
      </FormItem>

      <FormItem
        label="Last Name:"
        name="lastName"
        rules={[{required: true}]}
      >
        <Input  onChange={handleFistLastNameInputsChange} />
      </FormItem>

      <FormItem
        label="Sex:"
        name="sex"
        rules={[{required: true}]}
      >
        <Radio.Group >
          <Radio value="male">Male</Radio>
          <Radio value="female">Female</Radio>
        </Radio.Group>
      </FormItem>

      <FormItem
        label="Date of Brith:"
        name="birthDate" 
        rules={[{required: true}]}
      >
        <DatePicker 
          disabledDate={date => date.toDate() > new Date()}
        />
      </FormItem>

      <FormItem
        label="Nationality:"
        name="nationality"
        rules={[{required: true}]}
      >
        <Select 
          options={allCountriesOptions} 
          showSearch 
          filterOption={filterOptionFn}
        />
      </FormItem>

      <FormItem
        label="Social Security number:"
        name="socialSecurityNumber"
        rules={[{pattern: /^\d*$/, message: 'Please enter only numbers'}]}
      >
        <Input  />
      </FormItem>

      <FormItem className="btns">
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </FormItem>
    </Form>
  </>);
}

export default PersonalInfoForm;