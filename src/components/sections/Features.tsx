import React from 'react';
import { Brain, Rocket, Clock, Target, BarChart, Users } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced algorithms analyze market response and user behavior"
    },
    {
      icon: Rocket,
      title: "Quick Launch",
      description: "Get your validation campaign running in minutes, not days"
    },
    {
      icon: Clock,
      title: "7-Day Results",
      description: "Receive comprehensive validation results within one week"
    },
    {
      icon: Target,
      title: "Targeted Testing",
      description: "Reach your specific target market with precision"
    },
    {
      icon: BarChart,
      title: "Data-Driven Insights",
      description: "Get actionable insights based on real market data"
    },
    {
      icon: Users,
      title: "Real User Feedback",
      description: "Connect with potential customers who show interest"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Powerful Features
          </h2>
          <p className="mt-4 text-gray-600 md:text-xl">
            Everything you need to validate your business idea effectively
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