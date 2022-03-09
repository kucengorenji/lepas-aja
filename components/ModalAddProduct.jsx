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

export const ModalAddProduct = (props) => {
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
                  Nama Product
                </label>
                <input
                  name="name"
                  onChange={props.handleChange}
                  className="flex flex-col px-4 py-3 leading-tight border rounded shadow appearance-none border-red-600 focus:outline-none focus:shadow-outline"
                  maxLength="30"
                  value={props.name}
                />
                <p className="text-black opacity-30">Maksimal 30 Karakter</p>
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="text-2xl font-medium opacity-70">
                  Jenis Barang
                </label>
                <select
                  className="shadow appearance-none border-red-600 border rounded py-3 px-4 leading-tight flex flex-col focus:outline-none focus:shadow-outline"
                  value={props.categoryState}
                  onChange={props.categoryOnChange}
                >
                  {props.category.map((item, index) => {
                    return (
                      <option value={item.name} key={index}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
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
                  className="flex flex-col px-4 py-3 leading-tight border rounded shadow appearance-none border-red-600 focus:outline-none focus:shadow-outline"
                  maxLength="200"
                  value={props.description}
                />
                <p className="text-black opacity-30">Maksimal 200 Karakter</p>
              </div>
            </div>
          </form>
          <div className="w-full text-center">
            <button
              onClick={props.handleSubmitNew}
              className="rounded-[4px] bg-red-600 w-[300px] py-4 mt-8 text-xl text-white font-medium"
            >
              Tambahkan Perubahan
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
