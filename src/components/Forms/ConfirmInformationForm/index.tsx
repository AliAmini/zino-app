import { Button } from 'antd';
import React, {FC} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useActions from 'state/action-creators';
import { clientAddressSelector, clientSelector } from 'state/selectors';
import css from "../Forms.module.scss";

const ConfirmInformationForm: FC = () => {
  /* Actions */
  const dispatch = useDispatch();
  const {updateRegisterStatus} = useActions(dispatch);

  /* States */
  const addressInfo = useSelector(clientAddressSelector);
  const client = useSelector(clientSelector);

  /* Fns */
  const handleBack: React.MouseEventHandler<HTMLElement> = () => {
    updateRegisterStatus("addressInformation");
  }

  const handleClickSave: React.MouseEventHandler<HTMLElement> = () => {
    updateRegisterStatus("registered");
  };
  
  return (
    <>
      <h3 className={css.pageTitle}></h3>

      <div className={css.form}>


        <div className={css.informationBlock}>
          <h3 className={css.informationTitle}>Personal Information</h3>

          <ul>
            <li><span>First Name:</span> <b>{client?.firstName}</b></li>
            <li><span>Last Name:</span> <b>{client?.lastName}</b></li>
            <li><span>Sex:</span> <b>{client?.sex}</b></li>
            <li><span>Date of Brith:</span> <b>{client?.birthDate?.format("MMMM d, YYYY")}</b> </li>
            <li><span>Nationality:</span> <b>{client?.nationality}</b></li>
            <li><span>Social Security number:</span> <b>{client?.socialSecurityNumber}</b></li>
          </ul>
        </div>

        <div className={css.informationBlock}>
          <h3 className={css.informationTitle}>Address Information</h3>

          <ul>
            <li><span>Address Line 1</span> <b>{addressInfo?.line1}</b></li>
            <li><span>Address Line 1</span> <b>{addressInfo?.line2}</b></li>
            <li><span>Postal Code</span> <b>{addressInfo?.postalCode}</b></li>
            <li><span>City</span> <b>{addressInfo?.city}</b></li>
            <li><span>Country</span> <b>{addressInfo?.country}</b></li>
            <li><span>Phone Number</span> <b>{addressInfo?.phoneNumber}</b></li>
            <li><span>Email</span> <b>{addressInfo?.email}</b></li>
          </ul>
        </div>

        {/* footer */}
        <div className="btns">
          <Button type="primary" onClick={handleClickSave}>
            Ok, save it!
          </Button>
          <Button type="default" onClick={handleBack}>
            Back
          </Button>
        </div>
      </div>
    </>
  );
}

export default ConfirmInformationForm;