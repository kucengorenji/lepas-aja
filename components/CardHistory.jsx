import React from 'react';

export const CardHistory = (props) => {
  return (
    <div className="mt-4 text-lg text-ruddy-pink p-4  rounded-[10px] border border-[#C4C4C4] mx-auto">
      <div className="text-black">
        <div className="flex items-center justify-between text-lg">
          <p className="font-semibold">
            Giveaway |
            <span className="ml-3 text-sm opacity-70">{props.date}</span>
          </p>
          <p className="px-4 py-1 text-sm text-white opacity-100 bg-ruddy-pink">
            {props.roomDesc}
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-x-4">
            <img
              className="w-[80px] h-[80px] object-cover rounded"
              src={props.src}
            />
            <div>
              <div className="flex items-center">
                <h5 className="text-lg font-semibold">{props.owner}</h5>
                <p className="px-2 ml-2 text-xs text-white opacity-100 bg-ruddy-pink">
                  {props.status}
                </p>
              </div>
              <p>{props.title}</p>
            </div>
          </div>
          {/* <h5 className="px-6 py-2 text-white bg-ruddy-pink">Owner</h5> */}
        </div>
      </div>
    </div>
  );
};
