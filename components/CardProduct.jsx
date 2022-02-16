import React from 'react';
import Link from 'next/link';

export default function CardProduct(props) {
  return (
    <div className="max-w-[250px] rounded-lg shadow-lg  bg-[#F0F0F0] ">
      <Link href={`/giveaway/${props.id}`}>
        <a>
          <img
            src={props.src}
            alt={props.name}
            className="object-cover w-full rounded-t-lg h-60"
          />
          <div className="px-4 pt-4 pb-6">
            <h5 className=" text-xl font-bold text-[#DF8D9F]">{props.name}</h5>
            <p className="text-[#DF8D9F] opacity-70 text-sm">{props.owner}</p>
            <div className="flex items-center gap-2 mt-2">
              <img src="/icons/map-pin.svg" />
              <p className="text-[#DF8D9F] text-sm">{props.location}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
