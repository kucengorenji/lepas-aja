import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const createRoom = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <section className="flex flex-col py-12 px-8">
      <h4 className="text-ruddy-pink text-2xl font-medium text-right mb-4">
        Room
      </h4>
      <h1 className="text-4xl text-ruddy-pink">Buat Giveaway</h1>
      <div className="flex flex-col md:flex-row mt-6 gap-y-4 md:gap-x-32">
        <div className="flex flex-col max-w-[485px] gap-y-4 w-full flex-1">
          <div className="flex flex-col gap-y-2">
            <label className="text-2xl font-medium opacity-70">Nama Room</label>
            <input
              className="shadow appearance-none border-ruddy-pink border rounded py-3 px-4 leading-tight flex flex-col focus:outline-none focus:shadow-outline"
              maxLength="30"
            />
            <p className="opacity-30 text-black">Maksimal 30 Karakter</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <label className=" text-2xl font-medium opacity-70">
              Mulai Giveaway
            </label>
            <div className="mb-4 shadow appearance-none border-[#DF8D9F] border rounded py-3 px-4 text-gray-700 leading-tight flex flex-col ">
              <DatePicker
                className=" bg-none"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                dateFormat="Pp"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <label className=" text-2xl font-medium opacity-70">
              Akhir Giveaway
            </label>
            <div className="mb-4 shadow appearance-none border-[#DF8D9F] border rounded py-3 px-4 text-gray-700 leading-tight flex flex-col ">
              <DatePicker
                className=" bg-none"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                dateFormat="Pp"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-2xl font-medium opacity-70">Deskripsi</label>
            <textarea
              rows="6"
              cols="33"
              className="shadow appearance-none border-ruddy-pink border rounded py-3 px-4 leading-tight flex flex-col focus:outline-none focus:shadow-outline"
              maxLength="200"
            />
            <p className="opacity-30 text-black">Maksimal 200 Karakter</p>
          </div>
        </div>
        <div className="max-w-[485px] grow flex flex-col shrink-0">
          <label className="text-2xl font-medium opacity-70">
            Syarat dan Ketentuan
          </label>
          <textarea
            rows="6"
            cols="33"
            className="my-2 shadow appearance-none border-ruddy-pink border rounded py-3 px-4 leading-tight flex flex-col focus:outline-none focus:shadow-outline"
            maxLength="200"
          />
          <p className="opacity-30 text-black">Maksimal 200 Karakter</p>
          <button className="rounded-[4px]   bg-[#DF8D9F] mx-auto w-full py-4 mt-8 text-xl text-white font-medium">
            Buat Room Giveaway
          </button>
        </div>
      </div>
    </section>
  );
};

export default createRoom;
