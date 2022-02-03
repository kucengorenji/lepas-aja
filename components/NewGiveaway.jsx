import React from 'react';
import CardProduct from './CardProduct';

export default function NewGiveaway() {
  return (
    <section>
      <h1 className="font-bold text-[#DF8D9F] text-center text-4xl">
        NEW GIVEAWAY
      </h1>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        <CardProduct
          id="1"
          name="Sepatu Gunung"
          owner="moehzi"
          src="/images/sepatu.jpg"
          location="Makassar"
        />
        <CardProduct
          id="2"
          name="Sepatu Gunung"
          owner="moehzi"
          src="/images/sepatu.jpg"
          location="Makassar"
        />
        <CardProduct
          id="3"
          name="Sepatu Gunung"
          owner="moehzi"
          src="/images/sepatu.jpg"
          location="Makassar"
        />
      </div>
    </section>
  );
}
