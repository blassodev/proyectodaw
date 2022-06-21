import { Button } from '@mui/material';
import { useAuth } from '../../hooks/useAuth';

const MediaApp = () => {
  const auth = useAuth();
  return (
    <div>
      <p>MediaApp works!</p>
      <Button
        onClick={() => {
          auth.signout(() => {});
        }}
      >
        Cerrar Sesion
      </Button>
    </div>
  );
};

export default MediaApp;
