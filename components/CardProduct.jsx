import React from 'react';
import Link from 'next/link';

export default function CardProduct(props) {
  return (
    <div className="max-w-[250px] rounded-lg shadow-lg  bg-[#F0F0F0] group relative overflow-hidden">
      <Link href={`/giveaway/${props.id}`}>
        <a>
          <img
            src={props.src}
            alt={props.name}
            className="object-cover w-full rounded-t-lg h-60"
          />
          <div className="invisible group-hover:visible absolute bottom-0 left-0 w-full px-6 py-4 group-hover:bg-ruddy-pink transition ease-in duration-150">
            <h5 className=" text-xl font-bold text-white">{props.name}</h5>
            <p className="text-white opacity-70 text-sm">{props.owner}</p>
            <div className="flex items-center gap-2 mt-2">
              <img src="/icons/map-pin.svg" />
              <p className="text-white text-sm">{props.location}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
