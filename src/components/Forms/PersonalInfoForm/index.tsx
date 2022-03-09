import React, {FC} from 'react';
import css from "../Forms.module.scss";
import {Form, Input} from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { clientSelector } from 'state/selectors';
import useActions from 'state/action-creators';
const {Item: FormItem} = Form;

interface Props {
  
}

const PersonalInfoForm: FC<Props> = () => {
  const dispatch = useDispatch();
  const { updateClient } = useActions(dispatch);

  const client = useSelector(clientSelector);

  const [form] = Form.useForm();


  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const inputName = event.target.name;
    const value = event.target.value;

    console.log('==== handleInputChange:', inputName, value, event);

    // Note: we use redux update for only client full name, for real-time updating client name in <Nav />
    if( ['firstName', 'lastName'].includes(inputName) ) {
      const newClientValue = {...client, [inputName]: value};

      // == update info in redux
      updateClient(newClientValue);
    }
  }

  return (
    <Form form={form} className={css.form}>
      <FormItem
        label="First Name:"
      >
        <Input name="firstName" onChange={handleInputChange} />
      </FormItem>

      <FormItem
        label="Last Name:"
      >
        <Input name="lastName" onChange={handleInputChange} />
      </FormItem>
    </Form>
  );
}

export default PersonalInfoForm;