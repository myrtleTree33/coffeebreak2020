import axios from 'axios';
import firebaseService from '../firebase/firebaseService';

// taken from https://dev.to/emeka/securing-your-express-node-js-api-with-firebase-auth-4b5f

export const createUser = data => {
  return axios.post('https://your-api-url/auth/signup', data).then(res => res.data);
};

export const loginUser = async (email, password) =>
  firebaseService.auth().signInWithEmailAndPassword(email, password);

export const getUserBearerTokenRaw = async () => {
  const user = await firebaseService.auth().currentUser;
  if (!user) {
    return Promise.resolve(null);
  }
  return Promise.resolve(user.getIdToken());
};

export const getUserBearerToken = async () => {
  let token = window.localStorage.getItem('token');
  if (!token) {
    token = await getUserBearerTokenRaw();
    window.localStorage.setItem('token', token);
  }

  return token;
};

export const isUserLoggedIn = async () => Boolean(await getUserBearerToken());
