import React from 'react';
import { Check, Info } from 'lucide-react';
import { Button } from '../ui/button';

export function Pricing() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Preços Simples e Transparentes
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Comece a validar suas ideias hoje
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Pacote de Validação</h3>
              <div className="text-5xl font-bold mb-2">Grátis</div>
              <p className="text-gray-600 mb-6">para sua primeira ideia</p>
              <p className="text-sm text-gray-500 mb-8">R$999 por ideia depois</p>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                "Processo de validação em 7 dias",
                "Landing page gerada por IA",
                "Teste multicanal",
                "Análise de resposta do mercado",
                "Relatório detalhado de validação",
                "Lista de usuários interessados"
              ].map((feature, i) => (
                <li key={i} className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="bg-blue-50 rounded-lg p-4 mb-8">
              <div className="flex items-start">
                <Info className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                <div className="text-sm text-blue-900">
                  <p className="font-medium mb-1">Custos Adicionais dos Canais</p>
                  <p>Cada canal de validação (anúncios, pesquisas, plataformas) pode incorrer em custos adicionais. Criaremos um plano de validação personalizado e obteremos sua aprovação antes de qualquer gasto.</p>
                </div>
              </div>
            </div>
            <Button className="w-full">Entrar na Lista</Button>
          </div>
        </div>
      </div>
    </section>
  );
}