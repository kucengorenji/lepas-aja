import React, { useState, useEffect, useRef } from 'react';
import { fetchProvinsi, fetchKota } from '../../services/api';
import { useUser } from '../../context/user';
import withProtected from '../../hoc/withProtected';
// import { getProfileById } from '../../services/api';
import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import TextField from '@mui/material/TextField';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import moment from 'moment';

const EditProfile = () => {
  const router = useRouter();
  const user = useUser();
  const [dataProvinsi, setDataProvinsi] = useState([]);
  const [dataKota, setDataKota] = useState([]);
  const [idKota, setIdKota] = useState(getIdkota?.id);
  const [dataBio, setDataBio] = useState({});
  const [loading, setLoading] = useState(true);

  const getProfileById = async () => {
    let response = await axios.get(
      `https://lepasaja-backend.herokuapp.com/api/v1/users/${user.uid}`
    );
    let biodata = await response.data;
    setDataBio(biodata.data);
    setLoading(false);
  };

  const fetchKota = async () => {
    let response = await axios(
      `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${idKota}`
    );
    let dataKota = await response.data;
    setDataKota(dataKota.kota_kabupaten);
  };

  const fetchProvinsi = async () => {
    let response = await axios(
      `https://dev.farizdotid.com/api/daerahindonesia/provinsi`
    );
    let dataProvinsi = await response.data;
    setDataProvinsi(dataProvinsi.provinsi);
  };

  useEffect(() => {
    fetchProvinsi();
    fetchKota();
  }, [idKota]);

  useEffect(() => {
    getProfileById();
  }, []);

  const getIdkota = dataProvinsi.find(
    (item) => item.nama === dataBio.address?.province
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      firstname: dataBio.firstname,
      lastname: dataBio.lastname,
      gender: dataBio.gender,
      address: dataBio.address?.address,
      province: dataBio.address?.province,
      city: dataBio.address?.city,
      birthday: dataBio.birthday,
      phoneNumber: dataBio.phoneNumber,
    };
    axios
      .put(
        `https://lepasaja-backend.herokuapp.com/api/v1/users/${user.uid}`,
        userData,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        console.log(response.status);
        router.replace('/profile');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  //   console.log(user.token);
  //   console.log('kota', dataBio.address?.city);
  return (
    <section className="flex flex-col px-8 py-12">
      {loading ? (
        <i>Loading...</i>
      ) : (
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="mb-8 text-4xl text-left text-ruddy-pink">
            Edit Profile
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center w-full mt-6 md:flex-row gap-y-4 md:gap-x-32"
          >
            <div className="flex flex-col max-w-[485px] gap-y-4 w-full flex-1">
              <div className="flex w-full gap-x-4">
                <div className="flex flex-col flex-1 gap-y-2">
                  <label className="text-2xl font-medium opacity-70">
                    Nama Depan
                  </label>
                  <input
                    onChange={(e) => setDataBio({ firstname: e.target.value })}
                    className="flex flex-col px-4 py-3 leading-tight border rounded shadow appearance-none border-ruddy-pink focus:outline-none focus:shadow-outline"
                    value={dataBio.firstname}
                  />
                </div>
                <div className="flex flex-col flex-1 gap-y-2">
                  <label className="text-2xl font-medium opacity-70">
                    Nama Belakang
                  </label>
                  <input
                    className="flex flex-col px-4 py-3 leading-tight border rounded shadow appearance-none border-ruddy-pink focus:outline-none focus:shadow-outline"
                    onChange={(e) => setDataBio({ lastname: e.target.value })}
                    value={dataBio.lastname}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="text-2xl font-medium opacity-70">
                  Jenis Kelamin
                </label>
                <select
                  className="flex flex-col px-4 py-3 leading-tight border rounded border-ruddy-pink focus:outline-none focus:shadow-outline "
                  onChange={(e) => setDataBio({ gender: e.target.value })}
                  value={dataBio.gender}
                >
                  <option value="LAKI_LAKI">Laki - laki</option>
                  <option value="PEREMPUAN">Perempuan</option>
                </select>
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="text-2xl font-medium opacity-70">
                  Alamat
                </label>
                <input
                  className="flex flex-col px-4 py-3 leading-tight border rounded shadow appearance-none border-ruddy-pink focus:outline-none focus:shadow-outline"
                  value={dataBio.address?.address}
                  onChange={(e) =>
                    setDataBio({ address: { address: e.target.value } })
                  }
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="text-2xl font-medium opacity-70">
                  Provinsi
                </label>
                <select
                  className="flex flex-col px-4 py-3 leading-tight border rounded shadow border-ruddy-pink focus:outline-none focus:shadow-outline"
                  value={dataBio.address?.province}
                  onChange={(e) => {
                    setDataBio({ address: { province: e.target.value } });

                    const kota = dataProvinsi.find(
                      (item) => item.nama === e.target.value
                    );
                    console.log(kota);
                    setIdKota(kota.id);
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
                  value={dataBio.address?.city}
                  onChange={(e) => {
                    const selectedKota = e.target.value;
                    setDataBio({ address: { city: selectedKota } });
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
                  <LocalizationProvider dateAdapter={DateAdapter}>
                    <DatePicker
                      value={moment(dataBio.birthday).format('L')}
                      onChange={(newValue) => {
                        setDataBio({ birthday: newValue });
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="text-2xl font-medium opacity-70">
                  No. HP
                </label>
                <input
                  className="flex flex-col px-4 py-3 leading-tight border rounded shadow appearance-none border-ruddy-pink focus:outline-none focus:shadow-outline"
                  value={dataBio.phoneNumber}
                  onChange={(e) => {
                    setDataBio({ phoneNumber: e.target.value });
                  }}
                />
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
      )}
    </section>
  );
};

export default withProtected(EditProfile);
