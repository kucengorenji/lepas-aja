import PhotoShowcase from './PhotoShowcase';
import ProductInfo from './ProductInfo';
import { useUser } from '../../../context/user';
import StatusButton from './StatusButton';

const ProductDetail = ({ id, data, products }) => {
  const user = useUser();
  console.log(id);
  console.log(user);
  const isOwner = data.ownerId === user.uid;

  return (
    <section className="container p-5 mx-auto">
      <div className="border border-ruddy-pink w-full min-h-[400px] rounded-lg h-full flex p-8">
        <div className="text-center  items-center align-middle w-full">
          <PhotoShowcase products={products} />
        </div>
        <div className=" w-full flex-column px-3 pb-3 relative ">
          <div className="flex">
            <div className="w-full align-middle bg-ruddy-pink rounded-lg p-3">
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
          <StatusButton id={id} user={user} isOwner={isOwner} data={data} />
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
