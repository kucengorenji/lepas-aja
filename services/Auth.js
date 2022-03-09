import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signOut,
  getAuth,
  sendPasswordResetEmail,
  confirmPasswordReset,
  updatePassword
} from 'firebase/auth';
import { app } from '../config/firebase.config';
import axios from 'axios';
import { data } from 'autoprefixer';
import { getUser } from './api';

export const FirebaseAuth = getAuth(app);

export const Authentication = () => {
  return FirebaseAuth;
};

export const SignUp = async (email, password) => {
  await createUserWithEmailAndPassword(FirebaseAuth, email, password);
  Authentication().onAuthStateChanged((user) => {
    if (user) {
      user.getIdToken().then(async (token) => {
        await postRegister(token);
      });
    }
  });
};

const postRegister = async (token) => {
  let response = await axios.post(
    `https://lepasaja-backend.herokuapp.com/api/v1/register`,
    null,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const SignIn = async (email, password) => {
  await signInWithEmailAndPassword(FirebaseAuth, email, password);
};

export const logout = async () => {
  await signOut(FirebaseAuth);
};

export const GoogleAuth = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(FirebaseAuth, provider);
  Authentication().onAuthStateChanged((user) => {
    if (user) {
      getUser().then((data) => {
        if (data.some((e) => e['email'] === user?.email)) {
          return;
        }
        user.getIdToken().then(async (token) => {
          return await postRegister(token);
        });
      });
    }
  });
};

export const FacebookAuth = async () => {
  const provider = new FacebookAuthProvider();
  await signInWithPopup(FirebaseAuth, provider);
};

export const GetSignInErrorMessage = (code) => {
  switch (code) {
    case 'auth/user-not-found':
      return 'Email tidak terdaftar';
    case 'auth/wrong-password':
    default:
      return 'Email atau password salah';
  }
};

export const sendEmailResetPassword = async (email) => {
  await sendPasswordResetEmail(FirebaseAuth, email);
};

export const sendResetPassword = async (oobCode, newPassword) => {
  await confirmPasswordReset(FirebaseAuth, oobCode, newPassword);
};

export const changePassword = async (newPassword) => {
  await updatePassword(FirebaseAuth.currentUser, newPassword);
}
