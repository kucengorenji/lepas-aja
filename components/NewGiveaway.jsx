import React from 'react';
import CardProduct from './CardProduct';

export default function NewGiveaway() {
  return (
    <section>
      <h1 className="font-bold text-[#DF8D9F] text-center text-4xl">
        NEW GIVEAWAY
      </h1>
      <div className="flex gap-8 mt-8 flex-wrap justify-center">
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </section>
  );
}
