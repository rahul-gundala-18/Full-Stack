import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes.js';
import userRoutes from './routes/userRoutes.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/taskdb');


app.use('/api/tasks', taskRoutes);
app.use('/api/users',  userRoutes);

app.listen(5001, () => console.log('Server running on port 5001'));
