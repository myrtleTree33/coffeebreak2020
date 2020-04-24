import { Router } from 'express';
import { firebaseService } from '../services/firebase-service';
import { checkIfAuthenticated } from '../utils/authUtils';

const routes = Router();

const DUMMY_PHOTO_URL = 'http://dummy.io';

/**
 * Gets the current signed-in user id
 */
routes.get('/', checkIfAuthenticated, async (req, res) => {
  const { authId } = req;
  return res.json({ authId });
});

/**
 * Creates a new user
 */
routes.post('/new', async (req, res) => {
  const { email, phoneNumber, password, firstName, lastName } = req.body;

  const user = await firebaseService.auth().createUser({
    email,
    phoneNumber,
    password,
    displayName: `${firstName} ${lastName}`,
    photoURL: DUMMY_PHOTO_URL
  });

  return res.json(user);
});

export default routes;
