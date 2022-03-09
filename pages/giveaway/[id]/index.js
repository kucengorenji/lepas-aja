import styles from '../../../styles/Home.module.css';
import ParticipantList from '../../../components/giveaway-room/ParticipantList';
import ProductDetail from '../../../components/giveaway-room/ProductDetail';
import RoomInfo from '../../../components/giveaway-room/RoomInfo';
import { getRoomById, getProductsData } from '../../../services/giveaway';
import ToastError from '../../../components/ToastError';
import ToastSuccess from '../../../components/ToastSuccess';
import { useState } from 'react';

const Event = ({ id, data, productsData }) => {
  const room = data.data;
  const products = productsData.data;
  const participants = data.data.participants;

  console.log(room);

  const [isToast, setIsToast] = useState(true);

  const onToastClearClick = () => {
    console.log(isToast);
    setIsToast(false);
  }

  return (
    <>
      <div className={styles.container + 'container'}>
        {/* <div className='relative'> */}
          {/* {isToast && (<ToastSuccess
            boldText={`Success!`}
            text={`Anda telah join room`}
            onToastClearClick={onToastClearClick}
          />)} */}
          {/* <ToastError
            boldText={`Danger!`}
            text={`Anda tidak bisa join room`}
          /> */}
          
        {/* </div> */}
        <main className={styles.main + `top-0 p-6`}>
          <ProductDetail id={id} data={room} products={products} />
          <div className="flex flex-row w-full">
            <ParticipantList data={participants} />
            <RoomInfo data={room} />
          </div>
        </main>
      </div>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const { id } = query;
  const [data, productsData] = await Promise.all([
    getRoomById(id),
    getProductsData(id),
  ]);

  return {
    props: {
      data,
      productsData,
      id,
    },
  };
}

export default Event;
