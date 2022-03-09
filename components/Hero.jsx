import React from 'react';

export const Hero = () => {
  return (
    <div className="container flex flex-col items-center py-12 mx-auto sm:py-24">
      <div className="flex-col items-center justify-center w-11/12 mb-5 sm:w-2/3 lg:flex sm:mb-10">
        <h1 className="text-2xl font-black leading-7 text-center text-gray-800 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:leading-10">
          Ga butuh lagi? <br />
          <span className="text-red-600"> LepasAja </span>
          sekarang
        </h1>
        <p className="mt-5 text-sm font-normal text-center text-gray-400 sm:mt-10 lg:w-10/12 sm:text-lg">
          Sebuah website dimana kalian bisa berbagi kebahagian kepada orang lain
          dengan berbagi barang - barang yang sudah tidak kita pakai lagi.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <button className="px-4 py-2 text-sm text-white transition duration-150 ease-in-out bg-red-600 border border-red-600 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 hover:bg-red-600 lg:text-xl lg:font-bold sm:px-10 sm:py-4">
          Mulai Ikut
        </button>
        <button className="px-4 py-2 ml-4 text-sm text-red-600 transition duration-150 ease-in-out bg-transparent border border-red-600 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 hover:border-red-600 lg:text-xl lg:font-bold hover:text-red-600 sm:px-10 sm:py-4">
          Bagi barang
        </button>
      </div>
    </div>
  );
};
