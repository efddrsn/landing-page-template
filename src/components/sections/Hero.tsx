import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Toast, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from '../ui/toast';
import { useWaitlist } from '@/hooks/useWaitlist';
import { Link } from 'react-router-dom';

export function Hero() {
  const [email, setEmail] = useState('');
  const [toast, setToast] = useState<{ title: string; description: string } | null>(null);
  const { subscribe, loading } = useWaitlist();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = await subscribe(email);
    
    setToast({
      title: result.success ? 'Success!' : 'Error',
      description: result.message
    });

    if (result.success) {
      setEmail('');
    }
  };

  return (
    <>
      <section className="relative overflow-hidden bg-gray-50 pt-16 pb-16 md:pt-24 md:pb-24">
        <div className="absolute top-4 right-4">
          <Link to="/pt-br" className="text-sm text-gray-600 hover:text-gray-900">Português</Link>
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <img src="/ada-logo.svg" alt="ADA Logo" className="h-16 mb-4" />
            <div className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
              🚀 Launching Soon
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl">
              Validate Your Business Ideas with{' '}
              <span className="text-blue-600">AI-Powered Intelligence</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-400">
              Test your business concept in the real market within a week. Get real user feedback, market validation, and a list of interested customers.
            </p>
            
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="h-12"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                />
                <Button type="submit" size="lg" className="h-12 px-8" disabled={loading}>
                  {loading ? 'Joining...' : 'Join Waitlist'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-gray-500">
                ✨ Join 2,000+ entrepreneurs who will validate their ideas
              </p>
            </form>
          </div>
        </div>
      </section>

      <ToastProvider>
        {toast && (
          <Toast>
            <div>
              <ToastTitle>{toast.title}</ToastTitle>
              <ToastDescription>{toast.description}</ToastDescription>
            </div>
          </Toast>
        )}
        <ToastViewport />
      </ToastProvider>
    </>
  );
}