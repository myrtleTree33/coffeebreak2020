import { Router } from 'express';
import { checkIfAuthenticated as checkAuthenticated } from '../utils/authUtils';

const routes = Router();

/**
 * GET home page
 */
routes.get('/', async (req, res) => {
  res.json({ message: 'Welcome to sample controller!' });
});

routes.get('/testlogin', checkAuthenticated, async (req, res) => {
  return res.send(articles);
});

export default routes;
