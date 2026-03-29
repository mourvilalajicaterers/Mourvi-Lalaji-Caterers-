import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Star, Users, Utensils, Calendar, Send } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Premium Marquee */}
        <div className="absolute top-0 left-0 right-0 z-20 bg-gold/90 text-white py-2 overflow-hidden border-b border-white/20">
          <div className="flex whitespace-nowrap animate-marquee">
            <span className="mx-4 text-sm font-bold tracking-widest uppercase">Welcome to "Mourvi Lalaji Caterers" • Exquisite Culinary Experiences • Premium Event Management • 24/7 Service • </span>
            <span className="mx-4 text-sm font-bold tracking-widest uppercase">Welcome to "Mourvi Lalaji Caterers" • Exquisite Culinary Experiences • Premium Event Management • 24/7 Service • </span>
            <span className="mx-4 text-sm font-bold tracking-widest uppercase">Welcome to "Mourvi Lalaji Caterers" • Exquisite Culinary Experiences • Premium Event Management • 24/7 Service • </span>
            <span className="mx-4 text-sm font-bold tracking-widest uppercase">Welcome to "Mourvi Lalaji Caterers" • Exquisite Culinary Experiences • Premium Event Management • 24/7 Service • </span>
            <span className="mx-4 text-sm font-bold tracking-widest uppercase">Welcome to "Mourvi Lalaji Caterers" • Exquisite Culinary Experiences • Premium Event Management • 24/7 Service • </span>
            <span className="mx-4 text-sm font-bold tracking-widest uppercase">Welcome to "Mourvi Lalaji Caterers" • Exquisite Culinary Experiences • Premium Event Management • 24/7 Service • </span>
          </div>
        </div>

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
      <section className="py-20 bg-red-dark text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard icon={<Utensils className="text-white" />} number="500+" label="Events Catered" />
            <StatCard icon={<Users className="text-white" />} number="4000+" label="Happy Guests" />
            <StatCard icon={<Star className="text-white" />} number="5+" label="Years Experience" />
            <StatCard icon={<Calendar className="text-white" />} number="100%" label="Satisfaction" />
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-red-dark/95 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="serif text-4xl md:text-5xl font-bold mb-4">Our Signature Services</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-gray-200 max-w-2xl mx-auto">
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
            <a href="/services" className="text-white font-bold hover:underline flex items-center justify-center gap-1">
              Explore All Services <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="serif text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              text="We have organized a house warming party (Saviour park, Mohan Nagar) and Lalaji caterers were appointed for food arrangement at last hour (a day before). I am so impressed by the food quality and arrangement. There are few other things I would like to share about this team, they are punctual. Cleanliness maintained. I would definitely recommend Lalaji caterers with 5 stars."
              author="Shalini Das"
              role="House Warming Party"
              image="https://picsum.photos/seed/shalini/100/100"
            />
            <TestimonialCard 
              text="One of the best catering service in Ghaziabad... Their behaviour is polite and are responsive... They are very generous I am sure if you ask they will give you concession also... But believe me the service they provide will make you feel like there is no need of concession... ❤️❤️ Hygienic,Deliciousness,Proper staff will polite behaviour,Best Decoration,Overall Best... 👍🏻"
              author="Pinnacle Classes"
              role="Ghaziabad Client"
              image="https://picsum.photos/seed/pinnacle/100/100"
            />
            <TestimonialCard 
              text="We had an event with Team Lalji , which is amazingly superb , very well responsive in terms of everything ,not only caterers , but also very good in terms of organising and delivering excellent service. Thankyou team Lalji"
              author="Jeevan Adhikari"
              role="Event Client"
              image="https://picsum.photos/seed/jeevan/100/100"
            />
          </div>
        </div>
      </section>

      {/* Quick Enquiry Form */}
      <section className="py-24 bg-red-dark text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl border border-white/20">
            <div className="text-center mb-10">
              <h2 className="serif text-4xl font-bold text-white mb-4">Quick Enquiry</h2>
              <p className="text-gray-200">Fill out the form below and we'll get back to you shortly.</p>
            </div>
            <form action="https://formspree.io/f/xreoperz" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-300">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all text-white placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-300">Area/Location</label>
                  <input 
                    type="text" 
                    name="area"
                    required
                    placeholder="e.g. Ghaziabad"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all text-white placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-300">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all text-white placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-300">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    placeholder="+91 00000 00000"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all text-white placeholder:text-gray-400"
                  />
                </div>
              </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-300">Event Type</label>
                    <select name="event_type" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all appearance-none text-white">
                      <option className="bg-charcoal">Wedding</option>
                      <option className="bg-charcoal">Corporate Event</option>
                      <option className="bg-charcoal">Birthday Party</option>
                      <option className="bg-charcoal">Private Dinner</option>
                      <option className="bg-charcoal">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-300">Persons approx</label>
                    <input 
                      type="number" 
                      name="persons_approx"
                      required
                      placeholder="e.g. 150"
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-300">Your Message</label>
                <textarea 
                  name="message"
                  rows={4}
                  placeholder="Tell us about your event..."
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all resize-none text-white placeholder:text-gray-400"
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-gold text-white py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-charcoal transition-all duration-300 flex items-center justify-center gap-3 group">
                Send Inquiry <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCard({ icon, number, label }: { icon: React.ReactNode, number: string, label: string }) {
  return (
    <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
      <div className="flex justify-center mb-4">{icon}</div>
      <div className="text-3xl font-bold text-white mb-1">{number}</div>
      <div className="text-xs uppercase tracking-widest text-gray-300 font-medium">{label}</div>
    </div>
  );
}

function TestimonialCard({ text, author, role, image }: { text: string, author: string, role: string, image: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-gold/50 transition-all duration-300">
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="text-gold" fill="currentColor" />
        ))}
      </div>
      <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">"{text}"</p>
      <div className="flex items-center gap-4">
        <img 
          src={image} 
          alt={author} 
          className="w-10 h-10 rounded-full object-cover border border-gold/30"
          referrerPolicy="no-referrer"
        />
        <div>
          <h4 className="font-bold text-white text-sm">{author}</h4>
          <p className="text-gold text-[10px] uppercase tracking-widest">{role}</p>
        </div>
      </div>
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
      <div className="absolute bottom-0 left-0 p-8 text-white w-full">
        <h3 className="serif text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{desc}</p>
        <div className="flex items-center justify-between">
          <a href="/services" className="text-gold text-sm font-bold flex items-center gap-1 group/link">
            Learn More <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
          </a>
          <a href="/services" className="bg-gold text-white text-[10px] px-3 py-1.5 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-charcoal transition-all">
            Enquiry Now
          </a>
        </div>
      </div>
    </div>
  );
}
