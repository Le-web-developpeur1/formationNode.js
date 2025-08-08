import express from 'express';
import { getUsers, createUsers } from '../controller/userController.js';

const router = express.Router();

router.get('/users', getUsers);
router.post('/users', createUsers);

export default router;
