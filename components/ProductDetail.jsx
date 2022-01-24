export default function ProductDetail() {
  return (
    <section className="w-full min-h-[400px] ">
      <div className="bg-slate-200 rounded h-full flex p-8">
        <div className="text-center align-middle flex-1">
          <img src="" alt="" />
        </div>
        <div className="align-middle flex-1 p-3 ">
          <div>
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
          <div className="mt-6 text-center justify-center bottom-0">
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
