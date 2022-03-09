import React from 'react';

export const CardHistory = (props) => {
  return (
    <div className="mt-4 text-lg text-red-600 p-4  rounded-[10px] border border-[#C4C4C4] mx-auto">
      <div className="text-black">
        <div className="flex items-center justify-between text-lg">
          <p className="font-semibold">
            Giveaway |
            <span className="ml-3 text-sm opacity-70">{props.date}</span>
          </p>
          <p className="w-[90px] text-center py-1 mr-3 text-xs font-semibold text-white opacity-100 bg-red-600">
            {props.roomDesc}
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex w-full gap-x-4">
            <img
              className="w-[80px] h-[80px] object-cover rounded"
              src={props.src}
            />
            <div className="w-full">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="flex-1 text-sm font-bold">{props.owner}</h5>
                  <p>{props.title}</p>
                </div>
                {props.roomDesc !== 'Owner' &&
                  (props.isWinner === true ? (
                    <div className="text-center">
                      <p className="text-4xl">🏆</p>
                      <p className="mt-2 text-xs font-semibold ">
                        Selamat, kamu menang
                      </p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <p className="text-4xl">😔</p>
                      <p className="mt-2 text-xs font-semibold ">
                        Yahhh, kamu kalah
                      </p>
                    </div>
                  ))}

                {/* <p className="px-2 ml-2 text-xs text-white opacity-100 bg-red-600">
                  {props.status}
                </p> */}
              </div>
            </div>
          </div>
          {/* <h5 className="px-6 py-2 text-white bg-red-600">Owner</h5> */}
        </div>
      </div>
    </div>
  );
};
