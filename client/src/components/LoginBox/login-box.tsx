import React from 'react';
import {Container, LoginForm} from './styles';
import xcovid from '../assets/xcovid.png';

const LoginBox: React.FC = () => {
  return(
    <Container>
      <img src="" alt="xcovid"/>
      <LoginForm>
        <input type="email"/>
        <input type="password"/>
      </LoginForm>
    </Container>
  );
};

export default LoginBox