import React from 'react';

import User from '../../components/User';

const AuthIndexPage = (props) => {
  return (
    <div>
      <h1>The Auth Main page of {props.appName}</h1>
      <User name="Dominik" age={25}/>
    </div>
  )
};

AuthIndexPage.getInitialProps = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: 'Super App (Auth)'});
    }, 1000)
  });
  return promise;
};

export default AuthIndexPage;

