import { Router } from 'express';
import { checkIfAuthenticated } from '../utils/authUtils';

// Payment controller

const routes = Router();

/**
 * Retrieves a payment by id
 */
routes.get('/', checkIfAuthenticated, async (req, res) => {
  res.json({ message: 'Welcome to sample controller!' });
});

routes.post('/new', checkIfAuthenticated, async (req, res) => {
  return res.json({ transactionId: '12312345' });
});

export default routes;
