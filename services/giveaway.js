import axios from 'axios';

const baseUrl = 'https://lepasaja-backend.herokuapp.com/api/v1';

export const postRoom = async (payload) => {
  await axios.post(`${baseUrl}/rooms`, payload);
};
