import { useState } from 'react';
import PhotoShowcase from './PhotoShowcase';
import ProductInfo from './ProductInfo';
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
          <PhotoShowcase products={selectedProduct} />
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
              <button className="p-1 basis-1/4">
                <a
                  href="#"
                  className="inline-block text-lg px-12 py-4 rounded-full leading-none border bg-ruddy-pink text-white hover:border-ruddy-pink hover:text-ruddy-pink hover:bg-white mt-4 lg:mt-0"
                >
                  Undi
                </a>
              </button>
            )}
          </div>
          <div className="flex my-2 max-w-3xl">
            <div>
              <ul className="flex-column border-ruddy-pink border rounded-lg">
                {products.map((product) => (
                  <li>
                    <button
                      onClick={handleSelectProduct}
                      className="bg-white p-1 m-2 rounded text-ruddy-pink w-20"
                    >
                      {product.name}
                    </button>
                  </li>
                ))}
                <li>
                  <button className="bg-ruddy-pink p-1 m-2 rounded text-white w-20">
                    <Link href={`/giveaway/${id}/add-product`}>
                      <a>add product</a>
                    </Link>
                  </button>
                </li>
              </ul>
            </div>

            <div className=" ml-3 p-3 bg-ruddy-pink text-white w-full h-auto rounded-lg">
              <p>{selectedProduct.description}</p>
            </div>
          </div>
          {isOwner ? (
            <div className="mt-6 bottom-0 mx-auto px-auto left-0 right-0 text-center">
              <button className="p-1">
                <a
                  href="#"
                  className="inline-block text-lg px-12 py-4 rounded-xl leading-none border bg-ruddy-pink text-white hover:border-ruddy-pink hover:text-ruddy-pink hover:bg-white mt-4 lg:mt-0"
                >
                  New Product
                </a>
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
