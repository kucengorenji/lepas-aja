import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { SignUp, GoogleAuth, FacebookAuth } from '../services/Auth';
import withUnProtected from '../hoc/withUnprotected';
import { GetSignInErrorMessage } from '../services/Auth';
import { Alert } from '@mui/material';

const register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await SignUp(email, password);
      setIsSuccess(true);
      setTimeout(() => {
        router.replace('/');
      }, 3500);
    } catch (err) {
      const message = GetSignInErrorMessage(err.code);
      setError(message);
      setIsError(true);
    }
  };

  const handleGoogleAuth = async () => {
    try {
      await GoogleAuth();
      setIsSuccess(true);
      setTimeout(() => {
        router.replace('/');
      }, 3500);
    } catch (err) {
      const message = GetSignInErrorMessage(err.code);
      setError(message);
      setIsError(true);
    }
  };

  const handleFacebookAuth = async () => {
    try {
      await FacebookAuth();
      setIsSuccess(true);
      setTimeout(() => {
        router.replace('/');
      }, 3500);
    } catch (err) {
      const message = GetSignInErrorMessage(err.code);
      setError(message);
      setIsError(true);
    }
  };

  useEffect(() => {
    if(isSuccess){
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000)
    }
  }, [isSuccess]);

  useEffect(() => {
    if(isError){
      setTimeout(() => {
        setIsError(false);
      }, 5000)
    }
  }, [isError])

  return (
    <section className="w-full min-h-[80vh] flex flex-col justify-center items-center py-8">
      <h1 className="text-5xl mb-14">Sign Up</h1>
      <form
        className="mb-4 flex flex-col max-w-[450px] w-full"
        onSubmit={handleRegister}
      >
        <div className='relative mt-4'>
          {isSuccess && (
            <div className='-top-14 absolute ml-0 mr-0 left-0 right-0'>
              <Alert variant='filled' severity='success'>
                Anda telah berhasil register!
              </Alert>
            </div>
          )}
          {isError && (
            <div className='-top-14 absolute ml-0 mr-0 left-0 right-0'>
              <Alert variant='filled' severity='error'>
                {error}
              </Alert>
            </div>
          )}
        </div>
        {/* {error && (
          <div
            className="relative px-4 py-3 text-red-700 bg-red-100 border border-red-400 rounded"
            role="alert"
          >
            <strong className="font-bold">Danger! </strong>
            <span className="block sm:inline">{error}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                className="w-6 h-6 text-red-500 fill-current"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div>
        )} */}
        <div className="mb-4 shadow appearance-none border-red-600 border rounded py-2 px-4 text-gray-700 leading-tight flex flex-col bg-[#E4E4E4]">
          <label
            className="text-[#706C88] mb-1 border-b-[3px] border-red-600 max-w-max"
            htmlFor="username-email"
          >
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#E4E4E4] focus:outline-none focus:shadow-outline text-red-600 text-xl"
            placeholder="Enter your email/username here"
          />
        </div>
        <div className="mb-4 shadow appearance-none border-red-600 border rounded py-2 px-4 text-gray-700 leading-tight flex flex-col bg-[#E4E4E4]">
          <label
            className="text-[#706C88] mb-1 border-b-[3px] border-red-600 max-w-max"
            htmlFor="password"
          >
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#E4E4E4] focus:outline-none focus:shadow-outline text-red-600 text-xl"
            id="password"
            type="password"
            placeholder="Enter your password here"
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <button
            className="rounded-[4px] bg-red-600 mx-auto max-w-[196px] w-full py-4 mt-8 text-xl text-white font-medium"
            type="submit"
          >
            Create Account
          </button>
          <Link href="/login">
            <button className="text-lg font-bold text-black opacity-50">
              Already A Member?
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center mt-8 gap-y-4">
          <p className="font-bold opacity-70">Or SignUp With</p>
          <div className="flex gap-x-8">
            <button onClick={handleFacebookAuth}>
              <img src="/icons/facebook.svg" />
            </button>
            <button onClick={handleGoogleAuth}>
              <img src="/icons/google.svg" />
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default withUnProtected(register);
