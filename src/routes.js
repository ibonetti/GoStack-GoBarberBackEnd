import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Israel Bonetti',
    email: 'israelbonetti@gmail.com',
    password_hash: 'asld11',
  });
  res.json(user);
});

export default routes;
