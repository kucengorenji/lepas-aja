import axios from 'axios';

const baseUrl = 'https://lepasaja-backend.herokuapp.com/api/v1';

// crud rooms

export const postRoom = async (payload, token) => {
  return axios.post(`${baseUrl}/rooms`, payload, {
    headers: {
      method: 'POST',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const updateRoom = async (id, payload, token) => {
  return axios.update(`${baseUrl}/rooms/${id}`, {
    headers: {
      method: 'UPDATE',
      Authorization: `Bearer ${token}`,
      body: JSON.stringify(payload),
    },
  });
};

export const deleteRoom = async (id, token) => {
  return axios.delete(`${baseUrl}/rooms/${id}`, {
    headers: {
      method: 'DELETE',
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getRoomById = async (id) => {
  const response = await axios.get(`${baseUrl}/rooms/${id}`);
  const data = response.data;
  return data;
};

export const getAllRooms = async () => {
  const response = await axios.get(`${baseUrl}/rooms`);
  const data = await response.data;
  return data;
};

// crud products
export const getProductsData = async (id) => {
  const response = await axios.get(`${baseUrl}/rooms/${id}/products`);
  const data = await response.data;
  return data;
};

// crud product photos
export const getProduct = async (id) => {
  const response = await axios.get(`${baseUrl}/product/${id}`);
  const data = await response.data;
  return data;
};

export const postProductPhoto = async (id, payload, token) => {
  return axios.post(`${baseUrl}/rooms/${id}/photos`, payload, {
    headers: {
      method: 'POST',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const updateProductPhoto = async (id, payload, token) => {
  return axios.post(`${baseUrl}/rooms/${id}/photos`, {
    headers: {
      method: 'PUT',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
      body: JSON.stringify(payload),
    },
  });
};

export const deleteProductPhoto = async (id, token) => {
  return axios.delete(`${baseUrl}/rooms/${id}/photos`, {
    headers: {
      method: 'DELETE',
      Authorization: `Bearer ${token}`,
    },
  });
};
