import React from 'react';
import { Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 py-8 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} ADA. All rights reserved.
          </p>
          <a
            href="https://x.com/EricFddrsn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Twitter className="h-4 w-4" />
            <span className="text-sm">Follow us on X</span>
          </a>
        </div>
      </div>
    </footer>
  );
}