import express from 'express';
import { getUsers, createUser, updateUser, deleteUser, loginUser } from '../controllers/userController.js';
import { authenticateToken } from '../middleware/authenticator.js';

const router = express.Router();

router.get('/', authenticateToken, getUsers);
router.post('/', authenticateToken, createUser);
router.put('/:id', authenticateToken, updateUser);
router.delete('/:id', authenticateToken, deleteUser);
router.post('/login', loginUser);

export default router;
