import React from 'react';
import Button from '@mui/material/Button';
import { TrashIcon, PencilAltIcon } from '@heroicons/react/solid';
import Link from 'next/link';

export const CardMyRoom = (props) => {
  return (
    <div className="mt-4 text-lg text-ruddy-pink p-4  rounded-[10px] border border-[#C4C4C4] mx-auto">
      <div className="text-black">
        <div className="flex items-center justify-between text-lg">
          <p className="font-semibold">
            Giveaway |
            <span className="ml-3 text-sm opacity-70">{props.date}</span>
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
                  {props.userStatus}
                </p>
              </div>
              <Link href={`/profile/products/${props.id}`}>
                <a>{props.title}</a>
              </Link>
            </div>
          </div>
          {props.userStatus === 'Owner' ? (
            <div className="flex items-center gap-x-4">
              <Button
                id={props.id}
                onClick={props.handleModalEdit}
                color="success"
                size="medium"
                variant="outlined"
                startIcon={<PencilAltIcon className="w-5 h-5" />}
              >
                Edit
              </Button>
              <Button
                id={props.id}
                onClick={props.handleModalDelete}
                color="error"
                size="medium"
                variant="outlined"
                startIcon={<TrashIcon className="w-5 h-5 text-ruddy-pink" />}
              >
                Delete
              </Button>
            </div>
          ) : (
            <>
              <button
                id={props.id}
                className={`inline-block text-lg px-2 py-4 rounded-xl leading-none border m-4 lg:mt-0 bg-red-600 text-white`}
                onClick={props.handleEjectRoom}
              >
                batal join
              </button>
            </>
          )}

          {/* <h5 className="px-6 py-2 text-white bg-ruddy-pink">Owner</h5> */}
        </div>
      </div>
    </div>
  );
};
