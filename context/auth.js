import { useEffect, useState } from 'react';
import { InitialUserState, useUser } from './user';
import { Authentication } from '../services/Auth';
import { Box, CircularProgress } from '@mui/material';

const AuthStateChangeProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const user = useUser();
  const { SetUser } = user;

  const InitiateAuthStateChange = () => {
    Authentication().onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken().then((token) => {
          SetUser({ email: user.email, uid: user.uid, token: token });
          console.log(token);
        });
      } else {
        SetUser(InitialUserState);
      }
      setIsLoading(false);
    });
  };

  useEffect(() => {
    InitiateAuthStateChange();
  }, []);

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return children;
};

export default AuthStateChangeProvider;
