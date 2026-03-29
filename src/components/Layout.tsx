import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Clock, Users, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const LOGO_URL = "https://i.ibb.co/gL2vBKtr/Whats-App-Image-2026-03-28-at-21-50-29.jpg";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const [showIntro, setShowIntro] = useState(true);
  const [isPreloading, setIsPreloading] = useState(true);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    
    // Preloader duration
    const preloaderTimer = setTimeout(() => setIsPreloading(false), 1500);
    
    // Curtain duration (starts after preloader)
    const introTimer = setTimeout(() => setShowIntro(false), 3500);
    
    return () => {
      clearTimeout(preloaderTimer);
      clearTimeout(introTimer);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Curtain Intro & Preloader */}
      <AnimatePresence>
        {showIntro && (
          <div className="fixed inset-0 z-[100] flex pointer-events-none overflow-hidden">
            {/* Left Curtain */}
            <div className={`w-1/2 h-full bg-red-dark border-r border-gold/20 shadow-[10px_0_30px_rgba(0,0,0,0.5)] flex items-center justify-end pr-8 transition-transform duration-[1500ms] ease-[cubic-bezier(0.7,0,0.3,1)] ${!isPreloading ? '-translate-x-full' : 'translate-x-0'}`}>
              <div className="serif text-white text-4xl font-bold opacity-20 rotate-90 whitespace-nowrap">MOURVI LALAJI</div>
            </div>
            
            {/* Preloader Logo (Centered) */}
            <AnimatePresence>
              {isPreloading && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2, filter: 'blur(10px)' }}
                  className="absolute inset-0 z-[110] flex items-center justify-center pointer-events-auto"
                >
                  <div className="relative">
                    <motion.div 
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="relative z-10"
                    >
                      <img 
                        src={LOGO_URL} 
                        alt="Mourvi Lalaji Caterers" 
                        className="h-32 w-32 md:h-48 md:w-48 object-contain rounded-full border-4 border-gold shadow-[0_0_50px_rgba(212,175,55,0.5)] bg-white p-1"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                    {/* Decorative Rings */}
                    <motion.div 
                      animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute inset-0 border-2 border-gold rounded-full"
                    />
                    <motion.div 
                      animate={{ scale: [1, 2], opacity: [0.3, 0] }}
                      transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                      className="absolute inset-0 border border-gold rounded-full"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Right Curtain */}
            <div className={`w-1/2 h-full bg-red-dark border-l border-gold/20 shadow-[-10px_0_30px_rgba(0,0,0,0.5)] flex items-center justify-start pl-8 transition-transform duration-[1500ms] ease-[cubic-bezier(0.7,0,0.3,1)] ${!isPreloading ? 'translate-x-full' : 'translate-x-0'}`}>
              <div className="serif text-white text-4xl font-bold opacity-20 -rotate-90 whitespace-nowrap">CATERERS</div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-purple-950/95 backdrop-blur-md border-b border-purple-800/50">
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
                <span className="text-[10px] uppercase tracking-[0.3em] text-purple-200/70 font-bold leading-none mb-1">Mourvi</span>
                <span className="serif text-2xl font-bold tracking-tight text-white group-hover:text-gold transition-colors leading-none">Lalaji Caterers</span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <NavLink href="/" current={currentPath}>Home</NavLink>
              <NavLink href="/services" current={currentPath}>Services</NavLink>
              <NavLink href="/event-gallery" current={currentPath}>Event Gallery</NavLink>
              <NavLink href="/about" current={currentPath}>About Us</NavLink>
              <NavLink href="/ai-planner" current={currentPath}>AI Planner</NavLink>
              <a 
                href="/contact" 
                className="bg-gold text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-white hover:text-charcoal transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-white"
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
                <MobileNavLink href="/event-gallery" current={currentPath}>Event Gallery</MobileNavLink>
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

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 z-[60] flex flex-row items-center gap-4">
        {/* AI Planner Floating Button */}
        <a 
          href="/ai-planner" 
          className="bg-gold text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group relative"
        >
          <Sparkles className="w-8 h-8" />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 bg-charcoal text-white px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            AI Event Planner
          </span>
        </a>

        {/* WhatsApp Floating Button */}
        <a 
          href="https://wa.link/1lbebe" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group relative"
        >
          <svg 
            viewBox="0 0 24 24" 
            className="w-8 h-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 bg-charcoal text-white px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat with us!
          </span>
        </a>
      </div>

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
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold leading-none mb-1">Mourvi</span>
                  <span className="serif text-2xl font-bold leading-none">Lalaji Caterers</span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm leading-relaxed">
                  Elevating your events with exquisite flavors and impeccable service. From intimate gatherings to grand weddings, we make every moment delicious.
                </p>
                <p className="text-gold text-sm font-semibold">Founded by Rahul Dogra</p>
              </div>
              <div className="flex gap-4">
                <SocialIcon href="https://www.instagram.com/mourvilalajicaterers_tm?utm_source=qr&igsh=MW42cm1sZDA3MjcxYw==" icon={<Instagram size={18} />} />
                <SocialIcon href="#" icon={<Facebook size={18} />} />
                <SocialIcon href="#" icon={<Twitter size={18} />} />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="serif text-xl font-bold mb-6 text-gold">Quick Links</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Our Services</a></li>
                <li><a href="/event-gallery" className="hover:text-white transition-colors">Event Gallery</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About Our Story</a></li>
                <li><a href="/ai-planner" className="hover:text-white transition-colors">AI Event Planner</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="serif text-xl font-bold mb-6 text-gold">Contact Us</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex gap-3">
                  <Users size={18} className="text-gold shrink-0" />
                  <span>Name : Rahul Dogra (Owner)</span>
                </li>
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
              <div className="rounded-xl overflow-hidden h-48 border border-white/10 transition-all duration-500">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13998.730688636456!2d77.4338423!3d28.6931265!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf19085c55555%3A0x6d88888888888888!2sMourvi%20Lalaji%20Caterers!5e0!3m2!1sen!2sin!4v1711643194567!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mourvi Lalaji Caterers Location"
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
      className={`text-sm font-medium transition-colors hover:text-gold ${isActive ? 'text-gold' : 'text-white'}`}
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
      className={`block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-gold/10 text-gold' : 'text-charcoal hover:bg-purple-50'}`}
    >
      {children}
    </a>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode, href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300">
      {icon}
    </a>
  );
}
