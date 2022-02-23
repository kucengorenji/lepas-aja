import { useRouter } from 'next/dist/client/router';
import { useUser } from '../context/user';

import React from 'react';

const withProtected = (Pages) => {
  return (props) => {
    const router = useRouter();
    const user = useUser();
    const { uid } = user;

    if (!uid) {
      router.replace('/');
      return <></>;
    }
    return <Pages {...props} />;
  };
};

export default withProtected;
