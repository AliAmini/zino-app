import React, {FC, useCallback, useMemo, useState} from 'react';
import css from "../Forms.module.scss";
import {DatePicker, Form, Input, Radio, Select, Button} from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { clientAddressSelector, clientSelector } from 'state/selectors';
import useActions from 'state/action-creators';
import { Client, ClientAddress } from 'types/client';
import { filterOptionFn, getAllCountriesOptions, getSomeDemoCitiesOptions } from 'utils/helper';

const {Item: FormItem} = Form;
const {Option} = Select;


interface Props { }

const AddressForm: FC<Props> = () => {
  /* Actions */
  const dispatch = useDispatch();
  const { 
    updateRegisterStatus,
    updateClientAddress
  } = useActions(dispatch);

  /* States */
  const addressInfo = useSelector(clientAddressSelector);
  const [savedFormValues, setSavedFormValues] = useState(addressInfo);

  const [form] = Form.useForm();

  // == all countries list
  const allCountriesOptions = useMemo(() => {
    return getAllCountriesOptions();
  }, []);

  // == Demo cities
  const someDemoCitiesOptions = useMemo(() => {
    return getSomeDemoCitiesOptions();
  }, []);


  /* Fns */
  
  const handleBack: React.MouseEventHandler<HTMLElement> = () => {
    updateRegisterStatus("personalInformation");
  }

  /************** Form Submit ****************/
  const handleFormSubmit = (values: ClientAddress) => {
    
    updateClientAddress(values);

    /**** Update Page State ****/
    updateRegisterStatus("confirmation"); // next level
  };

  return (<>
    <h3 className={css.pageTitle}>Address Information</h3>

    <Form form={form} className={css.form} onFinish={handleFormSubmit} initialValues={savedFormValues}>
      <FormItem
        label="Address Line 1:" 
        name="line1"
        rules={[{required: true}]}
      >
        <Input />
      </FormItem>

      <FormItem
        label="Address Line 1:" 
        name="line2"
        rules={[{required: true}]}
      >
        <Input />
      </FormItem>

      <FormItem
        label="Postal Code:"
        name="postalCode"
        rules={[{required: true}]}
      >
        <Input />
      </FormItem>


      <FormItem
        label="City:"
        name="city"
        rules={[{required: true}]}
      >
        <Select 
          options={someDemoCitiesOptions} 
          showSearch 
          filterOption={filterOptionFn}
        />
      </FormItem>

      <FormItem
        label="Country:"
        name="country"
        rules={[{required: true}]}
      >
        <Select 
          options={allCountriesOptions} 
          showSearch 
          filterOption={filterOptionFn}
        />
      </FormItem>

      <FormItem
        label="Phone Number"
        name="phoneNumber"
        rules={[{pattern: /^\d*$/, message: 'Please enter only numbers'}]}
      >
        <Input  />
      </FormItem>

      <FormItem
        label="Email"
        name="email"
        rules={[{type: 'email', message: 'Please enter a valid email'}]}
      >
        <Input  />
      </FormItem>

      <FormItem className="btns">
        <Button type="primary" htmlType="submit">
          Save
        </Button>
        <Button type="default" onClick={handleBack}>
          Back
        </Button>
      </FormItem>
    </Form>
  </>);
}

export default AddressForm;