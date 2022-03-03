import React, { useState, useEffect } from 'react';
import CardProduct from './CardProduct';
import { getAllRooms } from '../services/giveaway';

const ProductGiveaway = () => {
  const [visible, setVisible] = useState(8);
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllRooms(setData);
  }, []);

  const showMoreItem = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  return (
    <section className="flex flex-col mt-14 gap-y-12 max-w-[1100px]">
      <div className="flex flex-wrap gap-8 mx-auto mt-8">
        {data.slice(0, visible).map((item, index) => {
          return (
            <CardProduct
              key={index}
              name={item.name}
              owner={item.owner}
              src={item.photoUrl}
              location={item.location}
            />
          );
        })}
      </div>
      <button
        onClick={showMoreItem}
        className="outline mx-auto outline-1 outline-[#DF8D9F] px-8 py-2 text-[#DF8D9F]"
      >
        SEE MORE
      </button>
    </section>
  );
};

export default ProductGiveaway;
