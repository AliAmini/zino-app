import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clientSelector, registerStatusSelector } from 'state/selectors';
import {Button} from 'antd';
import { RegisterStatus } from 'types/client';

const HomePage: FC = () => {
  const registerStatus: RegisterStatus = useSelector(registerStatusSelector);
  const client = useSelector(clientSelector);

  const isRegistered = registerStatus === "registered";

  return (
    <div>
      {isRegistered?
        <h2>Hello, {`${client?.firstName} ${client?.lastName}`}</h2>
      :
        <>
          <h2>Please Register</h2>
          <p>
            You've not registered in Zino yet...
          </p>
          <hr />
          <div>
              <Link to="/register" className="btn">
                <Button type="primary">
                  Go to Register Page 
                </Button>
              </Link>
          </div>
        </>
      }
    </div>
  );
}

export default HomePage;