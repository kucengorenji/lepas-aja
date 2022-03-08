import styles from '../../../styles/Home.module.css';
import ParticipantList from '../../../components/giveaway-room/ParticipantList';
import ProductDetail from '../../../components/giveaway-room/ProductDetail';
import RoomInfo from '../../../components/giveaway-room/RoomInfo';
import { getRoomById, getProductsData } from '../../../services/giveaway';

const Event = ({ id, data, productsData }) => {
  const room = data.data;
  const products = productsData.data;
  const participants = data.data.participants;

  console.log(room);

  return (
    <>
      <div className={styles.container + 'container'}>
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
