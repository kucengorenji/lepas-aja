import React, { useState, useEffect } from 'react';
import { useUser } from '../../context/user';
import ListBio from '../../components/ListBio';
import withProtected from '../../hoc/withProtected';
import { getProfileById } from '../../services/api';
import { useRouter } from 'next/dist/client/router';
import moment from 'moment';
import 'moment/locale/id';
import { CircularProgress, Box } from '@mui/material';
import Link from 'next/link';
import { BiArrowBack } from 'react-icons/bi';
import Button from '@mui/material/Button';

const Profile = () => {
  const router = useRouter();
  const user = useUser();
  const [biodata, setBiodata] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProfileById(user.uid).then((data) => {
      setBiodata(data);
      setLoading(false);
    });
  }, [biodata.photoUrl]);

  return (
    <div className="container mx-auto text-lg text-red-600 max-w-[1050px] rounded-[10px] border border-[#C4C4C4] my-4 p-4">
      <div className="w-full flex justify-between">
        <Link href="/">
          <Button
            className="justify-start left-0 text-red-600 gap-4"
            variant="text"
          >
            <BiArrowBack /> Kembali ke beranda
          </Button>
        </Link>
        <div className="inline-flex justify-end gap-4">
          <Link href="/profile">
            <a className="underline underline-offset-8 p-1">Biodata</a>
          </Link>
          <Link href="/profile/my-room">
            <a className="p-1 hover:bg-slate-100 hover:rounded-lg duration-300">
              Room Saya
            </a>
          </Link>
          <Link href="/profile/giveaway-history">
            <a className="p-1 hover:bg-slate-100 hover:rounded-lg duration-300">
              Riwayat
            </a>
          </Link>
        </div>
      </div>
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
        <div className="flex flex-wrap items-start py-8 text-black gap-x-24">
          <div className="max-w-[320px] shrink-0 rounded-[10px] border-dashed border-2 border-red-600 flex flex-col items-center p-4">
            <img
              className="w-full h-[300px] rounded-[15px] object-cover"
              src={biodata.photoUrl}
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-y-4">
              <h4 className="text-2xl font-medium">Biodata Diri</h4>
              <ListBio title="Nama" content={biodata.displayName} />
              <ListBio
                title="Tanggal Lahir"
                content={moment
                  .unix(biodata.birthday)
                  .locale('id')
                  .format('DD MMMM YYYY')}
              />
              <ListBio
                title="Jenis Kelamin"
                content={
                  biodata.gender === 'LAKI_LAKI' ? 'Laki laki' : 'Perempuan'
                }
              />
            </div>
            <div className="flex flex-col mt-8 gap-y-4">
              <h4 className="text-2xl font-medium">Kontak</h4>
              <ListBio title="Email" content={biodata.email} />
              <ListBio title="Nomor HP" content={biodata.phoneNumber} />
              <ListBio title="Alamat" content={biodata.address?.address} />
              <ListBio
                title="Alamat Detail"
                content={`${biodata.address?.street}, ${biodata.address?.city}, ${biodata.address?.province}, ${biodata.address?.zipCode}`}
              />
              <div className="flex gap-x-4">
                <button
                  onClick={() => router.replace('/reset-password')}
                  className="rounded-[4px] text-red-600 border border-red-600 px-8 py-2 mt-8 text-lg font-medium hover:bg-red-600 hover:text-white"
                >
                  Ubah Password
                </button>
                <button
                  type="submit"
                  className="rounded-[4px] bg-red-600 px-8 py-2 mt-8 text-lg text-white font-medium border hover:border hover:border-red-600 hover:text-red-600 hover:bg-white duration-300"
                  onClick={() => router.replace('/profile/edit-profile')}
                >
                  Edit Profil
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default withProtected(Profile);
