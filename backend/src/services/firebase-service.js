import firebaseAdmin from 'firebase-admin';

import { logger } from '../utils/logger';

const { FIREBASE_APP_CREDENTIALS_JSON, FIREBASE_APP_URL } = process.env;

const initFirebase = (serviceAccountKeyJsonStr, databaseURL) => {
  try {
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

const firebaseService = initFirebase(FIREBASE_APP_CREDENTIALS_JSON, FIREBASE_APP_URL);

export default firebaseService;
