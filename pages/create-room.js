import React, { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm, Controller } from 'react-hook-form';
import { postRoom } from '../services/giveaway';
import { useUser } from '../context/user';
import { useRouter } from 'next/dist/client/router';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from 'react-datepicker';
import { Alert } from '@mui/material';

const createRoom = () => {
  const { register, handleSubmit, control } = useForm();
  const user = useUser();
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmit = async (data) => {
    try {
      console.log(data);
      await postRoom(data, user.token);
      setIsSuccess(true);
      setTimeout(() => {
        router.replace(`/profile/my-room`);
      }, 3500)
    } catch (e) {
      console.error(e);
      setIsError(true);
    }
  };

  useEffect(() => {
    if(isSuccess){
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000)
    }
  }, [isSuccess]);

  useEffect(() => {
    if(isError){
      setTimeout(() => {
        setIsError(false);
      }, 5000)
    }
  }, [isError])

  return (
    <section className="flex flex-col px-8 py-12">
      <h4 className="mb-4 text-2xl font-medium text-right text-ruddy-pink">
        Room
      </h4>
      <div className="flex flex-col items-center justify-center w-full">
        {isSuccess && (
          <div className='absolute top-32'>
            <Alert variant='filled' severity='success'>
              Anda telah berhasil membuat room!
            </Alert>
          </div>
        )}
        {isError && (
          <div className='absolute top-32'>
            <Alert variant='filled' severity='error'>
              Anda tidak dapat membuat room! Silahkan lengkapi profil anda terlebih dahulu!
            </Alert>
          </div>
        )}
        <h1 className="mb-8 text-4xl text-ruddy-pink">Buat Giveaway</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center w-full mt-6 md:flex-row gap-y-4 md:gap-x-32"
        >
          <div className="flex flex-col max-w-[485px] gap-y-4 w-full flex-1">
            <div className="flex flex-col gap-y-2">
              <label className="text-2xl font-medium opacity-70">
                Nama Room
              </label>
              <input
                className="flex flex-col px-4 py-3 leading-tight border rounded shadow appearance-none border-ruddy-pink focus:outline-none focus:shadow-outline"
                maxLength="30"
                {...register('name', { required: true })}
              />
              <p className="text-black opacity-30">Maksimal 30 Karakter</p>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-2xl font-medium opacity-70">
                Mulai Giveaway
              </label>
              <div className="mb-4 shadow appearance-none border-[#DF8D9F] border rounded py-3 px-4 text-gray-700 leading-tight flex flex-col ">
                <Controller
                  control={control}
                  name="startAt"
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <DatePicker
                      className=" bg-none"
                      selected={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      showTimeSelect
                      dateFormat="Pp"
                    />
                  )}
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-2xl font-medium opacity-70">
                Akhir Giveaway
              </label>
              <div className="mb-4 shadow border-[#DF8D9F] border rounded py-3 px-4 text-gray-700 leading-tight flex flex-col ">
                <Controller
                  control={control}
                  name="finishAt"
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <LocalizationProvider dateAdapter={DateAdapter}>
                      <DatePicker
                        className=" bg-none"
                        selected={value}
                        onBlur={onBlur}
                        onChange={onChange}
                        showTimeSelect
                        dateFormat="Pp"
                      />
                    </LocalizationProvider>
                  )}
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-2xl font-medium opacity-70">
                Deskripsi
              </label>
              <textarea
                rows="6"
                cols="33"
                className="flex flex-col px-4 py-3 leading-tight border rounded shadow appearance-none border-ruddy-pink focus:outline-none focus:shadow-outline"
                maxLength="200"
                {...register('description', { required: true })}
              />
              <p className="text-black opacity-30">Maksimal 200 Karakter</p>
            </div>
          </div>
          <div className="max-w-[485px] grow flex flex-col shrink-0">
            <label className="text-2xl font-medium opacity-70">
              Syarat dan Ketentuan
            </label>
            <textarea
              rows="6"
              cols="33"
              className="flex flex-col px-4 py-3 my-2 leading-tight border rounded shadow appearance-none border-ruddy-pink focus:outline-none focus:shadow-outline"
              maxLength="200"
              {...register('condition', { required: true })}
            />
            <p className="text-black opacity-30">Maksimal 200 Karakter</p>
            <button
              type="submit"
              className="rounded-[4px] bg-[#DF8D9F] mx-auto w-full py-4 mt-8 text-xl text-white font-medium hover:animate-pulse"
            >
              Buat Room Giveaway
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default createRoom;
