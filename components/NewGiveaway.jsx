import React from 'react';
import CardProduct from './CardProduct';

export default function NewGiveaway() {
  return (
    <section className="mt-5">
      <h1 className="font-bold text-[#DF8D9F] text-center text-4xl">
        NEW GIVEAWAY
      </h1>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        <CardProduct
          name="Sepatu Gunung"
          owner="moehzi"
          src="/images/sepatu.jpg"
          location="Makassar"
        />
        <CardProduct
          name="Sepatu Gunung"
          owner="moehzi"
          src="/images/sepatu.jpg"
          location="Makassar"
        />
        <CardProduct
          name="Sepatu Gunung"
          owner="moehzi"
          src="/images/sepatu.jpg"
          location="Makassar"
        />
      </div>
    </section>
  );
}
