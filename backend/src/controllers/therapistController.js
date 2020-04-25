import { Router } from 'express';
import { checkIfAuthenticated } from '../utils/authUtils';
import firebaseService from '../services/firebase-service';

// Payment controller

const routes = Router();

/**
 * Retrieves a therapist id
 */
routes.get('/id/:therapistId', checkIfAuthenticated, async (req, res) => {
  // TODO

  res.json({
    id: '',
    name: '',
    type: '',
    description: '',
    videoUrl: ''
  });
});

routes.get('/', checkIfAuthenticated, async (req, res) => {
  const therapists = (await firebaseService.auth().listUsers()).users;
  res.json(therapists);
});

export default routes;
