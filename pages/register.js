import { useState } from 'react';
// import css from './style.module.css';

const register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // console.log(email);

  function formSubmit(e) {
    // e.preventDeafult();

    if (!/^[a-z0-9_\.]+$/.exec(username)) {
      console.log('salah username format');
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      console.log('salah email format');
    }

    // console.log(username);
    // console.log(email);
    // console.log(password);
    console.log('Sign Up Success!');
  }

  return (
    <div className="flex flex-col mx-96 px-32 my-20">
      <div className="flex justify-center mb-8">
        <h1 className={`rhythm text-5xl`}>SIGN UP</h1>
      </div>
      <div className="flex flex-col">
        <form action="/" method="POST" onSubmit={formSubmit}>
          <div
            className={`flex flex-col bg-[#E4E4E4] border-2 border-[#DF8D9F] my-8 pl-4 pr-4 py-2 rounded-lg`}
          >
            <label
              className={`rhythm border-2 border-b-[#DF8D9F] w-20`}
              htmlFor="username"
            >
              Username
            </label>
            <input
              className={`bg-[#E4E4E4] ruddy-pink w-96`}
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div
            className={`flex flex-col bg-[#E4E4E4] border-2 border-[#DF8D9F] my-8 pl-4 pr-4 py-2 rounded-lg`}
          >
            <label
              className={`rhythm border-2 border-b-[#DF8D9F] w-12`}
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`bg-[#E4E4E4] ruddy-pink w-96`}
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div
            className={`flex flex-col bg-[#E4E4E4] border-2 border-[#DF8D9F] my-8 pl-4 pr-4 py-2 rounded-lg`}
          >
            <label
              className={`rhythm border-2 border-b-[#DF8D9F] w-20`}
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`bg-[#E4E4E4] ruddy-pink w-96`}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={`mx-20 flex justify-center my-4 `}>
            <input
              className={`bg-[#DF8D9F] px-10 py-4 text-white rounded-lg`}
              type="submit"
              value="Create Account"
            />
          </div>
        </form>
      </div>
      <div className={`flex flex-col justify-center items-center`}>
        <div className={`my-2`}>
          <h1 className="font-bold">
            Already A Member?{' '}
            <span className={`ruddy-pink`}>
              <a href="">Log In</a>
            </span>{' '}
          </h1>
        </div>
        <div className={`my-5`}>
          <h1 className="font-bold">Or With</h1>
        </div>
        <div className={`my-2 flex flex-row justify-center items-center`}>
          <div className={`mx-3`}>
            <a href="">
              <img className="" src="/icons/facebook-icon.svg" alt="" />
            </a>
          </div>
          <div className={`mx-3`}>
            <a href="">
              <img className="" src="/icons/google-icon.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;
