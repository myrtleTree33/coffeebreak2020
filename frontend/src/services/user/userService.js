import axios from 'axios';
import firebaseService from '../firebase/firebaseService';

// taken from https://dev.to/emeka/securing-your-express-node-js-api-with-firebase-auth-4b5f

const { REACT_APP_BACKEND_URL } = process.env;

export const createUser = async data => {
  const { email, phoneNumber, password, firstName, lastName, role } = data;
  try {
    const res = await axios.post(`${REACT_APP_BACKEND_URL}/user/new`, {
      email,
      phoneNumber,
      role,
      password,
      firstName,
      lastName
    });

    return Promise.resolve(res.data);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const getUserBearerTokenRaw = async () => {
  const user = await firebaseService.auth().currentUser;
  if (!user) {
    return Promise.resolve(null);
  }
  return Promise.resolve(user.getIdToken());
};

export const getUserBearerToken = async () => {
  let token = window.localStorage.getItem('token');
  if (!token || token === 'null') {
    token = await getUserBearerTokenRaw();
    if (!token) {
      window.localStorage.removeItem('token');
    }
    window.localStorage.setItem('token', token);
  }

  return token;
};

export const isUserLoggedIn = async () => Boolean(await getUserBearerToken());

export const loginUser = async (email, password) => {
  try {
    await firebaseService.auth().signInWithEmailAndPassword(email, password);
    const token = await getUserBearerToken();
    if (!token) {
      return Promise.reject(new Error('Invalid auth credentials!'));
    }
  } catch (e) {
    return Promise.reject(e);
  }

  return Promise.resolve();
};
