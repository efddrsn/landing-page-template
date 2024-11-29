import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

export function FAQ() {
  const faqs = [
    {
      question: "Como funciona o processo de validação com IA?",
      answer: "Nosso mecanismo de IA cria campanhas direcionadas, distribui através de múltiplos canais e analisa as respostas dos usuários para fornecer resultados abrangentes de validação em 7 dias."
    },
    {
      question: "Que tipo de resultados vou receber?",
      answer: "Você receberá um relatório detalhado de validação incluindo métricas de resposta do mercado, análise de feedback dos usuários e uma lista de potenciais clientes interessados em seu produto."
    },
    {
      question: "Como funciona o plano de validação?",
      answer: "Antes de iniciar o processo de validação, criaremos um plano personalizado detalhando os canais que usaremos (anúncios, pesquisas, plataformas de lançamento) e seus custos estimados. Você revisará e aprovará este plano, incluindo orçamentos específicos por canal, antes de começarmos os testes."
    },
    {
      question: "Preciso de uma landing page existente?",
      answer: "Não, nossa IA pode criar uma landing page profissional para você. No entanto, se você já tiver uma, pode usá-la."
    },
    {
      question: "Quais são os custos adicionais dos canais?",
      answer: "Cada canal de validação pode requerer um orçamento - por exemplo, gastos com anúncios para campanhas de marketing ou incentivos para participantes de pesquisas. Estes custos variam com base em seu mercado-alvo e estratégia de validação. Você aprovará todos os custos antes que sejam incorridos."
    },
    {
      question: "Qual é a precisão dos resultados da validação?",
      answer: "Nossos resultados são baseados em interações reais do mercado e comportamento do usuário, fornecendo insights altamente precisos para sua ideia de negócio."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Tudo que você precisa saber sobre nossa plataforma de validação com IA
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}