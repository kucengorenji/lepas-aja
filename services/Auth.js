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
} from 'firebase/auth';
import { app } from '../config/firebase.config';

export const FirebaseAuth = getAuth(app);

export const Authentication = () => {
  return FirebaseAuth;
};

export const SignUp = async (email, password) => {
  await createUserWithEmailAndPassword(FirebaseAuth, email, password);
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

export const sendEmailResetPassword = async(email) => {
  await sendPasswordResetEmail(FirebaseAuth, email);
}

export const sendResetPassword = async(oobCode, newPassword) => {
  await confirmPasswordReset(FirebaseAuth, oobCode, newPassword);
}