import axios from 'axios';

export const getProfileById = async (id, state) => {
  let response = await axios.get(
    `https://lepasaja-backend.herokuapp.com/api/v1/users/${id}`
  );
  let biodata = await response.data;
  state(biodata.data);
};
