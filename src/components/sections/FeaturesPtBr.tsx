import React from 'react';
import { Brain, Rocket, Clock, Target, BarChart, Users } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Brain,
      title: "Análise com IA",
      description: "Algoritmos avançados analisam a resposta do mercado e o comportamento do usuário"
    },
    {
      icon: Rocket,
      title: "Lançamento Rápido",
      description: "Inicie sua campanha de validação em minutos, não em dias"
    },
    {
      icon: Clock,
      title: "Resultados em 7 Dias",
      description: "Receba resultados abrangentes de validação em uma semana"
    },
    {
      icon: Target,
      title: "Testes Direcionados",
      description: "Alcance seu mercado-alvo específico com precisão"
    },
    {
      icon: BarChart,
      title: "Insights Baseados em Dados",
      description: "Obtenha insights acionáveis baseados em dados reais do mercado"
    },
    {
      icon: Users,
      title: "Feedback Real",
      description: "Conecte-se com potenciais clientes que demonstram interesse"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Recursos Poderosos
          </h2>
          <p className="mt-4 text-gray-600 md:text-xl">
            Tudo que você precisa para validar sua ideia de negócio efetivamente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <feature.icon className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}