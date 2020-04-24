import { Router } from 'express';

const routes = Router();

/**
 * GET home page
 */
routes.get('/', async (req, res) => {
  res.json({ message: 'Welcome to sample controller!' });
});

export default routes;
