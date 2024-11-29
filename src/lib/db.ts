import Dexie, { Table } from 'dexie';
import { z } from 'zod';

interface Subscriber {
  id?: number;
  email: string;
  createdAt: Date;
}

class SubscriberDatabase extends Dexie {
  subscribers!: Table<Subscriber>;

  constructor() {
    super('subscriberDb');
    this.version(1).stores({
      subscribers: '++id, email, createdAt'
    });
  }
}

const db = new SubscriberDatabase();
const emailSchema = z.string().email();

export async function addSubscriber(email: string) {
  try {
    emailSchema.parse(email);
    
    // Check if email already exists
    const existing = await db.subscribers.where('email').equals(email).first();
    if (existing) {
      return { success: false, error: 'Email already subscribed' };
    }

    await db.subscribers.add({
      email,
      createdAt: new Date()
    });
    
    return { success: true };
  } catch (error) {
    return { success: false, error: 'Invalid email or subscription failed' };
  }
}

export async function getSubscribers() {
  return await db.subscribers.orderBy('createdAt').reverse().toArray();
}