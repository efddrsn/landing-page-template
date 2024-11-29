import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Toast, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from '../ui/toast';
import { useWaitlist } from '@/hooks/useWaitlist';

export function CTA() {
  const [email, setEmail] = useState('');
  const [toast, setToast] = useState<{ title: string; description: string } | null>(null);
  const { subscribe, loading } = useWaitlist();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = await subscribe(email);
    
    setToast({
      title: result.success ? 'Sucesso!' : 'Erro',
      description: result.success ? 'Obrigado por se juntar à nossa lista de espera!' : result.message
    });

    if (result.success) {
      setEmail('');
    }
  };

  return (
    <>
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            Pronto para Validar sua Ideia?
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl mb-8">
            Entre em nossa lista de espera hoje e seja um dos primeiros a acessar nossa plataforma de validação com IA
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Digite seu email" 
                className="h-12"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
              <Button type="submit" size="lg" className="h-12 px-8" disabled={loading}>
                {loading ? 'Enviando...' : 'Entrar na Lista'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
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