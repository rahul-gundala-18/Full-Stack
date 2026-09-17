import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // Hash the password securely
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { username, email, password },
      { new: true, runValidators: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ err_message: 'Invalid email or password' });
    }
    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ err_message: 'Invalid email or password' });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { userId: user.id, email: user.email }, // Payload
      process.env.JWT_SECRET,                 // Secret Key
      { expiresIn: process.env.JWT_EXPIRES_IN } // Options
    );

    return res.status(200).json({
      message: 'Login successful',
      token: `Bearer ${token}`
    });
  } catch (error) {
    return res.status(500).json({ err_message: error.message });
  }
};