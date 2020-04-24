import { Router } from 'express';
import { checkIfAuthenticated } from '../utils/authUtils';

const routes = Router();

/**
 * GET home page
 */
routes.get('/', async (req, res) => {
  res.json({ message: 'Welcome to sample controller!' });
});

routes.get('/testlogin', checkIfAuthenticated, async (req, res) => {
  return res.send('hello world');
});

export default routes;
