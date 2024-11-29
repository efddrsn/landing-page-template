import { Handler } from '@netlify/functions';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

interface Subscriber {
  email: string;
  timestamp: string;
}

const DB_PATH = join('/tmp', 'waitlist.json');

// Initialize DB file if it doesn't exist
try {
  readFileSync(DB_PATH);
} catch {
  writeFileSync(DB_PATH, JSON.stringify([]));
}

export const handler: Handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
    };
  }

  try {
    // Get subscribers
    if (event.httpMethod === 'GET') {
      const subscribers = JSON.parse(readFileSync(DB_PATH, 'utf-8'));
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(subscribers),
      };
    }

    // Add subscriber
    if (event.httpMethod === 'POST') {
      const { email } = JSON.parse(event.body || '{}');

      // Validate email
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: 'Invalid email address' }),
        };
      }

      // Read current subscribers
      const subscribers: Subscriber[] = JSON.parse(readFileSync(DB_PATH, 'utf-8'));

      // Check for duplicates
      if (subscribers.some(sub => sub.email === email)) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: 'Email already registered' }),
        };
      }

      // Add new subscriber
      const newSubscriber: Subscriber = {
        email,
        timestamp: new Date().toISOString(),
      };

      subscribers.push(newSubscriber);
      writeFileSync(DB_PATH, JSON.stringify(subscribers, null, 2));

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ message: 'Successfully subscribed to waitlist' }),
      };
    }

    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};