// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,

  // apiKey: 'AIzaSyBi2tNgLucv8amFPp9vCXJcM03kITvXtc4',
  // authDomain: 'lepas-aja.firebaseapp.com',
  // projectId: 'lepas-aja',
  // storageBucket: 'lepas-aja.appspot.com',
  // messagingSenderId: '472438318678',
  // appId: '1:472438318678:web:4ae14c27206c60238afdf7',
  // measurementId: 'G-79MSWQG7JC',
};

// console.log(firebaseConfig);

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

