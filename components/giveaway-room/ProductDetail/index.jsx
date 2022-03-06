import { useState } from 'react';
import PhotoShowcase from './PhotoShowcase';
import ProductInfo from './ProductInfo';
import ProductInfoHadless from './ProductInfoHeadless';
import { useUser } from '../../../context/user';
import Link from 'next/link';

const ProductDetail = ({ id, data, products }) => {
  const user = useUser();
  const isOwner = true;
  // const isOwner = data.owner === user.uid;
  const [selectedProduct, setSelectedProduct] = useState([]);
  const tes = products.map((product) => {
    return product;
  });

  const handleSelectProduct = () => {
    setSelectedProduct(tes);
  };

  return (
    <section className="container p-5 mx-auto">
      <div className="border border-ruddy-pink w-full min-h-[400px] rounded-lg h-full flex p-8">
        <div className="text-center  items-center align-middle flex-1">
          <PhotoShowcase products={products} />
        </div>
        <div className=" flex-1 flex-column px-3 pb-3 relative ">
          <div className="flex">
            <div className="basis-3/4 align-middle bg-ruddy-pink rounded-lg p-3">
              <h3 className=" text-xl font-bold text-white">{data.name}</h3>
              <p className="text-white opacity-70 text-sm">{data.owner}</p>
              <div className="items-center flex gap-2 mt-2">
                <img src="/icons/map-pin.svg" />
                <p className="text-white text-sm">{data.location}</p>
              </div>
            </div>
            {isOwner && (
              <div className="pl-3 basis-1/4 ">
                <button
                  href="#"
                  className="inline-block h-full w-full text-lg m-auto rounded-lg leading-none border bg-ruddy-pink text-white hover:border-ruddy-pink hover:text-ruddy-pink hover:bg-white"
                >
                  UNDI
                </button>
              </div>
            )}
          </div>
          <ProductInfo id={id} products={products} />
          {isOwner ? (
            <div className="mt-6 bottom-0 mx-auto px-auto left-0 right-0 text-center">
              <button className="p-1">
                <Link href={`/giveaway/${id}/add-product`}>
                  <a className="inline-block text-lg px-12 py-4 rounded-xl leading-none border bg-ruddy-pink text-white hover:border-ruddy-pink hover:text-ruddy-pink hover:bg-white mt-4 lg:mt-0">
                    add product
                  </a>
                </Link>
              </button>
              <button className="p-1">
                <a
                  href="#"
                  className="inline-block text-lg px-12 py-4 rounded-xl leading-none border bg-ruddy-pink text-white hover:border-ruddy-pink hover:text-ruddy-pink hover:bg-white mt-4 lg:mt-0"
                >
                  Edit Product
                </a>
              </button>
            </div>
          ) : (
            <div className="mt-6 bottom-0 mx-auto px-auto left-0 right-0 text-center">
              <button>
                <a
                  href="#"
                  className="inline-block text-lg px-12 py-4 rounded-xl leading-none border bg-ruddy-pink text-white hover:border-ruddy-pink hover:text-ruddy-pink hover:bg-white mt-4 lg:mt-0"
                >
                  Ikuti giveaway
                </a>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
