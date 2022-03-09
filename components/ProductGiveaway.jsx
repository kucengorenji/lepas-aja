import React, { useState, useEffect } from 'react';
import CardProduct from './CardProduct';
import { filteringProducts } from '../services/filter';

const ProductGiveaway = ({ categoryIdFilter, data }) => {
  const [visible, setVisible] = useState(8);
  const [filteredData, setFilteredData] = useState([]);

  async function filteredProducts() {
    const response = await filteringProducts(data, categoryIdFilter);
    setFilteredData(response);
  }

  useEffect(() => {
    filteredProducts();
    console.log(categoryIdFilter);
  }, [categoryIdFilter]);

  const showMoreItem = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  return (
    <section className="flex flex-col mt-1 gap-y-12 max-w-[1100px]">
      <div className="flex flex-wrap gap-8 mx-auto mt-8">
        {filteredData.slice(0, visible).map((data, index) => {
          return (
            <CardProduct
              id={data.roomId}
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
        className="outline mx-auto outline-1 outline-red-600 px-8 py-2 text-red-600"
      >
        SEE MORE
      </button>
    </section>
  );
};

export default ProductGiveaway;
