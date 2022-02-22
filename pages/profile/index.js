import React from 'react';

const Profile = () => {
  return (
    <div className="container mx-auto text-lg text-ruddy-pink max-w-[1050px] rounded rounded-[10px] border border-[#C4C4C4] my-4 p-4">
      <div className="flex justify-end gap-4">
        <a>Biodata</a>
        <a>Room Saya</a>
        <a>Riwayat</a>
      </div>
      <div className="flex flex-wrap py-8 text-black gap-x-24">
        <div className="max-w-[320px] shrink-0 rounded rounded-[10px] border border-[#C4C4C4] flex flex-col items-center p-4">
          <img
            className="w-full h-[300px] rounded rounded-[15px] object-cover"
            src="/images/image2.jpg"
          />
          <button
            type="submit"
            className="rounded-[4px] bg-[#DF8D9F] w-full py-4 mt-8 text-xl text-white font-medium"
          >
            Pilih Foto
          </button>
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-y-4">
            <h4 className="text-2xl font-medium">Biodata Diri</h4>
            <div className="w-full">
              <div className="flex max-w-[500px] text-lg text-start">
                <p className="flex-1">Nama</p>
                <p className="flex-1">Tretan Muslim</p>
              </div>
            </div>
            <div className="w-full">
              <div className="flex max-w-[500px] text-lg text-start">
                <p className="flex-1">Tanggal Lahir</p>
                <p className="flex-1">6 November 1999</p>
              </div>
            </div>
            <div className="w-full">
              <div className="flex max-w-[500px] text-lg text-start">
                <p className="flex-1">Jenis Kelamin</p>
                <p className="flex-1">Laki Laki</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-8 gap-y-4">
            <h4 className="text-2xl font-medium">Biodata Diri</h4>
            <div className="w-full">
              <div className="flex max-w-[500px] text-lg text-start">
                <p className="flex-1">Nama</p>
                <p className="flex-1">Tretan Muslim</p>
              </div>
            </div>
            <div className="w-full">
              <div className="flex max-w-[500px] text-lg text-start">
                <p className="flex-1">Tanggal Lahir</p>
                <p className="flex-1">6 November 1999</p>
              </div>
            </div>
            <div className="w-full">
              <div className="flex max-w-[500px] text-lg text-start">
                <p className="flex-1">Jenis Kelamin</p>
                <p className="flex-1">Laki Laki</p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <button
                type="submit"
                className="rounded-[4px] text-[#DF8D9F] border border-[#DF8D9F] px-8 py-2 mt-8 text-lg font-medium"
              >
                Ubah Password
              </button>
              <button
                type="submit"
                className="rounded-[4px] bg-[#DF8D9F] px-8 py-2 mt-8 text-lg text-white font-medium"
              >
                Edit Profil
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
