import { useState } from 'react';
import { mockDb } from '@/lib/mockDb';

interface WaitlistResponse {
  success: boolean;
  message: string;
}

export function useWaitlist() {
  const [loading, setLoading] = useState(false);

  const subscribe = async (email: string): Promise<WaitlistResponse> => {
    setLoading(true);
    
    try {
      // In development, use mock DB
      if (import.meta.env.DEV) {
        mockDb.addSubscriber(email);
        return { 
          success: true, 
          message: 'Thank you for joining our waitlist! We\'ll notify you when we launch.'
        };
      }

      // In production, use Netlify Function
      const response = await fetch('/.netlify/functions/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        return { 
          success: false, 
          message: data.error || 'Failed to join waitlist' 
        };
      }

      return { 
        success: true, 
        message: 'Thank you for joining our waitlist! We\'ll notify you when we launch.'
      };
    } catch (error) {
      return { 
        success: false, 
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.' 
      };
    } finally {
      setLoading(false);
    }
  };

  return { subscribe, loading };
}