import React, { useState } from 'react';
import CardProduct from './CardProduct';

const data = [
  {
    id: '5b591617-9989-4d4b-8b5d-282533bf9591',
    name: 'sepatu gunung',
    owner: 'moehzi',
    image: '/images/sepatu.jpg',
    lokasi: 'makasar',
  },
  {
    id: '5b591617-9989-4d4b-8b5d-282533bf9592',
    name: 'Sendal jepit',
    owner: 'randymawar',
    image: '/images/sepatu.jpg',
    lokasi: 'jogja',
  },
  {
    id: '5b591617-9989-4d4b-8b5d-282533bf9593',
    name: 'Toa mesjid',
    owner: 'alditaher',
    image: '/images/sepatu.jpg',
    lokasi: 'Jakarta',
  },
  {
    id: '5b591617-9989-4d4b-8b5d-282533bf9594',
    name: 'Laptop GTX 3090',
    owner: 'riska',
    image: '/images/sepatu.jpg',
    lokasi: 'Banyuwangi',
  },
  {
    id: '5b591617-9989-4d4b-8b5d-282533bf9595',
    name: 'Taro Madura',
    owner: 'tretan',
    image: '/images/sepatu.jpg',
    lokasi: 'Madura',
  },
  {
    id: '5b591617-9989-4d4b-8b5d-282533bf9596',
    name: 'Sinte Kingkong',
    owner: 'coki',
    image: '/images/sepatu.jpg',
    lokasi: 'Bali',
  },
  {
    id: '5b591617-9989-4d4b-8b5d-282533bf9596',
    name: 'Sinte Kingkong',
    owner: 'coki',
    image: '/images/sepatu.jpg',
    lokasi: 'Bali',
  },
  {
    id: '5b591617-9989-4d4b-8b5d-282533bf9596',
    name: 'Sinte Kingkong',
    owner: 'coki',
    image: '/images/sepatu.jpg',
    lokasi: 'Bali',
  },
  {
    id: '5b591617-9989-4d4b-8b5d-282533bf9596',
    name: 'Sinte Kingkong',
    owner: 'coki',
    image: '/images/sepatu.jpg',
    lokasi: 'Bali',
  },
  {
    id: '5b591617-9989-4d4b-8b5d-282533bf9596',
    name: 'Sinte Kingkong',
    owner: 'coki',
    image: '/images/sepatu.jpg',
    lokasi: 'Bali',
  },
  {
    id: '5b591617-9989-4d4b-8b5d-282533bf9596',
    name: 'Sinte Kingkong',
    owner: 'coki',
    image: '/images/sepatu.jpg',
    lokasi: 'Bali',
  },
  {
    id: '5b591617-9989-4d4b-8b5d-282533bf9596',
    name: 'Sinte Kingkong',
    owner: 'coki',
    image: '/images/sepatu.jpg',
    lokasi: 'Bali',
  },
  {
    id: '5b591617-9989-4d4b-8b5d-282533bf9596',
    name: 'Sinte Kingkong',
    owner: 'coki',
    image: '/images/sepatu.jpg',
    lokasi: 'Bali',
  },
  {
    id: '5b591617-9989-4d4b-8b5d-282533bf9596',
    name: 'Sinte Kingkong',
    owner: 'coki',
    image: '/images/sepatu.jpg',
    lokasi: 'Bali',
  },
  {
    id: '5b591617-9989-4d4b-8b5d-282533bf9596',
    name: 'Sinte Kingkong',
    owner: 'coki',
    image: '/images/sepatu.jpg',
    lokasi: 'Bali',
  },
];

const ProductGiveaway = () => {
  const [visible, setVisible] = useState(8);

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
              src={item.image}
              location={item.lokasi}
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
