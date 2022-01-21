import React from 'react';
export default function CardProduct() {
  return (
    <div className="max-w-[250px] rounded-lg shadow-lg  bg-[#F0F0F0]">
      <img
        src="/images/sepatu.jpg"
        alt=""
        className="rounded-t-lg h-60 w-full object-cover"
      />
      <div className="px-4 pb-6 pt-4">
        <h5 className=" text-xl font-bold text-[#DF8D9F]">Sepatu Gunung</h5>
        <p className="text-[#DF8D9F] opacity-70 text-sm">moehzi</p>
        <div className="flex gap-2 items-center mt-2">
          <img src="/icons/map-pin.svg"></img>
          <p className="text-[#DF8D9F] text-sm">Makassar</p>
        </div>
      </div>
    </div>
  );
}
