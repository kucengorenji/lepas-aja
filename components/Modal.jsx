import React from 'react';

export default function Modal(props) {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center w-screen h-screen p-4 overflow-x-hidden overflow-y-auto">
      <div
        onClick={props.toggleModal}
        className="bg-[#313131] opacity-80 w-screen h-screen fixed top-0 left-0 bottom-0 right-0"
      ></div>
      <div className="rounded-md flex flex-col items-center relative max-w-[720px] w-full py-14 px-4 shadow-md bg-ruddy-pink">
        <h2 className="text-lg text-white">EMAIL</h2>
        <input
          className="max-w-[500px] w-full mt-3 mb-5 bg-white rounded-md focus:outline-none focus:shadow-outline text-[#DF8D9F] text-base p-2"
          placeholder="Enter your email/username here"
        />
        <button className="px-6 py-2 font-medium bg-white text-ruddy-pink rounded-[4px]">
          SEND
        </button>
      </div>
    </div>
  );
}
