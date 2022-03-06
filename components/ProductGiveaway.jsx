import React, { useState } from 'react';
import CardProduct from './CardProduct';
import { getAllRooms } from '../services/giveaway';
import axios from 'axios';
import {
  fetchCategory,
  fetchProducts,
  filteringProducts,
} from '../services/filter';

const ProductGiveaway = ({ categoryIdFilter, data }) => {
  const [visible, setVisible] = useState(8);

  const [filteredData, setFilteredData] = useState([]);

  async function fetchData() {
    let response = await fetchProducts();
    console.log(response.data);
    setData(response.data);
    setFilteredData(response.data);
  }

  async function filteredProducts() {
    let response = await filteringProducts(data, categoryIdFilter);

    setFilteredData(response);
    console.log(response);
  }

  useEffect(() => {
    fetchData();
    // getAllRooms(setData);
  }, []);

  useEffect(() => {
    filteredProducts();
    console.log(categoryIdFilter);
  }, [categoryIdFilter]);

  const showMoreItem = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  return (
    <section className="flex flex-col mt-14 gap-y-12 max-w-[1100px]">
      <div className="flex flex-wrap gap-8 mx-auto mt-8">
        {filteredData.slice(0, visible).map((item, index) => {
          return (
            <CardProduct
              id={item.id}
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
