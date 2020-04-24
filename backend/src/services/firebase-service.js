import { logger } from '../utils/logger';

const { FIREBASE_APP_CREDENTIALS_JSON, FIREBASE_APP_URL } = process.env;

const initFirebase = (serviceAccountKeyJsonStr, databaseURL) => {
  try {
    const firebaseAdmin = require('firebase-admin');

    const serviceAccount = JSON.parse(serviceAccountKeyJsonStr);

    firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert(serviceAccount),
      databaseURL
    });

    logger.info('Connected to Firebase!');

    return firebaseAdmin;
  } catch (e) {
    logger.error('Failed to initialize firebase');
    logger.error(e);
  }
};

export const firebaseService = initFirebase(FIREBASE_APP_CREDENTIALS_JSON, FIREBASE_APP_URL);
