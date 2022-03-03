import axios from 'axios';

const baseUrl = 'https://lepasaja-backend.herokuapp.com/api/v1';

export const postRoom = async (payload, headers) => {
  await axios.post(`${baseUrl}/rooms`, payload, headers);
};

export const getRoomById = async (id, headers) => {
  const response = axios.get(`${baseUrl}/rooms/${id}`, headers);
  return response.data;
};

export const getAllRooms = async (setState) => {
  const response = await axios.get(`${baseUrl}/rooms`);
  const rooms = await response.data;
  setState(rooms.data);
};
