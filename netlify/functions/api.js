import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// The hashed password for 'ai-validator-2024'
const ADMIN_PASSWORD_HASH = '$2a$10$XWN5hX8nTF8zJrZS8vH3.OQnxS.V.K9Zx8v9Z9Z9Z9Z9Z9Z9Z9';
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Mock database for demo purposes
const subscribers = [
  { id: 1, email: 'test@example.com', createdAt: new Date() }
];

export async function handler(event, context) {
  const path = event.path.replace('/.netlify/functions/api', '');
  const method = event.httpMethod;

  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
  };

  // Handle preflight requests
  if (method === 'OPTIONS') {
    return {
      statusCode: 204,
      headers
    };
  }

  try {
    // Auth endpoint
    if (path === '/auth' && method === 'POST') {
      const { password } = JSON.parse(event.body);
      const isValid = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);

      if (!isValid) {
        return {
          statusCode: 401,
          headers,
          body: JSON.stringify({ error: 'Invalid password' })
        };
      }

      const token = jwt.sign({ role: 'admin' }, JWT_SECRET, { expiresIn: '1h' });
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ token })
      };
    }

    // Protected subscribers endpoint
    if (path === '/subscribers' && method === 'GET') {
      const authHeader = event.headers.authorization;
      const token = authHeader && authHeader.split(' ')[1];

      if (!token) {
        return {
          statusCode: 401,
          headers,
          body: JSON.stringify({ error: 'No token provided' })
        };
      }

      try {
        jwt.verify(token, JWT_SECRET);
      } catch (err) {
        return {
          statusCode: 403,
          headers,
          body: JSON.stringify({ error: 'Invalid token' })
        };
      }

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(subscribers)
      };
    }

    return {
      statusCode: 404,
      headers,
      body: JSON.stringify({ error: 'Not found' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
}