import React from 'react';
import { Send, LayoutTemplate, Megaphone } from 'lucide-react';

export function Process() {
  return (
    <section className="w-full py-32 md:py-40 bg-white">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1 mb-4 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
            How It Works
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Automated Validation Engine
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
            Our AI core automatically creates and manages multiple validation channels to test your idea in the real world
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {[
              {
                icon: Send,
                title: "Submit Idea",
                description: "Share your business idea and target market"
              },
              {
                icon: LayoutTemplate,
                title: "Create Landing",
                description: "AI builds or uses your landing page"
              },
              {
                icon: Megaphone,
                title: "Multi-Channel Testing",
                description: "Automated distribution through ads, surveys, and startup launchpads"
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
              <h3 className="text-xl font-semibold mb-4">What You'll Receive</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">📊 Validation Report</h4>
                  <p className="text-sm text-gray-600">
                    Comprehensive analysis of market response, user feedback, and validation metrics
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">👥 Interested Users</h4>
                  <p className="text-sm text-gray-600">
                    List of potential customers who showed interest in your product
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