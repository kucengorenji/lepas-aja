import CardCategory from './CardCategory';
import { category } from '../data/category';
// import { fetchCategory } from '../services/filter';
import { useEffect, useState } from 'react';
import images from '../assets/category';
import {
  fetchCategory,
  fetchProducts,
  filteringProducts,
} from '../services/filter';

const ICON_PATH = '/icons/category';

export default function ProductCategory({ categoryDataFunc }) {
  const [dataCategories, setDataCategories] = useState([]);

  async function fetchData() {
    let response = await fetchCategory();

    console.log(response);
    setDataCategories(response);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="flex flex-col mt-36 gap-y-12 max-w-[1200px]">
      <h1 className="mb-12 text-5xl font-black text-center text-gray-800 md:leading-9">
        Pilih barang yang <br />
        tersedia <span className="text-red-600 ">untukmu</span>
      </h1>
      <div className="flex flex-wrap gap-4 mx-auto mt-1">
        {console.log(dataCategories)}
        {dataCategories.map((data, index) => {
          return (
            <button
              key={index}
              onClick={() => categoryDataFunc(data.name)}
              //index+1 -> bisa di ganti API filter dari backend
            >
              <CardCategory
                key={index}
                name={data.name}
                title={data.title}
                src={`${ICON_PATH}/${data.name}3.png`}
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}
