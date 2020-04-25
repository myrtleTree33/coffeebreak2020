import axios from 'axios';
import { getUserBearerToken } from '../user/userService';

const { REACT_APP_BACKEND_URL } = process.env;

export const getTherapists = async () => {
  const token = await getUserBearerToken();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const res = await axios.get(`${REACT_APP_BACKEND_URL}/therapist/all`, config);
  return Promise.resolve(res.data);
};
