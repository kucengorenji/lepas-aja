import axios from 'axios';

const baseUrl = 'https://lepasaja-backend.herokuapp.com/api/v1';

export const postRoom = async (payload, token) => {
  await axios.post(`${baseUrl}/rooms`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const getRoomById = async (id) => {
  const response = await axios.get(`${baseUrl}/rooms/${id}`);
  const data = response.data;
  return data;
};

export const getAllRooms = async (setState) => {
  const response = await axios.get(`${baseUrl}/rooms`);
  const rooms = await response.data;
  setState(rooms.data);
};
