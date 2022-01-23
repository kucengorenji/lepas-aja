import React from 'react';

function login() {
  return (
    <section className="w-full min-h-[80vh] flex flex-col justify-center items-center py-8">
      <h1 className="text-5xl mb-14">LOGIN</h1>
      <form className="mb-4 flex flex-col max-w-[450px] w-full">
        <div className="mb-4 shadow appearance-none border-[#DF8D9F] border rounded py-2 px-4 text-gray-700 leading-tight flex flex-col bg-[#E4E4E4]">
          <label
            className="text-[#706C88] mb-1 border-b-[3px] border-[#DF8D9F] max-w-max"
            htmlFor="username-email"
          >
            Email/Username
          </label>
          <input
            className="bg-[#E4E4E4] focus:outline-none focus:shadow-outline text-[#DF8D9F] text-xl"
            placeholder="Enter your email/username here"
          />
        </div>
        <div className="mb-4 shadow appearance-none border-[#DF8D9F] border rounded py-2 px-4 text-gray-700 leading-tight flex flex-col bg-[#E4E4E4]">
          <label
            className="text-[#706C88] mb-1 border-b-[3px] border-[#DF8D9F] max-w-max"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="bg-[#E4E4E4] focus:outline-none focus:shadow-outline text-[#DF8D9F] text-xl"
            id="password"
            type="password"
            placeholder="Enter your password here"
          />
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="w-4 h-4 text-[#DF8D9F] justify-center form-checkbox"
            />
            <span className="ml-2 text-lg text-gray-700">Remember Me</span>
          </label>
        </div>
        <div className="flex flex-col items-center gap-4">
          <button className="rounded-[4px] bg-[#DF8D9F] mx-auto max-w-[196px] w-full py-4 mt-8 text-xl text-white font-medium">
            Login
          </button>
          <a
            class="font-bold text-lg text-black opacity-50"
            href="#password-request"
          >
            Forgot Password?
          </a>
        </div>
        <div className="flex flex-col items-center mt-8 gap-y-4">
          <p className="font-bold opacity-70">Or With</p>
          <div className="flex gap-x-8">
            <a href="http://www.google.com">
              <img src="/icons/facebook.svg" />
            </a>
            <a href="http://www.google.com">
              <img src="/icons/google.svg" />
            </a>
          </div>
        </div>
      </form>
    </section>
  );
}

export default login;
