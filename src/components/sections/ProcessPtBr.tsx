import React from 'react';
import { Send, LayoutTemplate, Megaphone } from 'lucide-react';

export function Process() {
  return (
    <section className="w-full py-32 md:py-40 bg-white">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1 mb-4 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
            Como Funciona
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Motor de Validação Automatizado
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
            Nosso núcleo de IA cria e gerencia automaticamente múltiplos canais de validação para testar sua ideia no mundo real
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {[
              {
                icon: Send,
                title: "Envie sua Ideia",
                description: "Compartilhe sua ideia de negócio e mercado-alvo"
              },
              {
                icon: LayoutTemplate,
                title: "Criar Landing Page",
                description: "IA constrói ou usa sua página de destino"
              },
              {
                icon: Megaphone,
                title: "Teste Multicanal",
                description: "Distribuição automatizada através de anúncios, pesquisas e plataformas de lançamento"
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-4">
                    <step.icon className="w-8 h-8 text-blue-500" />
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute left-[calc(100%+0.5rem)] top-8 w-8 h-0.5">
                      <div className="w-full h-full bg-blue-200 relative">
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rotate-45 bg-blue-200" />
                      </div>
                    </div>
                  )}
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 text-center">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <h3 className="text-xl font-semibold mb-4">O que Você Receberá</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">📊 Relatório de Validação</h4>
                  <p className="text-sm text-gray-600">
                    Análise abrangente da resposta do mercado, feedback dos usuários e métricas de validação
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">👥 Usuários Interessados</h4>
                  <p className="text-sm text-gray-600">
                    Lista de potenciais clientes que demonstraram interesse em seu produto
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}