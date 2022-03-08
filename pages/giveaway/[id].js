import ProductDetail from '../../components/ProductDetail';
import styles from '../../styles/Home.module.css';
import Head from 'next/head';
import ParticipantList from '../../components/ParticipantList';
import ParticipantLists from '../../components/ParticipantLists';
import RoomInfo from '../../components/RoomInfo';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';

const Event = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios
      .get(`https://lepasaja-backend.herokuapp.com/api/v1/rooms/${id}`)
      .then((res) => {
        console.log(res.data.data);
      });
    const user = await response.data;
    setData(user);
  };
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
            {/* <ParticipantList /> */}
            <ParticipantLists />
            <RoomInfo />
          </div>
        </main>
      </div>
    </>
  );
};

export default Event;
