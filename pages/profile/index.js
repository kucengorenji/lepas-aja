import React, { useState, useEffect } from 'react';
import { useUser } from '../../context/user';
import ListBio from '../../components/ListBio';
import withProtected from '../../hoc/withProtected';
import { getProfileById } from '../../services/api';
import { useRouter } from 'next/dist/client/router';
import moment from 'moment';
import 'moment/locale/id';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

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
  }, []);

  return (
    <div className="container mx-auto text-lg text-ruddy-pink max-w-[1050px] rounded-[10px] border border-[#C4C4C4] my-4 p-4">
      <div className="flex justify-end gap-4">
        <a className="underline underline-offset-8">Biodata</a>
        <a>Room Saya</a>
        <a>Riwayat</a>
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
          <div className="max-w-[320px] shrink-0 rounded-[10px] border border-[#C4C4C4] flex flex-col items-center p-4">
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
              <ListBio title="Jenis Kelamin" content={biodata.gender} />
            </div>
            <div className="flex flex-col mt-8 gap-y-4">
              <h4 className="text-2xl font-medium">Kontak</h4>
              <ListBio title="Email" content={biodata.email} />
              <ListBio title="Nomor HP" content={biodata.phoneNumber} />
              <ListBio
                title="Alamat"
                content={`${biodata.address?.address}, ${biodata.address?.city}, ${biodata.address?.province}, ${biodata.address?.zipCode}`}
              />
              <div className="flex gap-x-4">
                <button
                  onClick={() => router.replace('/reset-password')}
                  className="rounded-[4px] text-[#DF8D9F] border border-[#DF8D9F] px-8 py-2 mt-8 text-lg font-medium"
                >
                  Ubah Password
                </button>
                <button
                  type="submit"
                  className="rounded-[4px] bg-[#DF8D9F] px-8 py-2 mt-8 text-lg text-white font-medium"
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
