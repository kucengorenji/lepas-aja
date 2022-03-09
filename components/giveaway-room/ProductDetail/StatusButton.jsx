import { useEffect, useState } from 'react';
import Link from 'next/link';
import { joinGiveaway, leaveGiveaway } from '../../../services/giveaway';
import { useRouter } from 'next/router';
import ToastSuccess from '../../../components/ToastSuccess';
import ToastError from '../../../components/ToastError';


const StatusButton = ({ id, user, isOwner, data }) => {
  const router = useRouter();
  const [isParticipant, setIsParticipant] = useState(false);
  const [isToastSuccess, setIsToastSuccess] = useState(false);
  const [isToastError, setIsToastError] = useState(false);
  const [isToastSuccessEject, setIsToastSuccessEject] = useState(false);
  const [isToastErrorEject, setIsToastErrorEject] = useState(false);
  const getParticipantStatus = Boolean(
    data.participants.find((participant) => participant.email === user.email)
  );
  const handleJoinRoom = async () => {
    try {
      await joinGiveaway(id, user, user.token);
      setIsToastSuccess(true);
      setTimeout(() => {
        router.reload();
      }, 3500)
    } catch (e) {
      console.error(e);
      setIsToastError(true);
    }
  };

  const handleEjectRoom = async () => {
    try {
      await leaveGiveaway(id, user, user.token);
      setIsToastSuccessEject(true);
      setTimeout(() => {
        router.reload();
      }, 3500)
    } catch (e) {
      console.error(e);
      setIsToastErrorEject(true);
    }
  };

  useEffect(() => {
    setIsParticipant(getParticipantStatus);
  });

  const onToastSuccessClear = () => {
    setIsToastSuccess(false);
  }

  useEffect(() => {
    if(isToastSuccess){
      setTimeout(() => {
        setIsToastSuccess(false);
      }, 3000)
    }
  }, [isToastSuccess]);

  const onToastErrorClear = () => {
    setIsToastError(false);
  }

  useEffect(() => {
    if(isToastError){
      setTimeout(() => {
        setIsToastError(false);
      }, 3000)
    }
  }, [isToastError]);

  const onToastSuccessClearEject = () => {
    setIsToastSuccess(false);
  }

  useEffect(() => {
    if(isToastSuccessEject){
      setTimeout(() => {
        setIsToastSuccessEject(false);
      }, 3000)
    }
  }, [isToastSuccessEject]);

  const onToastErrorClearEject = () => {
    setIsToastError(false);
  }

  useEffect(() => {
    if(isToastErrorEject){
      setTimeout(() => {
        setIsToastErrorEject(false);
      }, 3000)
    }
  }, [isToastErrorEject])

  return (
    <div className="mt-6 bottom-0 mx-auto px-auto left-0 right-0 text-center">
      <div className='absolute w-72 bottom-36 left-44'>
        {isToastSuccess && (<ToastSuccess
          boldText={`Success!`}
          text={`Anda telah join room`}
          onToastClearClick={onToastSuccessClear}
        />)}
        {isToastError && (<ToastError
          boldText={`Warning!`}
          text={`Anda tidak bisa mengikuti giveaway!`}
          onToastClearClick={onToastErrorClear}
        />)}
        {isToastSuccessEject && (<ToastSuccess
          boldText={`Success!`}
          text={`Anda telah leave room`}
          onToastClearClick={onToastSuccessClearEject}
        />)}
        {isToastErrorEject && (<ToastError
          boldText={`Warning!`}
          text={`Anda tidak bisa leave room!`}
          onToastClearClick={onToastErrorClearEject}
        />)}
      </div>
      {isOwner ? (
        <>
          <button className="p-1">
            <Link href={`/profile/products/${id}`}>
              <a className="inline-block text-lg px-12 py-4 rounded-xl leading-none border bg-red-600 text-white hover:border-red-600 hover:text-red-600 hover:bg-white mt-4 lg:mt-0 duration-300">
                add/edit product
              </a>
            </Link>
          </button>
        </>
      ) : (
        <>
          <button
            className={`inline-block text-lg px-12 py-4 rounded-xl leading-none border mt-4 lg:mt-0 ${
              !isParticipant
                ? 'bg-red-600 text-white hover:border-red-600 hover:text-red-600 hover:bg-white'
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
