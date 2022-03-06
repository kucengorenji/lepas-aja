import giveawayRoom from '../../data/giveaway-room';
import PhotoShowcase from './PhotoShowcase';
import ProductInfo from './ProductInfo';

const ProductDetail = ({ giveawayRoom }) => {
  const isOwner = giveawayRoom.owner === 'owner';

  return (
    <section className="container p-5 mx-auto">
      <div className="border border-ruddy-pink w-full min-h-[400px] rounded-lg h-full flex p-8">
        <div className="text-center  items-center align-middle flex-1">
          <PhotoShowcase image={giveawayRoom.image} />
        </div>
        <div className=" flex-1 flex-column p-3 relative">
          <div className="flex">
            <div className="align-middle">
              <h3 className=" text-xl font-bold text-[#DF8D9F]">
                {giveawayRoom.name}
              </h3>
              <p className="text-[#DF8D9F] opacity-70 text-sm">
                {giveawayRoom.owner}
              </p>
              <div className="items-center flex gap-2 mt-2">
                <img src="/icons/map-pin.svg" />
                <p className="text-[#DF8D9F] text-sm">{giveawayRoom.lokasi}</p>
              </div>
            </div>
            {isOwner && (
              <>
                <button>undi</button>
              </>
            )}
          </div>
          <ProductInfo props={props} />
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
