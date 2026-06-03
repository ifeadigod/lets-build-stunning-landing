import React from 'react';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Logo className="h-14 brightness-0 invert" />
            <p className="text-slate-400 leading-relaxed">
              Your premier partner in luxury curtains and exceptional interior design. 
              Creating spaces that reflect your personality.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/kanyvalncolors" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com/kanyvalncolors" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="https://wa.me/2348023000517" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
                <WhatsAppIcon size={20} />
              </a>
              <a href="mailto:kanyvalncolors@gmail.com" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-secondary pl-4">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Our Services</a></li>
              <li><a href="#gallery" className="hover:text-secondary transition-colors">Project Gallery</a></li>
              <li><a href="#ceo" className="hover:text-secondary transition-colors">CEO Direct</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-secondary pl-4">Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-secondary transition-colors">Custom Curtains</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Interior Styling</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Consultancy</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Wall Treatments</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Fabric Sourcing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-secondary pl-4">Contact Info</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex gap-3">
                <MapPin className="text-secondary shrink-0" size={20} />
                <span>123 Interior Drive, Lagos, Nigeria</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-secondary shrink-0" size={20} />
                <a href="tel:+2348023000517" className="hover:text-secondary transition-colors transition-colors">+234 802 300 0517</a>
              </li>
              <li className="flex gap-3">
                <Mail className="text-secondary shrink-0" size={20} />
                <a href="mailto:kanyvalncolors@gmail.com" className="hover:text-secondary transition-colors">kanyvalncolors@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 text-center text-slate-500 text-sm">
          <p>© {currentYear} Kanyvalncolors. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
