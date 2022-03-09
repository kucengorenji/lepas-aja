import React from 'react';
import Button from '@mui/material/Button';
import { TrashIcon, PencilAltIcon } from '@heroicons/react/solid';
import Link from 'next/link';

export const CardMyRoom = (props) => {
  return (
    <div className="mt-4 text-lg text-red-600 p-4  rounded-[10px] border border-[#C4C4C4] mx-auto">
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
            <div className="flex flex-col">
              <div className="flex items-center">
                <h5 className="text-sm font-bold">{props.owner}</h5>
                <p className="px-2 ml-2 text-xs text-white opacity-100 bg-yellow-500">
                  {props.userStatus}
                </p>
              </div>
              <p className="text-xl text-black font-semibold opacity-100 py-1">
                {props.title}
              </p>
              <Link href={`/giveaway/${props.id}`}>
                <a className="mr-4 underline hover:no-underline md:mr-6 text-red-600 text-sm">
                  Menuju room giveaway
                </a>
              </Link>
            </div>
          </div>
          {props.userStatus === 'Owner' ? (
            <div className="flex flex-col gap-y-4">
              <Link href={`/profile/products/${props.id}`}>
                <Button
                  id={props.id}
                  color="primary"
                  size="large"
                  variant="outlined"
                >
                  Lihat Produk
                </Button>
              </Link>

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
                  startIcon={<TrashIcon className="w-5 h-5 text-red-600" />}
                >
                  Delete
                </Button>
              </div>
            </div>
          ) : (
            <>
              <Button
                id={props.id}
                variant="outlined"
                color="error"
                onClick={props.handleEjectRoom}
              >
                batal join
              </Button>
            </>
          )}

          {/* <h5 className="px-6 py-2 text-white bg-red-600">Owner</h5> */}
        </div>
      </div>
    </div>
  );
};
