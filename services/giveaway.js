import axios from 'axios';

const createRoomPayload = {
  name: '',
  description: '',
  type: '',
};

axios.post('/api/giveaway/create', {});
