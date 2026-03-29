import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Star, Users, Utensils, Calendar, Send, ShieldCheck, Clock, Award, Heart, Instagram } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative bg-red-dark">
      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        {/* Premium Marquee */}
        <div className="absolute top-0 left-0 right-0 z-20 bg-gold/90 text-white py-2 overflow-hidden border-b border-white/20">
          <div className="flex whitespace-nowrap animate-marquee">
            <span className="mx-4 text-sm font-bold tracking-widest uppercase">Welcome to "Mourvi Lalaji Caterers" • Exquisite Culinary Experiences • Premium Event Management • 24/7 Service • </span>
            <span className="mx-4 text-sm font-bold tracking-widest uppercase">Welcome to "Mourvi Lalaji Caterers" • Exquisite Culinary Experiences • Premium Event Management • 24/7 Service • </span>
            <span className="mx-4 text-sm font-bold tracking-widest uppercase">Welcome to "Mourvi Lalaji Caterers" • Exquisite Culinary Experiences • Premium Event Management • 24/7 Service • </span>
            <span className="mx-4 text-sm font-bold tracking-widest uppercase">Welcome to "Mourvi Lalaji Caterers" • Exquisite Culinary Experiences • Premium Event Management • 24/7 Service • </span>
          </div>
        </div>

        {/* Banquet Background with Parallax effect */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=2000" 
            alt="Banquet Hall" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-red-dark/90 backdrop-blur-[1px]"></div>
        </motion.div>

        {/* Decorative Borders */}
        <div className="absolute inset-10 border border-white/10 pointer-events-none z-10 hidden md:block"></div>
        <div className="absolute inset-12 border border-gold/20 pointer-events-none z-10 hidden md:block"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-gold/50"></div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                </span>
                <span className="text-gold text-xs font-bold uppercase tracking-[0.4em]">Serving since 2006</span>
              </div>
              <div className="h-[1px] w-12 bg-gold/50"></div>
            </div>

            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-white/80 uppercase tracking-[0.5em] text-xs md:text-sm font-semibold mb-6 block"
            >
              The Art of Fine Catering
            </motion.span>

            <h1 className="serif text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight tracking-tighter">
              Mourvi Lalaji <br /> 
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="italic text-gold inline-block"
              >
                Caterers
              </motion.span>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12 font-light leading-relaxed tracking-wide"
            >
              Where tradition meets luxury. Crafting unforgettable culinary journeys for your most precious moments.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <a 
                href="/contact" 
                className="bg-gold text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-charcoal transition-all duration-500 flex items-center gap-3 group shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-none"
              >
                Book Your Event <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/services" 
                className="bg-white/5 backdrop-blur-xl text-white border border-white/20 px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-all duration-500 tracking-wider"
              >
                View Our Menu
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"></div>
        </motion.div>
      </section>

      {/* Stats Section with Glassmorphism */}
      <section className="py-24 relative z-20 -mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <StatCard icon={<Utensils size={28} className="text-gold" />} number="500+" label="Events Catered" />
            <StatCard icon={<Users size={28} className="text-gold" />} number="4000+" label="Happy Guests" />
            <StatCard icon={<Star size={28} className="text-gold" />} number="20+" label="Years Experience" />
            <StatCard icon={<Calendar size={28} className="text-gold" />} number="100%" label="Satisfaction" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-red-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">Our Excellence</span>
              <h2 className="serif text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">Why Choose Mourvi Lalaji Caterers?</h2>
              <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                With over two decades of experience, we don't just serve food; we create memories. Our commitment to quality, hygiene, and authentic taste sets us apart.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <FeatureItem icon={<ShieldCheck className="text-gold" />} title="Quality & Hygiene" desc="Strict adherence to safety standards." />
                <FeatureItem icon={<Clock className="text-gold" />} title="Punctuality" desc="Always on time, every single time." />
                <FeatureItem icon={<Award className="text-gold" />} title="Expert Chefs" desc="Mastering traditional & modern cuisines." />
                <FeatureItem icon={<Heart className="text-gold" />} title="Personalized" desc="Tailored menus for every occasion." />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 border-2 border-gold/20 rounded-3xl translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=1000" 
                alt="Professional Service" 
                className="relative z-10 rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-gold p-8 rounded-2xl z-20 shadow-xl hidden md:block">
                <div className="text-white text-4xl font-bold mb-1">20+</div>
                <div className="text-white/80 text-xs uppercase tracking-widest font-bold">Years of Trust</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services with Luxury Grid */}
      <section className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Offerings</span>
              <h2 className="serif text-5xl md:text-6xl font-bold text-white mb-6">Signature Services</h2>
              <div className="w-24 h-[1px] bg-gold mx-auto mb-8"></div>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Discover our range of premium catering solutions designed to make your events extraordinary.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ServicePreview 
              image="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800"
              title="Wedding Catering"
              desc="Elegant and grand culinary experiences for your special day."
              delay={0}
            />
            <ServicePreview 
              image="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800"
              title="Corporate Events"
              desc="Professional catering for meetings, conferences, and galas."
              delay={0.2}
            />
            <ServicePreview 
              image="https://images.unsplash.com/photo-1533143708019-ea5cfa80213e?auto=format&fit=crop&q=80&w=800"
              title="Private Parties"
              desc="Intimate dining and celebrations in the comfort of your home."
              delay={0.4}
            />
          </div>

          <div className="mt-16 text-center">
            <a href="/services" className="inline-flex items-center gap-2 text-gold font-bold hover:text-white transition-colors group">
              Explore All Services <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Signature Dishes Section */}
      <section className="py-24 bg-red-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">Culinary Art</span>
              <h2 className="serif text-5xl md:text-7xl font-bold text-white leading-tight">Our Signature <br /> <span className="text-gold italic">Creations</span></h2>
            </div>
            <p className="text-gray-400 max-w-md text-lg pb-2">
              A glimpse into our most celebrated dishes, prepared with passion and the finest ingredients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <DishCard 
              image="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=800"
              name="Royal Paneer Tikka"
              category="Appetizer"
            />
            <DishCard 
              image="https://images.unsplash.com/photo-1545231027-63b6af0c37ad?auto=format&fit=crop&q=80&w=800"
              name="Dal Makhani"
              category="Main Course"
            />
            <DishCard 
              image="https://images.unsplash.com/photo-1626777552726-4a6b547b4de5?auto=format&fit=crop&q=80&w=800"
              name="Hyderabadi Biryani"
              category="Specialty"
            />
            <DishCard 
              image="https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&q=80&w=800"
              name="Gulab Jamun"
              category="Dessert"
            />
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-24 bg-red-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-xl rounded-[3rem] p-12 md:p-20 border border-white/10 text-center relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-2xl shadow-2xl mb-8 transform -rotate-6">
                <Instagram size={40} className="text-white" />
              </div>
              <h2 className="serif text-4xl md:text-6xl font-bold text-white mb-6">Follow Our Journey</h2>
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Get a behind-the-scenes look at our exquisite setups, culinary masterpieces, and happy moments. Join our growing community on Instagram!
              </p>
              <a 
                href="https://www.instagram.com/mourvilalajicaterers_tm?utm_source=qr&igsh=MW42cm1sZDA3MjcxYw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-charcoal px-10 py-5 rounded-full font-bold hover:bg-gold hover:text-white transition-all duration-500 shadow-xl group"
              >
                @mourvilalajicaterers_tm <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-32 bg-red-dark relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/4 left-10 w-64 h-64 border border-gold rounded-full"></div>
          <div className="absolute bottom-1/4 right-10 w-96 h-96 border border-gold rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="serif text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Client Stories
            </motion.h2>
            <div className="w-20 h-1 bg-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <TestimonialCard 
              text="We have organized a house warming party (Saviour park, Mohan Nagar) and Lalaji caterers were appointed for food arrangement at last hour (a day before). I am so impressed by the food quality and arrangement. There are few other things I would like to share about this team, they are punctual. Cleanliness maintained. I would definitely recommend Lalaji caterers with 5 stars."
              author="Shalini Das"
              role="House Warming Party"
              image="https://picsum.photos/seed/shalini/100/100"
              delay={0}
            />
            <TestimonialCard 
              text="One of the best catering service in Ghaziabad... Their behaviour is polite and are responsive... They are very generous I am sure if you ask they will give you concession also... But believe me the service they provide will make you feel like there is no need of concession... ❤️❤️ Hygienic,Deliciousness,Proper staff will polite behaviour,Best Decoration,Overall Best... 👍🏻"
              author="Pinnacle Classes"
              role="Ghaziabad Client"
              image="https://picsum.photos/seed/pinnacle/100/100"
              delay={0.2}
            />
            <TestimonialCard 
              text="We had an event with Team Lalji , which is amazingly superb , very well responsive in terms of everything ,not only caterers , but also very good in terms of organising and delivering excellent service. Thankyou team Lalji"
              author="Jeevan Adhikari"
              role="Event Client"
              image="https://picsum.photos/seed/jeevan/100/100"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Quick Enquiry Form with Premium Card */}
      <section className="py-32 bg-black/30 relative">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-2xl p-8 md:p-16 rounded-[3rem] shadow-2xl border border-white/10 relative overflow-hidden"
          >
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-[3rem]"></div>
            
            <div className="text-center mb-12 relative z-10">
              <span className="text-gold font-bold uppercase tracking-widest text-xs mb-4 block">Get in Touch</span>
              <h2 className="serif text-5xl font-bold text-white mb-6">Quick Enquiry</h2>
              <p className="text-gray-300 text-lg max-w-xl mx-auto">Tell us about your dream event and let's make it a reality together.</p>
            </div>

            <form action="https://formspree.io/f/xreoperz" method="POST" className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-gold/80 ml-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all text-white placeholder:text-gray-500"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-gold/80 ml-2">Area/Location</label>
                  <input 
                    type="text" 
                    name="area"
                    required
                    placeholder="e.g. Ghaziabad"
                    className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all text-white placeholder:text-gray-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-gold/80 ml-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all text-white placeholder:text-gray-500"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-gold/80 ml-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    placeholder="+91 00000 00000"
                    className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all text-white placeholder:text-gray-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-gold/80 ml-2">Event Type</label>
                  <div className="relative">
                    <select name="event_type" className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all appearance-none text-white cursor-pointer">
                      <option className="bg-charcoal">Wedding</option>
                      <option className="bg-charcoal">Corporate Event</option>
                      <option className="bg-charcoal">Birthday Party</option>
                      <option className="bg-charcoal">Private Dinner</option>
                      <option className="bg-charcoal">Other</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gold">
                      <ChevronRight size={20} className="rotate-90" />
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-gold/80 ml-2">Persons approx</label>
                  <input 
                    type="number" 
                    name="persons_approx"
                    required
                    placeholder="e.g. 150"
                    className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all text-white placeholder:text-gray-500"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-gold/80 ml-2">Your Message</label>
                <textarea 
                  name="message"
                  rows={4}
                  placeholder="Tell us about your event..."
                  className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all resize-none text-white placeholder:text-gray-500"
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-gold text-white py-6 rounded-2xl font-bold text-xl hover:bg-white hover:text-charcoal transition-all duration-500 flex items-center justify-center gap-3 group shadow-xl">
                Send Inquiry <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center border border-gold/20">
        {icon}
      </div>
      <div>
        <h4 className="text-white font-bold mb-1">{title}</h4>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function DishCard({ image, name, category }: { image: string, name: string, category: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative h-[400px] overflow-hidden rounded-3xl"
    >
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <span className="text-gold text-xs font-bold uppercase tracking-widest mb-2 block">{category}</span>
        <h3 className="serif text-2xl font-bold text-white">{name}</h3>
      </div>
    </motion.div>
  );
}

