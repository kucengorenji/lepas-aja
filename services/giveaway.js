import axios from 'axios';

const baseUrl = 'https://lepasaja-backend.herokuapp.com/api/v1';

export const postRoom = async (payload, headers) => {
  await axios.post(`${baseUrl}/rooms`, payload, headers);
};

// gagal untuk dipisah dari file service giveaway. langsung fetch di file
// export const getAllRooms = async () => {
//   await axios.get(`${baseUrl}/rooms`);
// };
