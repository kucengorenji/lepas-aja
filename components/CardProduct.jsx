import React from 'react';
import Link from 'next/link';

export default function CardProduct(data) {
  console.log(data);
  return (
    <div className="max-w-[250px] rounded-lg shadow-lg  bg-[#F0F0F0] group relative overflow-hidden">
      <Link href={`/giveaway/${data.id}`}>
        <a>
          <img
            src={data.src}
            alt={data.name}
            className="object-cover w-[350px] rounded-t-lg h-60"
          />
          <div className="absolute bottom-0 left-0 invisible w-full px-6 py-4 transition duration-150 ease-in group-hover:visible group-hover:bg-red-600">
            <h5 className="text-xl font-bold text-white ">{data.name}</h5>
            <p className="text-sm text-white opacity-70">{data.owner}</p>
            <div className="flex items-center gap-2 mt-2">
              <img src="/icons/map-pin.svg" />
              <p className="text-sm text-white">{data.location}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
