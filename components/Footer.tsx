import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t-4 border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white font-serif text-2xl font-bold mb-4">CHAMBER</h3>
            <p className="text-sm leading-relaxed mb-4">
              Advocating for business, promoting economic growth, and building a stronger community since 1950.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-amber-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-amber-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-amber-500 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Board of Directors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Staff Directory</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Member Login</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Business Directory</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Events Calendar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sponsorships</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-amber-500 shrink-0" />
                <span>123 Commerce Way, Suite 100<br />Queens, NY 11375</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-amber-500 shrink-0" />
                <span>(718) 555-0199</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-amber-500 shrink-0" />
                <span>info@chamberconnect.org</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Chamber Connect. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <span className="px-2 border-r border-slate-800">Terms of Use</span>
            <span className="px-2">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
