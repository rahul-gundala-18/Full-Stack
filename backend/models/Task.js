import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  status: { type: Number, enum: [0, 1], default: 0 } // 0 = pending, 1 = completed
}, { timestamps: true });

const Task = mongoose.model('Task', TaskSchema);

export default Task;
