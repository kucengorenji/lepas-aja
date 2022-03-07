import React, { useState, useEffect } from 'react';
import { CardHistory } from '../../components/CardHistory';
import { getGiveawayHistory } from '../../services/api';
import Pagination from '../../components/Pagination';
import { useUser } from '../../context/user';
import moment from 'moment';
import { Box, CircularProgress } from '@mui/material';
import Link from 'next/link';

const HistoryRoom = () => {
  const [history, setHistory] = useState([]);
  const user = useUser();
  const [token, setToken] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [historyPage] = useState(5);
  const [isLoading, setIsLoading] = useState(true);
  //   Get current index
  const indexOfLastHistory = currentPage * historyPage;
  const indexOfFirstHistory = indexOfLastHistory - historyPage;
  const currentHistory = history.slice(indexOfFirstHistory, indexOfLastHistory);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    setToken(user.token);
    if (token) {
      getGiveawayHistory(token).then((data) => {
        setHistory(data);
        setIsLoading(false);
      });
    }
  }, [token]);
  return (
    <div className="min-h-[80vh] container mx-auto text-lg text-ruddy-pink max-w-[1050px] rounded-[10px] border border-[#C4C4C4] my-4 p-4">
      <div className="flex justify-end gap-4">
        <Link href="/profile">
          <a>Biodata</a>
        </Link>
        <Link href="/profile/my-room">
          <a>Room Saya</a>
        </Link>

        <a className="underline underline-offset-8">Riwayat</a>
      </div>
      <h1 className="text-3xl font-semibold">Riwayat Join Room</h1>
      <div className="max-w-[950px] mt-8">
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
          currentHistory.map((item, index) => {
            return (
              <CardHistory
                date={moment.unix(item.createdAt).format('YYYY-MM-DD')}
                roomDesc={item.as}
                src={item.photoUrl}
                owner={item.owner}
                title={item.name}
              />
            );
          })
        )}

        <Pagination
          historyPerPage={historyPage}
          totalHistory={history.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default HistoryRoom;
