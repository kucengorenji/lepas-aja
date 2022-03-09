import React, { useState, useEffect, useCallback } from 'react';
import Pagination from '../../../../components/Pagination';
import moment from 'moment';
import 'moment/locale/id';
import { useUser } from '../../../../context/user';
import { CircularProgress, Box } from '@mui/material';
import Link from 'next/link';
import withProtected from '../../../../hoc/withProtected';
import { ModalDelete } from '../../../../components/ModalDelete';
import { ModalEditProduct } from '../../../../components/ModalEditProduct';
import { CardMyProduct } from '../../../../components/CardMyProduct';
import {
  getProductsData,
  getProductById,
  editProduct,
  deleteProduct,
  getCategory,
  updateProductPhoto,
  postProductData,
  postProductPhoto,
} from '../../../../services/giveaway';
import { useRouter } from 'next/router';
import { Button, Alert } from '@mui/material';
import { ModalAddProduct } from '../../../../components/ModalAddProduct';
import { ModalPhotoProduct } from '../../../../components/ModalPhotoProduct';
import { BiArrowBack } from 'react-icons/bi';

const MyProduct = ({ productsData, id, category }) => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [categoryState, setCategoryState] = useState(category[0].name);
  const user = useUser();
  const [currentPage, setCurrentPage] = useState(1);
  const [myRoomPage] = useState(5);
  const [isRoomUpdate, setIsRoomUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState();
  const indexOfLastRoom = currentPage * myRoomPage;
  const indexOfFirstRoom = indexOfLastRoom - myRoomPage;
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenUpload, setIsOpenUpload] = useState(false);
  const [productId, setProductId] = useState('');
  const [productById, setProductById] = useState({
    name: '',
    description: '',
    category: '',
  });
  const [photo, setPhoto] = useState({
    title: '',
    alt: '',
  });
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();

  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  function closeModalDelete() {
    setIsOpenDelete(false);
  }
  function closeModalEdit() {
    setIsOpenEdit(false);
  }

  function closeModalAdd() {
    setIsOpenAdd(false);
  }
  function closeModalUpload() {
    setIsOpenUpload(false);
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProductById({
      ...productById,
      [name]: value,
    });
  };

  const handlePhotoChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPhoto({
      ...photo,
      [name]: value,
    });
  };

  useEffect(() => {
    if (productId) {
      getProductById(productId).then((data) => {
        setProductById({
          name: data.data.name,
          description: data.data.description,
          category: data.data.category,
        });
        setIsLoading(false);
      });
    }
  }, [productId]);

  useEffect(() => {
    setIsRoomUpdate(false);
    getProductsData(id).then((data) => {
      setProducts(data.data);
      setIsLoading(false);
    });
  }, [isRoomUpdate]);

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

  const currentRoom = products.slice(indexOfFirstRoom, indexOfLastRoom);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleModalDelete = (e) => {
    e.preventDefault();
    const getProductId = e.target.id;
    setProductId(getProductId);
    setIsOpenDelete(true);
  };

  const handleModalUpload = (e) => {
    setImage('');
    e.preventDefault();
    const getProductId = e.target.id;
    setProductId(getProductId);
    setIsOpenUpload(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: productById.name,
      description: productById.description,
      category: categoryState,
    };

    editProduct(productId, payload, user.token).then(() => {
      setIsOpenEdit(false);
      setIsRoomUpdate(true);
    });
  };

  const handleUploadPhoto = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('productPhoto', image);
    form.append('title', photo.title);
    form.append('alt', photo.alt);

    postProductPhoto(productId, form, user.token).then(() => {
      setIsOpenUpload(false);
      setIsRoomUpdate(true);
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substring(0, 5) === 'image') {
      setImage(file);
    } else {
      setImage(null);
    }
  };

  const handleSubmitNew = (e) => {
    e.preventDefault();
    const payload = {
      name: productById.name,
      description: productById.description,
      category: categoryState,
      roomId: id,
      qty: 1,
    };
    postProductData(payload, user.token).then((res) => {
      setIsOpenAdd(false);
      setIsRoomUpdate(true);
      setIsSuccess(true);
    });
  };

  const handleModalAdd = (e) => {
    e.preventDefault();
    setProductById('');
    setIsRoomUpdate(true);
    setIsOpenAdd(true);
  };

  const handleModalEdit = (e) => {
    e.preventDefault();
    const getProductId = e.target.id;
    if (getProductId) {
      setProductId(getProductId);
      setIsOpenEdit(true);
    }
  };
  const handleDelete = () => {
    deleteProduct(user.token, productId);
    setIsOpenDelete(false);
    setIsRoomUpdate(true);
  };

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        setIsError(false);
      }, 5000);
    }
  }, [isError]);

  return (
    <div className="min-h-[80vh] container mx-auto text-lg text-red-600 max-w-[1050px] rounded-[10px] border border-[#C4C4C4] my-4 p-4">
      <div className="w-full flex justify-between">
        <Link href="/profile/my-room">
          <Button
            className="justify-start left-0 text-red-600 gap-4"
            variant="text"
          >
            <BiArrowBack /> Kembali ke Room Saya
          </Button>
        </Link>
        <div className="inline-flex justify-end gap-4">
          <Link href="/profile">
            <a className=" p-1">Biodata</a>
          </Link>
          <Link href="/profile/my-room">
            <a className="underline underline-offset-8 p-1 hover:bg-slate-100 hover:rounded-lg duration-300">
              Produk Saya
            </a>
          </Link>
          <Link href="/profile/giveaway-history">
            <a className="p-1 hover:bg-slate-100 hover:rounded-lg duration-300">
              Riwayat
            </a>
          </Link>
        </div>
      </div>
      <div className="flex justify-between items-center mt-8 px-12 h-16">
        <h1 className="text-3xl font-semibold">Produk Saya</h1>
        <div className="">
          {isSuccess && (
            <div className="">
              <Alert variant="filled" severity="success">
                Anda telah berhasil menambahkan barang!
              </Alert>
            </div>
          )}
          {isError && (
            <div className="">
              <Alert variant="filled" severity="error">
                Anda tidak dapat menambahkan barang!
              </Alert>
            </div>
          )}
        </div>
        <Button
          onClick={handleModalAdd}
          color="success"
          size="medium"
          variant="outlined"
        >
          Tambahkan Barang
        </Button>
      </div>
      {isLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <CircularProgress />
        </Box>
      ) : products.length === 0 ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <h1 className="text-xl">Product anda masih kosong nih 😔</h1>
        </Box>
      ) : (
        <div className="max-w-[950px] mt-8 mx-auto">
          {currentRoom.map((item, index) => {
            return (
              <CardMyProduct
                id={item.id}
                handleModalUpload={handleModalUpload}
                handleModalEdit={handleModalEdit}
                handleModalDelete={handleModalDelete}
                key={index}
                date={moment
                  .unix(item.createdAt)
                  .locale('id')
                  .format('DD MMMM YYYY')}
                category={item.category}
                src={item.photoUrl[0].url}
                description={item.description}
                name={item.name}
              />
            );
          })}
          <Pagination
            historyPerPage={myRoomPage}
            totalHistory={products.length}
            paginate={paginate}
          />
        </div>
      )}
      {isOpenDelete && (
        <ModalDelete
          closeModal={closeModalDelete}
          isOpen={isOpenDelete}
          handleDelete={handleDelete}
        />
      )}

      {isOpenEdit && (
        <ModalEditProduct
          category={category}
          categoryState={categoryState}
          categoryOnChange={(e) => {
            const selectedCategory = e.target.value;
            setCategoryState(selectedCategory);
          }}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          description={productById.description}
          name={productById.name}
          handleClose={closeModalEdit}
          open={isOpenEdit}
        />
      )}

      {isOpenAdd && (
        <ModalAddProduct
          category={category}
          categoryState={categoryState}
          categoryOnChange={(e) => {
            const selectedCategory = e.target.value;
            setCategoryState(selectedCategory);
          }}
          handleSubmitNew={handleSubmitNew}
          handleChange={handleChange}
          description={productById.description}
          name={productById.name}
          handleClose={closeModalAdd}
          open={isOpenAdd}
        />
      )}

      {isOpenUpload && (
        <ModalPhotoProduct
          handleClose={closeModalUpload}
          open={isOpenUpload}
          preview={preview}
          title={photo.title}
          alt={photo.alt}
          handleChange={handlePhotoChange}
          handleImageChange={handleImageChange}
          handleUploadPhoto={handleUploadPhoto}
        />
      )}
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const { id } = query;
  const body = await getCategory();
  const category = body.data;

  return {
    props: {
      id,
      category,
    },
  };
}

export default MyProduct;
