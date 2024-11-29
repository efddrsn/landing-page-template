const API_URL = import.meta.env.VITE_API_URL || '/api';

export async function login(password: string): Promise<{ success: boolean; token?: string; error?: string }> {
  try {
    const response = await fetch(`${API_URL}/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Login failed');
    }

    return { success: true, token: data.token };
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Login failed' 
    };
  }
}

export async function getSubscribers(token: string) {
  try {
    const response = await fetch(`${API_URL}/subscribers`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to fetch subscribers');
    }

    return data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Failed to fetch subscribers');
  }
}