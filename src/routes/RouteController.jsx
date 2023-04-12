import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const RouteController = (props) => {
  const { component: Component, isAuthenticated, ...rest } = props;
  const [isAuth, setIsAuth] = useState(true);

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem('auth'));
    if (!auth || auth !== 'yes') {
      setIsAuth(false);
    }
  }, []);

  return isAuth ? <Component {...rest} /> : <Redirect to='/login' />;
};

export default RouteController;
