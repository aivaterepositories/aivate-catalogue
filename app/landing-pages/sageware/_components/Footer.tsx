'use client';

import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm" style={{ fontFamily: 'JetBrains Mono, monospace' }}>S</span>
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>
                Sageware Solutions Inc.
              </span>
            </div>
            <p className="text-slate-400 text-sm">
              Crafting software solutions that drive results for enterprises and startups.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-slate-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <a href="mailto:hello@sageware.io" className="text-slate-400 hover:text-white transition-colors">
                  hello@sageware.io
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <a href="tel:+639617079255" className="text-slate-400 hover:text-white transition-colors">
                  +63 961 707 9255
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-slate-400">
                  Muntinlupa, Philippines
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Sageware Solutions Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
