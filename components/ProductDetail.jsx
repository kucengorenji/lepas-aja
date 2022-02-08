import giveaway from '../data/giveaway';

export default function ProductDetail() {
  return (
    <section className="p-5">
      <div className="bg-slate-200 w-full min-h-[400px] rounded h-full flex p-8">
        <div className="text-center align-middle flex-1">
          <img src="" alt="" />
        </div>
        <div className=" flex-1 flex-column p-3 relative">
          <div className="align-middle">
            <h3 className=" text-xl font-bold text-[#DF8D9F]">Sepatu</h3>
            <p className="text-[#DF8D9F] opacity-70 text-sm">moehzi</p>
            <div className="items-center gap-2 mt-2">
              <img src="/icons/map-pin.svg" />
              <p className="text-[#DF8D9F] text-sm">makassar</p>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
              veniam? Nisi hic at veniam quam et perspiciatis ratione nostrum
              eum temporibus iure voluptate placeat odit nulla ullam,
              perferendis nam quae?
            </p>
          </div>
          <div className="mt-6 absolute bottom-0 mx-auto px-auto left-0 right-0 text-center">
            <button>
              <a
                href="#"
                className="inline-block text-sm px-4 py-2 leading-none border rounded bg-ruddy-pink text-white hover:border-ruddy-pink hover:text-ruddy-pink hover:bg-white mt-4 lg:mt-0"
              >
                Ikuti giveaway
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
