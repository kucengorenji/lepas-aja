import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { fetchProvinsi, fetchKota } from '../../services/api';

const EditProfile = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [gender, setGender] = useState('');
  const [dataProvinsi, setDataProvinsi] = useState([]);
  const [dataKota, setDataKota] = useState([]);
  const [provinsi, setProvinsi] = useState('');
  const [kota, setKota] = useState('');
  const [idKota, setIdKota] = useState();

  useEffect(() => {
    fetchProvinsi(setDataProvinsi);
    fetchKota(setDataKota, idKota);
  }, [idKota]);

  return (
    <section className="flex flex-col px-8 py-12">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="mb-8 text-4xl text-left text-ruddy-pink">
          Edit Profile
        </h1>
        <form className="flex flex-col justify-center w-full mt-6 md:flex-row gap-y-4 md:gap-x-32">
          <div className="flex flex-col max-w-[485px] gap-y-4 w-full flex-1">
            <div className="flex w-full gap-x-4">
              <div className="flex flex-col flex-1 gap-y-2">
                <label className="text-2xl font-medium opacity-70">
                  Nama Depan
                </label>
                <input className="flex flex-col px-4 py-3 leading-tight border rounded shadow appearance-none border-ruddy-pink focus:outline-none focus:shadow-outline" />
              </div>
              <div className="flex flex-col flex-1 gap-y-2">
                <label className="text-2xl font-medium opacity-70">
                  Nama Belakang
                </label>
                <input className="flex flex-col px-4 py-3 leading-tight border rounded shadow appearance-none border-ruddy-pink focus:outline-none focus:shadow-outline" />
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-2xl font-medium opacity-70">
                Jenis Kelamin
              </label>
              <select
                className="flex flex-col px-4 py-3 leading-tight border rounded border-ruddy-pink focus:outline-none focus:shadow-outline "
                value={gender}
                onChange={(e) => {
                  const selectedGender = e.target.value;
                  setGender(selectedGender);
                }}
              >
                <option>Laki-laki</option>
                <option>Perempuan</option>
              </select>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-2xl font-medium opacity-70">Alamat</label>
              <input className="flex flex-col px-4 py-3 leading-tight border rounded shadow appearance-none border-ruddy-pink focus:outline-none focus:shadow-outline" />
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-2xl font-medium opacity-70">
                Provinsi
              </label>
              <select
                className="flex flex-col px-4 py-3 leading-tight border rounded shadow border-ruddy-pink focus:outline-none focus:shadow-outline"
                value={provinsi}
                onChange={(e) => {
                  const selectedProvinsi = e.target.value;
                  setProvinsi(selectedProvinsi);
                  const idKota = dataProvinsi.find(
                    (item) => item.nama === selectedProvinsi
                  );
                  setIdKota(idKota.id);
                }}
              >
                {dataProvinsi.map((item, index) => {
                  return (
                    <option value={item.nama} key={index}>
                      {item.nama}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-2xl font-medium opacity-70">
                Kota/Kabupaten
              </label>
              <select
                className="flex flex-col px-4 py-3 leading-tight border rounded shadow border-ruddy-pink focus:outline-none focus:shadow-outline"
                value={kota}
                onChange={(e) => {
                  const selectedKota = e.target.value;
                  setKota(selectedKota);
                }}
              >
                {dataKota.map((item, index) => {
                  return (
                    <option value={item.nama} key={index}>
                      {item.nama}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="max-w-[485px] grow flex flex-col shrink-0">
            <div className="flex flex-col gap-y-2">
              <label className="text-2xl font-medium opacity-70">
                Tanggal Lahir
              </label>
              <div className="mb-4 shadow border-[#DF8D9F] border rounded py-3 px-4 text-gray-700 leading-tight flex flex-col ">
                <DatePicker
                  className=" bg-none"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-2xl font-medium opacity-70">No. HP</label>
              <input className="flex flex-col px-4 py-3 leading-tight border rounded shadow appearance-none border-ruddy-pink focus:outline-none focus:shadow-outline" />
            </div>
            <div className="flex flex-col mt-4 gap-y-2">
              <label className="text-2xl font-medium opacity-70">
                Foto Profile
              </label>
              <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="w-12 h-12 mx-auto text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="rounded-[4px] bg-[#DF8D9F] mx-auto w-full py-4 mt-8 text-xl text-white font-medium"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditProfile;
