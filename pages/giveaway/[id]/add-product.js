import React, { useState } from 'react';
import { getCategory, postProductData } from '../../../services/giveaway';
import { useUser } from '../../../context/user';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/router';
import { Alert } from '@mui/material';


const addProduct = ({ id, category }) => {
  const router = useRouter();
  const { register, handleSubmit, control } = useForm();
  const user = useUser();
  const [categoryState, setCategoryState] = useState(category[0].name);
  const [isSuccess, setIsSuccess] = useState(true);
  const [isError, setIsError] = useState(false);

  const onSubmit = async (data) => {
    try {
      await postProductData(data, user.token);
      console.log(data);
      setIsSuccess(true);
      setTimeout(() => {
        router.replace(`/giveaway/${id}`);
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
  }, [isError]);


  return (
    <section className="flex flex-col items-center py-12">
      <h1 className="text-4xl text-red-600">Buat Giveaway</h1>
      <div className="flex flex-col mt-6 gap-y-4 w-full mx-auto items-center">
        {isSuccess && (
          <div className='absolute top-32'>
            <Alert variant='filled' severity='success'>
              Anda telah berhasil mengedit profile!
            </Alert>
          </div>
        )}
        {isError && (
          <div className='absolute top-32'>
            <Alert variant='filled' severity='error'>
              Anda tidak dapat mengedit profile!
            </Alert>
          </div>
        )}
        <form
          onClick={handleSubmit(onSubmit)}
          className="flex flex-col max-w-[485px] gap-y-4 w-full flex-1"
        >
          
          <div className="flex flex-col gap-y-2">
            <label className="text-2xl font-medium opacity-70">
              Nama Barang
            </label>
            <input
              className="shadow appearance-none border-red-600 border rounded py-3 px-4 leading-tight flex flex-col focus:outline-none focus:shadow-outline"
              maxLength="30"
              {...register('name', { required: true })}
            />
            <p className="opacity-30 text-black">Maksimal 30 Karakter</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-2xl font-medium opacity-70">
              Jenis Barang
            </label>
            <select
              className="shadow appearance-none border-red-600 border rounded py-3 px-4 leading-tight flex flex-col focus:outline-none focus:shadow-outline"
              value={categoryState}
              onChange={(e) => {
                const selectedCategory = e.target.value;
                setCategoryState(selectedCategory);
              }}
            >
              {category.map((item, index) => {
                return (
                  <option value={item.name} key={index}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-2xl font-medium opacity-70">Kuantitas</label>
            <input
              className="shadow appearance-none border-red-600 border rounded py-3 px-4 leading-tight flex flex-col focus:outline-none focus:shadow-outline"
              type="number"
              {...register('qty', { required: true })}
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-2xl font-medium opacity-70">Notes</label>
            <textarea
              rows="6"
              cols="33"
              className="shadow appearance-none border-red-600 border rounded py-3 px-4 leading-tight flex flex-col focus:outline-none focus:shadow-outline"
              maxLength="200"
              {...register('description', { required: true })}
            />
            <p className="opacity-30 text-black">Maksimal 200 Karakter</p>
            <button
              type="submit"
              className="rounded-[4px] bg-[#DF8D9F] mx-auto w-full py-4 mt-8 text-xl text-white font-medium"
            >
              Tambahkan Barang
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export async function getServerSideProps({ query }) {
  const body = await getCategory();
  const category = body.data;
  const id = query.id;

  return {
    props: {
      category,
      id,
    },
  };
}

export default addProduct;
