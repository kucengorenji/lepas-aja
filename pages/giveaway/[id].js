import styles from '../../styles/Home.module.css';
import ParticipantList from '../../components/giveaway-room/ParticipantList';
import ProductDetail from '../../components/giveaway-room/ProductDetail';
import RoomInfo from '../../components/giveaway-room/RoomInfo';
import { getRoomById, getProductsData } from '../../services/giveaway';

const Event = ({ data, productsData }) => {
  return (
    <>
      <div className={styles.container + 'container'}>
        <main className={styles.main + `top-0 p-6`}>
          <ProductDetail data={productsData} />
          <div className="flex flex-row w-full">
            <ParticipantList data={data} />
            <RoomInfo data={data} />
          </div>
        </main>
      </div>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const { id } = query;
  const { data } = await getRoomById(id);
  const { productsData } = await getProductsData(id);
  console.log(data);
  console.log(productsData);

  return {
    props: {
      data,
      productsData,
    },
  };
}

export default Event;
