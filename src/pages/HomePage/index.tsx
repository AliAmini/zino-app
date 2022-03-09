import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clientSelector, isRegisteredSelector } from 'state/selectors';
import {Button} from 'antd';

const HomePage: FC = () => {
  const isRegistered = useSelector(isRegisteredSelector);
  const client = useSelector(clientSelector);

  return (
    <div>
      {isRegistered?
        <h2>Hello, {`${client?.firstName} ${client?.lastName}`}</h2>
      :
        <>
          <h2>Please Register</h2>
          <p>
            You've not registered in Zino yet...

            <hr />
            <Link to="/register" className="btn">
              <Button type="primary">
                Go to Register Page 
              </Button>
            </Link>
          </p>
        </>
      }
    </div>
  );
}

export default HomePage;