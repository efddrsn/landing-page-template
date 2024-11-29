import React from 'react';
import { Check, Info } from 'lucide-react';
import { Button } from '../ui/button';

export function Pricing() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Start validating your ideas today
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Validation Package</h3>
              <div className="text-5xl font-bold mb-2">Free</div>
              <p className="text-gray-600 mb-6">for your first idea</p>
              <p className="text-sm text-gray-500 mb-8">$199 per idea afterwards</p>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                "7-day validation process",
                "AI-generated landing page",
                "Multi-channel testing",
                "Market response analysis",
                "Detailed validation report",
                "List of interested users"
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
                  <p className="font-medium mb-1">Additional Channel Costs</p>
                  <p>Each validation channel (ads, surveys, launchpads) may incur additional costs. We'll create a custom validation plan and get your approval before any spending.</p>
                </div>
              </div>
            </div>
            <Button className="w-full">Join Waitlist</Button>
          </div>
        </div>
      </div>
    </section>
  );
}