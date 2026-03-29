import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const LOGO_URL = "https://i.ibb.co/gL2vBKtr/Whats-App-Image-2026-03-28-at-21-50-29.jpg";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <img 
                  src={LOGO_URL} 
                  alt="Mourvi Lalaji Caterers" 
                  className="h-12 w-12 object-contain rounded-full border border-gold/20"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute -top-1 -right-1 bg-gold text-white text-[8px] font-bold px-1 rounded-full border border-white">R</span>
              </div>
              <div className="flex flex-col">
                <span className="serif text-xl font-bold tracking-tight text-charcoal group-hover:text-gold transition-colors">Mourvi Lalaji</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Caterers & Events</span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <NavLink href="/" current={currentPath}>Home</NavLink>
              <NavLink href="/services" current={currentPath}>Services</NavLink>
              <NavLink href="/about" current={currentPath}>About Us</NavLink>
              <NavLink href="/ai-planner" current={currentPath}>AI Planner</NavLink>
              <a 
                href="/contact" 
                className="bg-charcoal text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gold transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-charcoal"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                <MobileNavLink href="/" current={currentPath}>Home</MobileNavLink>
                <MobileNavLink href="/services" current={currentPath}>Services</MobileNavLink>
                <MobileNavLink href="/about" current={currentPath}>About Us</MobileNavLink>
                <MobileNavLink href="/ai-planner" current={currentPath}>AI Planner</MobileNavLink>
                <MobileNavLink href="/contact" current={currentPath}>Contact Us</MobileNavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-charcoal text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <img 
                  src={LOGO_URL} 
                  alt="Mourvi Lalaji Caterers" 
                  className="h-10 w-10 object-contain rounded-full bg-white p-0.5"
                  referrerPolicy="no-referrer"
                />
                <span className="serif text-2xl font-bold">Mourvi Lalaji</span>
              </div>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm leading-relaxed">
                  Elevating your events with exquisite flavors and impeccable service. From intimate gatherings to grand weddings, we make every moment delicious.
                </p>
                <p className="text-gold text-sm font-semibold">Founded by Rahul Dogra</p>
              </div>
              <div className="flex gap-4">
                <SocialIcon icon={<Instagram size={18} />} />
                <SocialIcon icon={<Facebook size={18} />} />
                <SocialIcon icon={<Twitter size={18} />} />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="serif text-xl font-bold mb-6 text-gold">Quick Links</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Our Services</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About Our Story</a></li>
                <li><a href="/ai-planner" className="hover:text-white transition-colors">AI Event Planner</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="serif text-xl font-bold mb-6 text-gold">Contact Us</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex gap-3">
                  <MapPin size={18} className="text-gold shrink-0" />
                  <span>B 320 A, Block B, Nandgram, Ghukna, Ghaziabad, Uttar Pradesh 201003</span>
                </li>
                <li className="flex gap-3">
                  <Phone size={18} className="text-gold shrink-0" />
                  <span>+91 7404223803</span>
                </li>
                <li className="flex gap-3">
                  <Mail size={18} className="text-gold shrink-0" />
                  <span>mourvilalajicaterers@gmail.com</span>
                </li>
                <li className="flex gap-3">
                  <Clock size={18} className="text-gold shrink-0" />
                  <span>24/7 in Service</span>
                </li>
              </ul>
            </div>

            {/* Map */}
            <div>
              <h4 className="serif text-xl font-bold mb-6 text-gold">Find Us</h4>
              <div className="rounded-xl overflow-hidden h-48 border border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.682672159114!2d77.4338423!3d28.6931265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf19085c55555%3A0x6d88888888888888!2sNandgram%2C%20Ghaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1711643194567!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-xs text-gray-500 space-y-2">
            <p>&copy; {new Date().getFullYear()} Mourvi Lalaji Caterers & Events. All rights reserved. ® Registered Trademark.</p>
            <p>Designed by <a href="https://www.waltdesignsstudio.in" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Walt Designs & Studio</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ href, current, children }: { href: string, current: string, children: React.ReactNode }) {
  const isActive = current === href;
  return (
    <a 
      href={href} 
      className={`text-sm font-medium transition-colors hover:text-gold ${isActive ? 'text-gold' : 'text-charcoal'}`}
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, current, children }: { href: string, current: string, children: React.ReactNode }) {
  const isActive = current === href;
  return (
    <a 
      href={href} 
      className={`block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-gold/10 text-gold' : 'text-charcoal hover:bg-gray-50'}`}
    >
      {children}
    </a>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300">
      {icon}
    </a>
  );
}
