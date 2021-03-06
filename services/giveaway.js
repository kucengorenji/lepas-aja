import axios from 'axios';

const baseUrl = 'https://lepasaja-backend.herokuapp.com/api/v1';

// crud rooms

export const postRoom = async (payload, token) => {
  return axios.post(`${baseUrl}/rooms`, payload, {
    headers: {
      method: 'POST',
      Authorization: `Bearer ${token}`,
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
export const getAllProducts = async () => {
  const response = await axios.get(`${baseUrl}/products`);
  const data = await response.data;
  return data;
};

export const getProductsData = async (id) => {
  const response = await axios.get(`${baseUrl}/rooms/${id}/products`);
  const data = await response.data;
  return data;
};

export const postProductData = async (payload, token) => {
  return axios.post(`${baseUrl}/products`, payload, {
    headers: {
      method: 'POST',
      Authorization: `Bearer ${token}`,
    },
  });
};

// crud product photos
export const getProduct = async (id) => {
  const response = await axios.get(`${baseUrl}/product/${id}`);
  const data = await response.data;
  return data;
};

export const postProductPhoto = async (id, payload, token) => {
  return await axios.post(`${baseUrl}/products/${id}/photos`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const updateProductPhoto = async (id, payload, token) => {
  const response = await axios.put(
    `${LEPASAJA_ENDPOINT}/rooms/${id}`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  return response;
};

export const deleteProductPhoto = async (id, token) => {
  return axios.delete(`${baseUrl}/rooms/${id}/photos`, {
    headers: {
      method: 'DELETE',
      Authorization: `Bearer ${token}`,
    },
  });
};

// get category list
export const getCategory = async () => {
  const response = await axios.get(`${baseUrl}/categories`);
  const body = await response.data;
  return body;
};

// join giveaway
export const joinGiveaway = async (id, user, token) => {
  console.log(id, user, token);
  return axios.post(`${baseUrl}/rooms/${id}/join`, user, {
    headers: {
      method: 'POST',
      Authorization: `Bearer ${token}`,
    },
  });
};

export const leaveGiveaway = async (id, user, token) => {
  return axios.post(`${baseUrl}/rooms/${id}/leave`, user, {
    headers: {
      method: 'POST',
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getProductById = async (id) => {
  const response = await axios.get(`${baseUrl}/products/${id}`);
  const product = await response.data;
  return product;
};

export const editProduct = async (id, payload, token) => {
  const response = await axios.put(`${baseUrl}/products/${id}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const deleteProduct = async (token, id) => {
  const response = await axios.delete(`${baseUrl}/products/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const product = await response.data;
  return product.data;
};

export const findWinner = async (id, token) => {
  const response = await axios.get(`${baseUrl}/rooms/${id}/find_winner`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
