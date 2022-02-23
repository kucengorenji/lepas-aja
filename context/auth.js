import { useEffect, useState } from 'react';
import { InitialUserState, useUser } from './user';
import { Authentication } from '../services/Auth';

const AuthStateChangeProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const user = useUser();
  const { SetUser } = user;
  const [token, setToken] = useState('');

  const InitiateAuthStateChange = () => {
    Authentication().onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken().then((token) => {
          setToken(token);
        });
        SetUser({ email: user.email, uid: user.uid, token: token });
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
