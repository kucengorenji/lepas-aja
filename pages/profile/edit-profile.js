import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {
  fetchProvinsi,
  fetchKota,
  getProfileById,
  editImage,
  editBio,
} from '../../services/api';
import { useUser } from '../../context/user';
import withProtected from '../../hoc/withProtected';
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
  const [idKota, setIdKota] = useState();
  const [loading, setLoading] = useState(true);
  const [dataBio, setDataBio] = useState({
    firstname: '',
    lastname: '',
    gender: '',
    address: '',
    province: '',
    city: '',
    birthday: '',
    phoneNumber: '',
    zipCode: '',
  });
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  useEffect(() => {
    fetchKota(idKota).then((data) => {
      setDataKota(data);
      setDataBio({ ...dataBio, city: data[0]?.nama });
    });
  }, [idKota]);

  useEffect(() => {
    fetchProvinsi().then((data) => setDataProvinsi(data));
    getProfileById(user.uid).then((data) => {
      setDataBio({
        firstname: data.firstname,
        lastname: data.lastname,
        gender: data.gender,
        address: data.address?.address,
        province: data.address?.province,
        birthday: moment.unix(data.birthday),
        city: data.address?.city,
        phoneNumber: data.phoneNumber,
        zipCode: data.address?.zipCode,
      });
      fetchProvinsi().then((prov) => {
        const kota = prov.find((item) => item.nama === data.address?.province);
        setIdKota(kota?.id);
        setLoading(false);
      });
    });
  }, []);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      firstname: dataBio.firstname,
      lastname: dataBio.lastname,
      gender: dataBio.gender,
      address: dataBio.address,
      province: dataBio.province,
      city: dataBio.city,
      birthday: moment(dataBio.birthday).format('YYYY-MM-DD'),
      phoneNumber: dataBio.phoneNumber,
      zipCode: dataBio.zipCode,
    };

    const form = new FormData();
    form.append('avatar', image);

    editImage(user.uid, form, user.token)
      .then((response) => {
        console.log(response.data);
        console.log(response.status);
        router.replace('/profile');
      })
      .catch((error) => {
        console.log(error.message);
      });

    editBio(user.uid, userData, user.token)
      .then((response) => {
        console.log(response.data);
        console.log(response.status);
        router.replace('/profile');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDataBio({
      ...dataBio,
      [name]: value,
    });
  };

  const handleChangeIdKota = async (e) => {
    handleChange(e);
    const kota = dataProvinsi.find((item) => item.nama === e.target.value);
    console.log(kota);
    console.log('city ', dataBio.city);
    setIdKota(kota.id);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substring(0, 5) === 'image') {
      setImage(file);
    } else {
      setImage(null);
    }
  };

  return (
    <section className="flex flex-col px-8 py-12">
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <CircularProgress />
        </Box>
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
                    onChange={handleChange}
                    name="firstname"
                    className="flex flex-col px-4 py-3 leading-tight border rounded shadow appearance-none border-ruddy-pink focus:outline-none focus:shadow-outline"
                    value={dataBio.firstname}
                  />
                </div>
                <div className="flex flex-col flex-1 gap-y-2">
                  <label className="text-2xl font-medium opacity-70">
                    Nama Belakang
                  </label>
                  <input
                    name="lastname"
                    className="flex flex-col px-4 py-3 leading-tight border rounded shadow appearance-none border-ruddy-pink focus:outline-none focus:shadow-outline"
                    onChange={handleChange}
                    value={dataBio.lastname}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="text-2xl font-medium opacity-70">
                  Jenis Kelamin
                </label>
                <select
                  name="gender"
                  className="flex flex-col px-4 py-3 leading-tight border rounded border-ruddy-pink focus:outline-none focus:shadow-outline "
                  onChange={handleChange}
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
                  name="address"
                  className="flex flex-col px-4 py-3 leading-tight border rounded shadow appearance-none border-ruddy-pink focus:outline-none focus:shadow-outline"
                  value={dataBio.address}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col flex-1 gap-y-2">
                <label className="text-2xl font-medium opacity-70">
                  Kode Pos
                </label>
                <input
                  onChange={handleChange}
                  name="zipCode"
                  className="flex flex-col px-4 py-3 leading-tight border rounded shadow appearance-none border-ruddy-pink focus:outline-none focus:shadow-outline"
                  value={dataBio.zipCode}
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="text-2xl font-medium opacity-70">
                  Provinsi
                </label>
                <select
                  name="province"
                  className="flex flex-col px-4 py-3 leading-tight border rounded shadow border-ruddy-pink focus:outline-none focus:shadow-outline"
                  value={dataBio.province}
                  onChange={handleChangeIdKota}
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
                  name="city"
                  className="flex flex-col px-4 py-3 leading-tight border rounded shadow border-ruddy-pink focus:outline-none focus:shadow-outline"
                  value={dataBio.city}
                  onChange={handleChange}
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
                      value={dataBio.birthday}
                      onChange={(newValue) => {
                        setDataBio({ ...dataBio, birthday: newValue });
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
                  name="phoneNumber"
                  className="flex flex-col px-4 py-3 leading-tight border rounded shadow appearance-none border-ruddy-pink focus:outline-none focus:shadow-outline"
                  value={dataBio.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col mt-4 gap-y-2">
                <label className="text-2xl font-medium opacity-70">
                  Foto Profile
                </label>
                <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                  {preview ? (
                    <>
                      <div className="flex text-sm text-gray-600">
                        <img
                          src={preview}
                          className="w-[485px] h-[300px] object-cover"
                        />
                        <label
                          htmlFor="file-upload"
                          className="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            onChange={handleImageChange}
                            accept="image/*"
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                    </>
                  ) : (
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
                            onChange={handleImageChange}
                            accept="image/*"
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
                  )}
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
