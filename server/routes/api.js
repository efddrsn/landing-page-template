import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const router = express.Router();

// The hashed password for 'ai-validator-2024'
const ADMIN_PASSWORD_HASH = '$2a$10$6KqwgYb0kZJqrUY5ZDjqAOz3WvxY3vQYeNZT3UpY4D9.9FSofae1O';

// Authentication middleware
export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key', (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

// Health check endpoint
router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Auth endpoint
router.post('/auth', async (req, res) => {
  try {
    const { password } = req.body;
    
    if (!password) {
      return res.status(400).json({ error: 'Password is required' });
    }

    const isValid = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);
    
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    const token = jwt.sign(
      { role: 'admin' },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (error) {
    console.error('Auth error:', error);
    res.status(500).json({ error: 'Authentication failed' });
  }
});

// Subscribers endpoint
router.get('/subscribers', authenticateToken, (req, res) => {
  try {
    // Mock data - replace with actual database query
    const subscribers = [
      { id: 1, email: 'test@example.com', createdAt: new Date() }
    ];
    res.json(subscribers);
  } catch (error) {
    console.error('Subscribers error:', error);
    res.status(500).json({ error: 'Failed to fetch subscribers' });
  }
});

export default router;