import { CustomTextField, LoginBox, Wrapper } from './style';
import { ChangeEvent, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    user: '',
    password: '',
  });

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginData(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleFormSubmit = () => {
    auth.signin('blas', () => {
      navigate('/mediapp');
    });
  };

  return (
    <Wrapper>
      <LoginBox>
        <CustomTextField
          value={loginData.user}
          label='Usuario'
          name='user'
          variant='outlined'
          onChange={handleFormChange}
        />
        <CustomTextField
          name='password'
          label='Contraseña'
          variant='outlined'
          type='password'
          value={loginData.password}
          onChange={handleFormChange}
        />
        <Button onClick={handleFormSubmit} variant='outlined'>
          Iniciar sesión
        </Button>
      </LoginBox>
    </Wrapper>
  );
};

export default Login;
