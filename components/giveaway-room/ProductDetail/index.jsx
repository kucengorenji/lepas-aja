import PhotoShowcase from './PhotoShowcase';
import ProductInfo from './ProductInfo';

const ProductDetail = ({ data, products }) => {
  // const isOwner = data.owner === 'owner';
  console.log(data);
  console.log(products);
  return (
    <section className="container p-5 mx-auto">
      <div className="border border-ruddy-pink w-full min-h-[400px] rounded-lg h-full flex p-8">
        <div className="text-center  items-center align-middle flex-1">
          <PhotoShowcase products={products} />
        </div>
        <div className=" flex-1 flex-column p-3 relative">
          <div className="flex bg-ruddy-pink rounded-lg p-3">
            <div className="align-middle">
              <h3 className=" text-xl font-bold text-white">{data.name}</h3>
              <p className="text-white opacity-70 text-sm">{data.owner}</p>
              <div className="items-center flex gap-2 mt-2">
                <img src="/icons/map-pin.svg" />
                <p className="text-white text-sm">{data.location}</p>
              </div>
            </div>
            {/* {isOwner && (
              <>
                <button>undi</button>
              </>
            )} */}
          </div>
          <ProductInfo data={data} />
          <div className="mt-6 absolute bottom-0 mx-auto px-auto left-0 right-0 text-center">
            <button>
              <a
                href="#"
                className="inline-block text-lg px-12 py-4 rounded-xl leading-none border bg-ruddy-pink text-white hover:border-ruddy-pink hover:text-ruddy-pink hover:bg-white mt-4 lg:mt-0"
              >
                Ikuti giveaway
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
