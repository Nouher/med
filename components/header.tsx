"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, Droplet } from 'lucide-react';
import Button from '../components/Button';
import { NavItem } from '../types';
import Image from 'next/image';
import Bar from '../components/Bar';
import { Separator } from './ui/separator';

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-36  ${
        isScrolled ? 'bg-secondary py-2 shadow-md' : 'bg-transparent py-2'
      }`}
    >
      <Bar/>
      <Separator orientation='horizontal' className='my-2'/>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
           <Image src="/logo.svg" alt='' width={260} height={260} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className={`text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors ${
                isScrolled ? 'text-gray-300' : 'text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Button variant="primary" className="hidden lg:inline-flex">
            Get Started
          </Button>
          
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-secondary border-t border-gray-800 p-6 lg:hidden flex flex-col gap-4 shadow-xl">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-white text-lg font-bold uppercase hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button variant="primary" className="w-full mt-2">Get Started</Button>
        </div>
      )}
    </header>
  );
};

export default Header;