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
      question: "How does the AI validation process work?",
      answer: "Our AI engine creates targeted campaigns, distributes them across multiple channels, and analyzes user responses to provide comprehensive validation results within 7 days."
    },
    {
      question: "What kind of results will I receive?",
      answer: "You'll get a detailed validation report including market response metrics, user feedback analysis, and a list of potential customers interested in your product."
    },
    {
      question: "How does the validation plan work?",
      answer: "Before starting the validation process, we'll create a custom validation plan detailing the channels we'll use (ads, surveys, launchpads) and their estimated costs. You'll review and approve this plan, including any channel-specific budgets, before we begin testing."
    },
    {
      question: "Do I need an existing landing page?",
      answer: "No, our AI can create a professional landing page for you. However, if you already have one, you can use that instead."
    },
    {
      question: "What are the additional channel costs?",
      answer: "Each validation channel may require a budget - for example, ad spend for marketing campaigns or incentives for survey participants. These costs vary based on your target market and validation strategy. You'll approve all costs before they're incurred."
    },
    {
      question: "How accurate are the validation results?",
      answer: "Our results are based on real market interactions and user behavior, providing highly accurate insights for your business idea."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Everything you need to know about our AI validation platform
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