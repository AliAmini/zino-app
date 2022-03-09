import { Progress } from 'antd';
import PersonalInfoForm from 'components/Forms/PersonalInfoForm';
import React, { FC } from 'react';
import css from "./RegisterPage.module.scss";

interface Props {
  
}

const RegisterPage: FC<Props> = () => {
  return (
    <div className={css.container}>

      <div className={css.progressWrapper}>
        <b>Progress:</b>
        <Progress
          strokeColor={{
            '0%': '#108ee9',
            '100%': '#87d068',
          }}
          showInfo={false}
          percent={33}
        />
      </div>


      <div className={css.wrapper}>
        <h3 className={css.pageTitle}>Personal Information</h3>

        <PersonalInfoForm />
      </div>
    </div>
  );
}

export default RegisterPage;