import ProductDetail from '../../components/ProductDetail';
import styles from '../../styles/Home.module.css';
import Head from 'next/head';
import ParticipantList from '../../components/ParticipantList';
import RoomInfo from '../../components/RoomInfo';
import axios from 'axios';

const Event = () => {
  axios
    .get(
      'https://virtserver.swaggerhub.com/ahmadnzr/LepasAja/1.0.0/rooms/5911a1cc-8780-4d1f-a509-45007d1ac8b0'
    )
    .then((res) => {
      console.log(res.data.data);
    });
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main + `top-0 p-6`}>
          <ProductDetail />
          <div className="flex flex-row w-full">
            <ParticipantList />
            <RoomInfo />
          </div>
        </main>
      </div>
    </>
  );
};

export default Event;
