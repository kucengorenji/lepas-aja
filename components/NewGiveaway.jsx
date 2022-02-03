import React from 'react';
import CardProduct from './CardProduct';
import Carousel from 'react-elastic-carousel';
import { data } from '../data/data';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3, itemsToScroll: 3 },
];

export default function NewGiveaway() {
  return (
    <section className="mt-5 w-full max-w-[950px]">
      <h1 className="font-bold mb-5 text-[#DF8D9F] text-center text-4xl">
        NEW GIVEAWAY
      </h1>
      <Carousel breakPoints={breakPoints}>
        {data.map((item, index) => {
          return (
            <CardProduct
              key={index}
              name={item.name}
              owner={item.owner}
              src={item.image}
              location={item.lokasi}
            />
          );
        })}
      </Carousel>
    </section>
  );
}
