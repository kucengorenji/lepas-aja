import React, { useState } from 'react';
import { CardHistory } from '../../components/CardHistory';
import { history } from '../../data/history-room';
import Pagination from '../../components/Pagination';

const HistoryRoom = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [historyPage] = useState(5);

  //   Get current index
  const indexOfLastHistory = currentPage * historyPage;
  const indexOfFirstHistory = indexOfLastHistory - historyPage;
  const currentHistory = history.slice(indexOfFirstHistory, indexOfLastHistory);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="min-h-[80vh] container mx-auto text-lg text-ruddy-pink max-w-[1050px] rounded-[10px] border border-[#C4C4C4] my-4 p-4">
      <div className="flex justify-end gap-4">
        <a>Biodata</a>
        <a>Room Saya</a>
        <a>Riwayat</a>
      </div>
      <h1 className="text-3xl font-semibold">Riwayat Join Room</h1>
      <div className="max-w-[950px] mt-8">
        {currentHistory.map((item, index) => {
          return (
            <CardHistory
              date={item.date}
              roomDesc={item.roomDesc}
              src={item.image}
              owner={item.owner}
              status={item.status}
              title={item.title}
            />
          );
        })}
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
