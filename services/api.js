import axios from 'axios';
const LEPASAJA_ENDPOINT = 'https://lepasaja-backend.herokuapp.com/api/v1';

export async function fetchProvinsi() {
  const response = await axios(
    `https://dev.farizdotid.com/api/daerahindonesia/provinsi`
  );
  const dataProvinsi = await response.data;
  return dataProvinsi.provinsi;
}

export async function fetchKota(idKota) {
  const response = await axios(
    `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${idKota}`
  );
  const dataKota = await response.data;
  return dataKota.kota_kabupaten;
}

export const getRoomById = async (id, token) => {
  const response = await axios.get(`${LEPASAJA_ENDPOINT}/rooms/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const room = await response.data;
  return room.data;
};

export const getProfileById = async (id) => {
  const response = await axios.get(`${LEPASAJA_ENDPOINT}/users/${id}`);
  const biodata = await response.data;
  return biodata.data;
};

export const editRoom = async (id, payload, token) => {
  const response = await axios.put(
    `${LEPASAJA_ENDPOINT}/rooms/${id}`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};

export const editImage = async (id, payload, token) => {
  const response = await axios.put(
    `${LEPASAJA_ENDPOINT}/users/${id}`,
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

export const editBio = async (id, payload, token) => {
  const response = await axios.put(
    `${LEPASAJA_ENDPOINT}/users/${id}`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};

export const getMyRoom = async (token) => {
  const response = await axios.get(`${LEPASAJA_ENDPOINT}/rooms/my-room`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const room = await response.data;
  return room.data;
};

export const deleteRoom = async (token, id) => {
  const response = await axios.delete(`${LEPASAJA_ENDPOINT}/rooms/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const room = await response.data;
  return room.data;
};

export const getGiveawayHistory = async (token) => {
  const response = await axios.get(
    `${LEPASAJA_ENDPOINT}/rooms/giveaway-history`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const history = await response.data;
  return history.data;
};
