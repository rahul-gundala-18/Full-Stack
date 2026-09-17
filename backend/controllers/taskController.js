import Task from '../models/Task.js';

const handleError = (res, error) => {
  if (error.name === 'ValidationError') {
    return res.status(400).json({ message: error.message });
  }

  if (error.name === 'CastError') {
    return res.status(400).json({ message: 'Invalid task ID' });
  }

  if (error.code === 11000) {
    return res.status(409).json({ message: 'A task with those details already exists' });
  }

  return res.status(500).json({ message: 'Internal server error' });
};

export const getTasks = async (_req, res) => {
  try {
    const tasks = await Task.find();
    return res.json(tasks);
  } catch (error) {
    return handleError(res, error);
  }
};

export const createTask = async (req, res) => {
  try {
    if (!req.body || typeof req.body !== 'object' || Array.isArray(req.body)) {
      return res.status(400).json({ message: 'A valid task body is required' });
    }

    const task = await Task.create(req.body);
    return res.status(201).json(task);
  } catch (error) {
    return handleError(res, error);
  }
};

export const updateTask = async (req, res) => {
  try {
    if (!req.body || typeof req.body !== 'object' || Array.isArray(req.body)) {
      return res.status(400).json({ message: 'A valid task body is required' });
    }

    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    return res.json(task);
  } catch (error) {
    return handleError(res, error);
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    return res.json({ message: 'Task deleted' });
  } catch (error) {
    return handleError(res, error);
  }
};
