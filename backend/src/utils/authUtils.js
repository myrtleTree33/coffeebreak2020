import firebaseService from '../services/firebase-service';
import { logger } from './logger';

const getAuthToken = (req, res, next) => {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    const authToken = req.headers.authorization.split(' ')[1];
    req.authToken = authToken;
  } else {
    req.authToken = null;
  }

  next();
};

export const checkIfAuthenticated = (req, res, next) => {
  getAuthToken(req, res, async () => {
    try {
      const { authToken } = req;
      const userInfo = await firebaseService.auth().verifyIdToken(authToken);
      req.authId = userInfo.uid;
      return next();
    } catch (e) {
      return res.status(401).send({ error: 'You are not authorized to make this request' });
    }
  });
};
