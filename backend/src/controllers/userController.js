import { Router } from 'express';
import firebaseService from '../services/firebase-service';
import { checkIfAuthenticated } from '../utils/authUtils';
import { logger } from '../utils/logger';

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
  try {
    const { email, phoneNumber, password, firstName, lastName, role } = req.body;

    if (!role && (role !== 'client' || role !== 'therapist')) {
      return res.status(400).json({
        description: 'No user role specified',
        status: 'failed'
      });
    }

    const { uid } = await firebaseService.auth().createUser({
      email,
      phoneNumber,
      password,
      displayName: `${firstName} ${lastName}`,
      photoURL: DUMMY_PHOTO_URL
    });

    // Set role
    await firebaseService.auth().setCustomUserClaims(uid, { role });

    return res.json(uid);
  } catch (e) {
    const {
      errorInfo: { code }
    } = e;

    if (code === 'auth/email-already-exists') {
      return res.status(400).json({
        description: 'User already exists',
        status: 'failed'
      });
    }

    return res.status(400).json({
      description: 'Missing user details',
      status: 'failed'
    });
  }
});

export default routes;
