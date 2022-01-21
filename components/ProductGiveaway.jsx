import React from 'react';
import CardProduct from './CardProduct';

const ProductGiveaway = () => {
  return (
    <section className="mt-14 flex flex-col gap-y-12">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-[#DF8D9F] text-center text-4xl">
          PRODUCT GIVEAWAY
        </h1>
        <div className="border-b-[3px] border-[#DF8D9F] max-w-[192px] w-full mt-3"></div>
      </div>

      <div className="flex gap-8 mt-8 flex-wrap mx-auto justify-center">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
      <button className="outline mx-auto outline-1 outline-[#DF8D9F] px-8 py-2 text-[#DF8D9F]">
        SEE MORE
      </button>
    </section>
  );
};

export default ProductGiveaway;