function StatCard({ icon, number, label }: { icon: React.ReactNode, number: string, label: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:bg-white/10 hover:border-gold/30 transition-all duration-500 group"
    >
      <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-500">{icon}</div>
      <div className="text-4xl font-bold text-white mb-2 tracking-tight">{number}</div>
      <div className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">{label}</div>
    </motion.div>
  );
}

function TestimonialCard({ text, author, role, image, delay }: { text: string, author: string, role: string, image: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="bg-white/5 backdrop-blur-2xl p-10 rounded-[2.5rem] border border-white/10 hover:border-gold/40 transition-all duration-500 relative group"
    >
      <div className="flex gap-1 mb-8">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className="text-gold" fill="currentColor" />
        ))}
      </div>
      <p className="text-gray-300 text-base leading-relaxed mb-10 italic font-light">"{text}"</p>
      <div className="flex items-center gap-5">
        <div className="relative">
          <div className="absolute inset-0 bg-gold rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity"></div>
          <img 
            src={image} 
            alt={author} 
            className="relative z-10 w-14 h-14 rounded-full object-cover border-2 border-gold/30"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <h4 className="font-bold text-white text-base">{author}</h4>
          <p className="text-gold text-[10px] uppercase tracking-widest font-bold">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}

function ServicePreview({ image, title, desc, delay }: { image: string, title: string, desc: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className="group relative overflow-hidden rounded-[2.5rem] aspect-[4/5] shadow-2xl"
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-red-dark via-transparent to-transparent opacity-90"></div>
      <div className="absolute bottom-0 left-0 p-10 text-white w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="serif text-3xl font-bold mb-3">{title}</h3>
        <p className="text-sm text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 leading-relaxed">{desc}</p>
        <div className="flex items-center justify-between">
          <a href="/services" className="text-gold text-sm font-bold flex items-center gap-2 group/link">
            Learn More <ChevronRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
          </a>
          <a href="/services" className="bg-gold text-white text-[10px] px-5 py-2.5 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-charcoal transition-all shadow-lg">
            Enquiry Now
          </a>
        </div>
      </div>
    </motion.div>
  );
}
