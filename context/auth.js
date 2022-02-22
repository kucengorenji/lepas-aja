import { useEffect, useState } from 'react';
import { InitialUserState, useUser } from './user';
import { Authentication } from '../services/Auth';

const AuthStateChangeProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const user = useUser();
  const { SetUser } = user;

  const InitiateAuthStateChange = () => {
    Authentication().onAuthStateChanged((user) => {
      if (user) {
        SetUser({ email: user.email, uid: user.uid });
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
    return <p>Loading...</p>;
  }

  return children;
};

export default AuthStateChangeProvider;
