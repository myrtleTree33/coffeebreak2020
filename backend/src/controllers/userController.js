import { Router } from 'express';
import { firebaseService } from '../services/firebase-service';

const routes = Router();

const DUMMY_PHOTO_URL = 'http://dummy.io';

/**
 * GET home page
 */
routes.get('/', async (req, res) => {
  res.json({ message: 'Welcome to user controller!' });
});

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
