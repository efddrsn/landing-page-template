// Simple in-memory store for development
const STORAGE_KEY = 'waitlist_subscribers';

// Load initial data from localStorage
const loadSubscribers = () => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

// Save data to localStorage
const saveSubscribers = (subscribers: any[]) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(subscribers));
};

let subscribers = loadSubscribers();

export const mockDb = {
  getSubscribers: () => subscribers,
  
  addSubscriber: (email: string) => {
    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error('Invalid email address');
    }

    // Check for duplicates
    if (subscribers.some(sub => sub.email === email)) {
      throw new Error('Email already registered');
    }

    // Add new subscriber
    const newSubscriber = {
      email,
      timestamp: new Date().toISOString()
    };
    
    subscribers = [...subscribers, newSubscriber];
    saveSubscribers(subscribers);
    return newSubscriber;
  }
};