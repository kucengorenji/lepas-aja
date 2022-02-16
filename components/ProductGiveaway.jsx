import React, { useEffect, useState } from 'react';
import CardProduct from './CardProduct';
import { giveaway } from '../data/giveaway';

const ProductGiveaway = ({ categoryIdFilter }) => {
  const [visible, setVisible] = useState(8);

  const showMoreItem = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  // Nanti disini tinggal di map aja propsnya jadi tinggal gantiin variable data di line 26
  // nanti if statement di line 28 bisa dihapus

  return (
    <section className="flex flex-col mt-14 gap-y-12 max-w-[1100px]">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-[#DF8D9F] text-center text-4xl">
          PRODUCT GIVEAWAY
        </h1>
        <div className="border-b-[3px] border-[#DF8D9F] max-w-[192px] w-full mt-3"></div>
      </div>

      <div className="flex flex-wrap gap-8 mx-auto mt-8">
        {giveaway.slice(0, visible).map((item, index) => {
          if (item.id_cat === categoryIdFilter) {
            return (
              <CardProduct
                key={index}
                name={item.name}
                owner={item.owner}
                src={item.image}
                location={item.lokasi}
              />
            );
          }
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
