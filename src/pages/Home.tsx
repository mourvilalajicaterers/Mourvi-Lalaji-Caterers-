import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Star, Users, Utensils, Calendar } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Banquet Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=2000" 
            alt="Banquet Hall" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4 block">Exquisite Culinary Experiences</span>
            <h1 className="serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Mourvi Lalaji <br /> <span className="italic text-gold">Caterers</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Crafting unforgettable moments through premium catering and event management. From grand weddings to intimate gatherings.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/contact" 
                className="bg-gold text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-charcoal transition-all duration-300 flex items-center gap-2 group"
              >
                Book Your Event <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/services" 
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
              >
                View Our Menu
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-gold rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gold-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard icon={<Utensils className="text-gold" />} number="500+" label="Events Catered" />
            <StatCard icon={<Users className="text-gold" />} number="50k+" label="Happy Guests" />
            <StatCard icon={<Star className="text-gold" />} number="15+" label="Years Experience" />
            <StatCard icon={<Calendar className="text-gold" />} number="100%" label="Satisfaction" />
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="serif text-4xl md:text-5xl font-bold mb-4">Our Signature Services</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We specialize in a wide range of catering styles, ensuring that every event is uniquely tailored to your vision and taste.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServicePreview 
              image="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800"
              title="Wedding Catering"
              desc="Elegant and grand culinary experiences for your special day."
            />
            <ServicePreview 
              image="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800"
              title="Corporate Events"
              desc="Professional catering for meetings, conferences, and galas."
            />
            <ServicePreview 
              image="https://images.unsplash.com/photo-1533143708019-ea5cfa80213e?auto=format&fit=crop&q=80&w=800"
              title="Private Parties"
              desc="Intimate dining and celebrations in the comfort of your home."
            />
          </div>

          <div className="mt-12 text-center">
            <a href="/services" className="text-gold font-bold hover:underline flex items-center justify-center gap-1">
              Explore All Services <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Star className="text-gold mx-auto mb-8" size={48} fill="currentColor" />
            <p className="serif text-2xl md:text-3xl italic leading-relaxed mb-10">
              "Mourvi Lalaji Caterers turned our wedding into a culinary journey. The attention to detail, the presentation, and most importantly, the taste was beyond our expectations. Our guests are still talking about the food!"
            </p>
            <div>
              <h4 className="font-bold text-xl">Priya & Rahul Sharma</h4>
              <p className="text-gold text-sm uppercase tracking-widest">Wedding Clients</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCard({ icon, number, label }: { icon: React.ReactNode, number: string, label: string }) {
  return (
    <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex justify-center mb-4">{icon}</div>
      <div className="text-3xl font-bold text-charcoal mb-1">{number}</div>
      <div className="text-xs uppercase tracking-widest text-gray-500 font-medium">{label}</div>
    </div>
  );
}

function ServicePreview({ image, title, desc }: { image: string, title: string, desc: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl aspect-[4/5]">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent opacity-80"></div>
      <div className="absolute bottom-0 left-0 p-8 text-white">
        <h3 className="serif text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{desc}</p>
        <a href="/services" className="text-gold text-sm font-bold flex items-center gap-1 group/link">
          Learn More <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}
