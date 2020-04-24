import { Router } from 'express';
import { checkIfAuthenticated } from '../utils/authUtils';

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

routes.get('/search', checkIfAuthenticated, async (req, res) => {
  const therapists = []; // TODO
  res.json(therapists);
});

export default routes;
