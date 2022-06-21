import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const LoginBox = styled.div`
  border: 1px solid #c1c1c1;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const CustomTextField = styled(TextField)`
  margin: 10px 0;
`;
