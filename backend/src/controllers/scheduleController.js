import { Router } from 'express';
import { checkIfAuthenticated } from '../utils/authUtils';

// Payment controller

const routes = Router();

/**
 * Retrieves a payment by id
 */
routes.get('/day/:date', checkIfAuthenticated, async (req, res) => {
  const sessions = [];
  res.json(sessions);
});

routes.post('/new', checkIfAuthenticated, async (req, res) => {
  return res.json({ status: 'success' });
});

export default routes;
