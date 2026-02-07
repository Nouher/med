
import React from 'react';


import { Mail, Phone, MapPin, Linkedin, Facebook } from 'lucide-react';
import Link from 'next/link';


const Footer: React.FC = () => {


  return (
    <footer className="bg-brand-charcoal text-white pt-16 pb-8 border-t-8 border-brand-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-6">
             MED LOGO
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              desc footer
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded hover:bg-brand-gold hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded hover:bg-brand-gold hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider text-brand-gold">Explore</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-400 hover:text-brand-gold text-sm transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-brand-gold text-sm transition-colors">Services</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-brand-gold text-sm transition-colors">Projects</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-brand-gold text-sm transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider text-brand-gold">Expertise</h3>
            <ul className="space-y-4">
              <li className="text-gray-400 text-sm">Industrial Assembly</li>
              <li className="text-gray-400 text-sm">Steel Framework</li>
              <li className="text-gray-400 text-sm">Boilermaking & Silos</li>
              <li className="text-gray-400 text-sm">Site Maintenance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider text-brand-gold">Contact</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-gray-400">
                <MapPin className="shrink-0 text-brand-gold" size={18} />
                <span>Zone Industrielle Sud, Casablanca, Maroc</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <Phone className="shrink-0 text-brand-gold" size={18} />
                <span>+212 522 XX XX XX</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <Mail className="shrink-0 text-brand-gold" size={18} />
                <span>contact@medafriquemontage.ma</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© 2024 Med Afrique Montage. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-gold">Mentions Légales</a>
            <a href="#" className="hover:text-brand-gold">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
