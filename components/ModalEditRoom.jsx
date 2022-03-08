import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React from 'react';
import TextField from '@mui/material/TextField';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const ModalEditRoom = (props) => {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className="flex flex-col justify-center w-full mt-6 md:flex-row gap-y-4 md:gap-x-32">
            <div className="flex flex-col max-w-[485px] gap-y-4 w-full flex-1">
              <div className="flex flex-col gap-y-2">
                <label className="text-2xl font-medium opacity-70">
                  Nama Room
                </label>
                <input
                  name="name"
                  onChange={props.handleChange}
                  className="flex flex-col px-4 py-3 leading-tight border rounded shadow appearance-none border-ruddy-pink focus:outline-none focus:shadow-outline"
                  maxLength="30"
                  value={props.nama}
                />
                <p className="text-black opacity-30">Maksimal 30 Karakter</p>
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="text-2xl font-medium opacity-70">
                  Mulai Giveaway
                </label>
                <div className="mb-4 shadow appearance-none border-[#DF8D9F] border rounded py-3 px-4 text-gray-700 leading-tight flex flex-col ">
                  <LocalizationProvider dateAdapter={DateAdapter}>
                    <DatePicker
                      value={props.startGiveaway}
                      onChange={props.startChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="text-2xl font-medium opacity-70">
                  Akhir Giveaway
                </label>
                <div className="mb-4 shadow appearance-none border-[#DF8D9F] border rounded py-3 px-4 text-gray-700 leading-tight flex flex-col ">
                  <LocalizationProvider dateAdapter={DateAdapter}>
                    <DatePicker
                      value={props.endGiveaway}
                      onChange={props.endOnChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>
              </div>
            </div>
            <div className="max-w-[485px] grow flex flex-col shrink-0">
              <div className="flex flex-col gap-y-2">
                <label className="text-2xl font-medium opacity-70">
                  Syarat dan Ketentuan
                </label>
                <textarea
                  name="condition"
                  onChange={props.handleChange}
                  rows="6"
                  cols="33"
                  className="flex flex-col px-4 py-3 leading-tight border rounded shadow appearance-none border-ruddy-pink focus:outline-none focus:shadow-outline"
                  maxLength="200"
                  value={props.condition}
                />
                <p className="text-black opacity-30">Maksimal 200 Karakter</p>
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="mt-4 text-2xl font-medium opacity-70">
                  Deskripsi
                </label>
                <textarea
                  name="description"
                  onChange={props.handleChange}
                  rows="6"
                  cols="33"
                  className="flex flex-col px-4 py-3 leading-tight border rounded shadow appearance-none border-ruddy-pink focus:outline-none focus:shadow-outline"
                  maxLength="200"
                  value={props.deskripsi}
                />
                <p className="text-black opacity-30">Maksimal 200 Karakter</p>
              </div>
            </div>
          </form>
          <div className="w-full text-center">
            <button
              onClick={props.handleSubmit}
              className="rounded-[4px] bg-[#DF8D9F] w-[300px] py-4 mt-8 text-xl text-white font-medium"
            >
              Simpan Perubahan
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
