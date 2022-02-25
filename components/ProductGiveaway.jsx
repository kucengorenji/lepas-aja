import React, { useState, useEffect } from 'react';
import CardProduct from './CardProduct';
import axios from 'axios';
import { getAllRooms } from '../services/giveaway';

const ProductGiveaway = () => {
  const [visible, setVisible] = useState(8);

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://lepasaja-backend.herokuapp.com/api/v1/rooms`
      );
      const user = await response.data;
      setData(user.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const showMoreItem = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  return (
    <section className="flex flex-col mt-14 gap-y-12 max-w-[1100px]">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-[#DF8D9F] text-center text-4xl">
          PRODUCT GIVEAWAY
        </h1>
        <div className="border-b-[3px] border-[#DF8D9F] max-w-[192px] w-full mt-3"></div>
      </div>

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
