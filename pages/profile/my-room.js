import React, { useState, useEffect, useCallback } from 'react';
import Pagination from '../../components/Pagination';
import moment from 'moment';
import 'moment/locale/id';
import {
  deleteRoom,
  editRoom,
  getMyRoom,
  getRoomById,
} from '../../services/api';
import { useUser } from '../../context/user';
import { CircularProgress, Box } from '@mui/material';
import Link from 'next/link';
import withProtected from '../../hoc/withProtected';
import { ModalDelete } from '../../components/ModalDelete';
import { CardMyRoom } from '../../components/CardMyRoom';
import { ModalEditRoom } from '../../components/ModalEditRoom';

const MyRoom = () => {
  const user = useUser();
  const [currentPage, setCurrentPage] = useState(1);
  const [myRoomPage] = useState(5);
  const [room, setRoom] = useState([]);
  const [isRoomUpdate, setIsRoomUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState();
  const indexOfLastRoom = currentPage * myRoomPage;
  const indexOfFirstRoom = indexOfLastRoom - myRoomPage;
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [roomId, setRoomId] = useState('');
  const [roomById, setRoomById] = useState({
    name: '',
    startAt: '',
    finishAt: '',
    description: '',
    condition: '',
  });

  function closeModalDelete() {
    setIsOpenDelete(false);
  }
  function closeModalEdit() {
    setIsOpenEdit(false);
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRoomById({
      ...roomById,
      [name]: value,
    });
  };

  useEffect(() => {
    if (token) {
      getRoomById(roomId, token).then((data) => {
        setRoomById({
          name: data.name,
          description: data.description,
          finishAt: moment.unix(data.finishAt),
          startAt: moment.unix(data.startAt),
          condition: data.condition,
        });
      });
    }
  }, [roomId]);

  useEffect(() => {
    setToken(user.token);
    setIsRoomUpdate(false);
    if (token) {
      getMyRoom(token).then((data) => {
        setRoom(data);
        setIsLoading(false);
      });
    }
  }, [token, isRoomUpdate]);

  const currentRoom = room.slice(indexOfFirstRoom, indexOfLastRoom);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleModalDelete = (e) => {
    e.preventDefault();
    const getRoomId = e.target.id;
    setRoomId(getRoomId);
    setIsOpenDelete(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: roomById.name,
      startAt: moment(roomById.startAt).format('YYYY-MM-DD'),
      finishAt: moment(roomById.finishAt).format('YYYY-MM-DD'),
      description: roomById.description,
      condition: roomById.condition,
    };
    editRoom(roomId, payload, token).then(() => {
      setIsOpenEdit(false);
      setIsRoomUpdate(true);
    });
  };

  const handleModalEdit = (e) => {
    e.preventDefault();
    const getRoomId = e.target.id;
    if (getRoomId) {
      setRoomId(getRoomId);
      setIsOpenEdit(true);
    }
  };
  const handleDelete = () => {
    deleteRoom(token, roomId);
    setIsOpenDelete(false);
  };
  return (
    <div className="min-h-[80vh] container mx-auto text-lg text-ruddy-pink max-w-[1050px] rounded-[10px] border border-[#C4C4C4] my-4 p-4">
      <div className="flex justify-end gap-4">
        <Link href="/profile">
          <a>Biodata</a>
        </Link>
        <Link href="/profile/my-room">
          <a className="underline underline-offset-8">Room Saya</a>
        </Link>
        <Link href="/profile/giveaway-history">
          <a>Riwayat</a>
        </Link>
      </div>
      <h1 className="text-3xl font-semibold">Room Saya</h1>
      {isLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <CircularProgress />
        </Box>
      ) : (
        room.length && (
          <div className="max-w-[950px] mt-8 mx-auto">
            {currentRoom.map((item, index) => {
              return (
                <CardMyRoom
                  id={item.id}
                  handleModalEdit={handleModalEdit}
                  handleModalDelete={handleModalDelete}
                  key={index}
                  date={moment
                    .unix(item.createdAt)
                    .locale('id')
                    .format('DD MMMM YYYY')}
                  userStatus={item.as}
                  src={item.photoUrl}
                  owner={item.owner}
                  title={item.name}
                />
              );
            })}
            <Pagination
              historyPerPage={myRoomPage}
              totalHistory={room.length}
              paginate={paginate}
            />
          </div>
        )
      )}
      {isOpenDelete && (
        <ModalDelete
          closeModal={closeModalDelete}
          isOpen={isOpenDelete}
          handleDelete={handleDelete}
        />
      )}

      {isOpenEdit && (
        <ModalEditRoom
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          condition={roomById.condition}
          nama={roomById.name}
          startGiveaway={roomById.startAt}
          startChange={(newValue) => {
            setRoomById({ ...roomById, startAt: newValue });
          }}
          endGiveaway={roomById.finishAt}
          endOnChange={(newValue) => {
            setRoomById({ ...roomById, finishAt: newValue });
          }}
          deskripsi={roomById.description}
          handleClose={closeModalEdit}
          open={isOpenEdit}
        />
      )}
    </div>
  );
};

export default withProtected(MyRoom);
