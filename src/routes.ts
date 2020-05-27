import { Router } from 'express';
import userConstroller from './Controllers/UserController';

const routes = Router();

routes.get('/users', userConstroller.index);
routes.post('/users', userConstroller.create);

export default routes;