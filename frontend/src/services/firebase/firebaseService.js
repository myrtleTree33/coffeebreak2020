import * as firebase from 'firebase/app';
import 'firebase/auth';

const {
  REACT_APP_API_KEY,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_DATABASE_URL,
  REACT_APP_PROJECT_ID,
  REACT_APP_STORAGE_BUCKET,
  REACT_APP_MESSAGING_SENDER_ID,
  REACT_APP_APP_ID
} = process.env;

const config = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  databaseURL: REACT_APP_DATABASE_URL,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  appID: REACT_APP_APP_ID
};

const firebaseService = firebase.initializeApp(config);

// Do something when user is logged in.  e.g. store user object
firebaseService.auth().onAuthStateChanged(user => {
  if (user) {
    console.log(user);
    return user;
  }
});

export default firebaseService;
