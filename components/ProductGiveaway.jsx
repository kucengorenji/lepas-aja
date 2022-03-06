import React, { useState } from 'react';
import CardProduct from './CardProduct';

const ProductGiveaway = ({ data }) => {
  const [visible, setVisible] = useState(8);

  const showMoreItem = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  return (
    <section className="flex flex-col mt-14 gap-y-12 max-w-[1100px]">
      <div className="flex flex-wrap gap-8 mx-auto mt-8">
        {data.slice(0, visible).map((data, index) => {
          return (
            <CardProduct
              id={data.id}
              key={index}
              name={data.name}
              owner={data.owner}
              src={data.photoUrl}
              location={data.location}
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
