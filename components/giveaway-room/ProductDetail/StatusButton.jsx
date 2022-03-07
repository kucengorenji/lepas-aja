import { useEffect, useState } from 'react';
import Link from 'next/link';
import { joinGiveaway, leaveGiveaway } from '../../../services/giveaway';

const StatusButton = ({ id, user, isOwner, data }) => {
  const [isParticipant, setIsParticipant] = useState(false);
  const getParticipantStatus = Boolean(
    data.participants.find((participant) => participant.email === user.email)
  );
  const handleJoinRoom = async () => {
    try {
      await joinGiveaway(id, user, user.token);
    } catch (e) {
      console.error(e);
    }
  };

  const handleEjectRoom = async () => {
    try {
      await leaveGiveaway(id, user, user.token);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    setIsParticipant(getParticipantStatus);
  });

  return (
    <div className="mt-6 bottom-0 mx-auto px-auto left-0 right-0 text-center">
      {isOwner ? (
        <>
          <button className="p-1">
            <Link href={`/giveaway/${id}/add-product`}>
              <a className="inline-block text-lg px-12 py-4 rounded-xl leading-none border bg-ruddy-pink text-white hover:border-ruddy-pink hover:text-ruddy-pink hover:bg-white mt-4 lg:mt-0">
                add product
              </a>
            </Link>
          </button>
          <button className="p-1">
            <a
              href="#"
              className="inline-block text-lg px-12 py-4 rounded-xl leading-none border bg-ruddy-pink text-white hover:border-ruddy-pink hover:text-ruddy-pink hover:bg-white mt-4 lg:mt-0"
            >
              Edit Product
            </a>
          </button>
        </>
      ) : (
        <>
          <button
            className={`inline-block text-lg px-12 py-4 rounded-xl leading-none border mt-4 lg:mt-0 ${
              !isParticipant
                ? 'bg-ruddy-pink text-white hover:border-ruddy-pink hover:text-ruddy-pink hover:bg-white'
                : 'bg-gray-400 text-white cursor-not-allowed'
            }`}
            onClick={handleJoinRoom}
            disabled={isParticipant}
          >
            Ikuti giveaway
          </button>
        </>
      )}
      {isParticipant && (
        <>
          <button
            className={`inline-block text-lg px-2 py-4 rounded-xl leading-none border m-4 lg:mt-0 bg-red-600 text-white`}
            onClick={handleEjectRoom}
          >
            batal join
          </button>
        </>
      )}
    </div>
  );
};

export default StatusButton;
