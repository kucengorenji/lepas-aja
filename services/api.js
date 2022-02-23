import axios from 'axios';

export const getProfileById = async (id, state) => {
  let response = await axios.get(
    `https://lepasaja-backend.herokuapp.com/api/v1/users/${id}`
  );
  let biodata = await response.data;
  state(biodata.data);
};

export async function fetchProvinsi(state) {
  let response = await axios(
    `https://dev.farizdotid.com/api/daerahindonesia/provinsi`
  );
  let dataProvinsi = await response.data;
  state(dataProvinsi.provinsi);
}

export async function fetchKota(state, idKota) {
  let response = await axios(
    `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${idKota}`
  );
  let dataKota = await response.data;
  state(dataKota.kota_kabupaten);
}
