import { Progress } from 'antd';
import AddressForm from 'components/Forms/AddressForm';
import ConfirmInformationForm from 'components/Forms/ConfirmInformationForm';
import PersonalInfoForm from 'components/Forms/PersonalInfoForm';
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useActions from 'state/action-creators';
import { registerStatusSelector } from 'state/selectors';
import css from "./RegisterPage.module.scss";

interface Props {
  
}

const RegisterPage: FC<Props> = () => {
  const registerStatus = useSelector(registerStatusSelector);

  const renderMainForm = () : JSX.Element => {
    switch (registerStatus) {
      case "personalInformation":
        return <PersonalInfoForm />;
        break;
      case "addressInformation":
        return <AddressForm />;
        break;
      
      
      case "confirmation":
        return <ConfirmInformationForm />;
        break;
    
      default:
        return (
          <div>
            <h2>Your registration is completed!</h2>
          </div>
        );
        break;
    }
  };

  const getProgressPercent = () : number =>  {
    if(registerStatus === "personalInformation")     return 33; 
    else if(registerStatus === "addressInformation") return 66; 
    else if(registerStatus === "confirmation")       return 100; 
    
    return 100; // "registered"
  };

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
          percent={getProgressPercent()}
        />
      </div>


      <div className={css.wrapper}>
        
        {renderMainForm()}
      </div>
    </div>
  );
}

export default RegisterPage;