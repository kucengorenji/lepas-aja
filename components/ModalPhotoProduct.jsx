import React from 'react';
import { Modal, Box } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '400',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const ModalPhotoProduct = (props) => {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col mt-4 gap-y-2">
            <div className="flex flex-col gap-y-2">
              <label className="text-2xl font-medium opacity-70">Judul</label>
              <input
                name="title"
                onChange={props.handleChange}
                className="flex flex-col px-4 py-3 leading-tight border rounded shadow appearance-none border-red-600 focus:outline-none focus:shadow-outline"
                maxLength="30"
                value={props.title}
              />
              <p className="text-black opacity-30">Maksimal 30 Karakter</p>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-2xl font-medium opacity-70">
                Deskripsi
              </label>
              <input
                name="alt"
                onChange={props.handleChange}
                className="flex flex-col px-4 py-3 leading-tight border rounded shadow appearance-none border-red-600 focus:outline-none focus:shadow-outline"
                maxLength="30"
                value={props.alt}
              />
              <p className="text-black opacity-30">Maksimal 30 Karakter</p>
            </div>
            <label className="text-2xl font-medium opacity-70">
              Foto Product
            </label>
            <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
              {props.preview ? (
                <>
                  <div className="flex-col text-sm text-gray-600">
                    <img
                      src={props.preview}
                      className="w-[485px] h-[300px] object-cover"
                    />
                    <label
                      htmlFor="file-upload"
                      className="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        onChange={props.handleImageChange}
                        accept="image/*"
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
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
                        onChange={props.handleImageChange}
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
            <button
              onClick={props.handleUploadPhoto}
              className="rounded-[4px] bg-red-600 w-[300px] py-4 mt-8 text-xl text-white font-medium"
            >
              Tambah Foto
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
