import React, { useState, useEffect } from 'react';
import CardProduct from './CardProduct';
import Carousel from 'react-elastic-carousel';
import axios from 'axios';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3, itemsToScroll: 3 },
];

export default function NewGiveaway() {
  const [data, setData] = useState([]);

  async function fetchData() {
    let response = await axios(
      `https://virtserver.swaggerhub.com/moehzi/LepasAja/1.0.0/rooms`
    );
    let user = await response.data;
    setData(user.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

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
              src={item.products.photoUrl}
              location={item.location}
            />
          );
        })}
      </Carousel>
    </section>
  );
}
