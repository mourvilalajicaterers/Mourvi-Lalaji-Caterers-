import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Award, Heart, Shield, Users, Star, Send, Utensils, Calendar } from 'lucide-react';

export default function About() {
  const [rating, setRating] = useState(5);

  return (
    <div className="bg-orange-500 min-h-screen text-white">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-orange-600">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="serif text-5xl md:text-7xl font-bold mb-4"
          >
            Our Story
          </motion.h1>
          <p className="text-gold uppercase tracking-[0.4em] text-sm font-bold">Tradition Meets Excellence</p>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-xs font-bold uppercase tracking-widest border border-white/30">Since 2006</div>
            <h2 className="serif text-4xl md:text-5xl font-bold text-white leading-tight">
              A Legacy of <span className="text-white italic underline decoration-gold/50">Taste & Elegance</span>
            </h2>
            <p className="text-white/90 leading-relaxed text-lg">
              <span className="text-xs uppercase tracking-[0.2em] text-white font-bold block mb-1">Mourvi</span>
              <span className="font-bold text-white">Lalaji Caterers</span> began with a simple mission: to bring the authentic flavors of India to the grandest celebrations. What started as a small family-run kitchen has grown into one of the most trusted names in premium event catering.
            </p>
            <p className="text-white/80 leading-relaxed">
              Our philosophy is built on three pillars: Quality, Innovation, and Service. We believe that food is not just sustenance; it's the heart of every celebration. That's why we source only the finest ingredients and employ master chefs who are passionate about their craft.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              <div className="text-center p-4 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm">
                <Utensils className="text-white mx-auto mb-2" size={24} />
                <h4 className="serif text-2xl font-bold text-white">500+</h4>
                <p className="text-[10px] text-white/70 uppercase tracking-widest mt-1">Events Catered</p>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm">
                <Users className="text-white mx-auto mb-2" size={24} />
                <h4 className="serif text-2xl font-bold text-white">4000+</h4>
                <p className="text-[10px] text-white/70 uppercase tracking-widest mt-1">Happy Guests</p>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm">
                <Award className="text-white mx-auto mb-2" size={24} />
                <h4 className="serif text-2xl font-bold text-white">20+</h4>
                <p className="text-[10px] text-white/70 uppercase tracking-widest mt-1">Years Experience</p>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm">
                <Star className="text-white mx-auto mb-2" size={24} />
                <h4 className="serif text-2xl font-bold text-white">100%</h4>
                <p className="text-[10px] text-white/70 uppercase tracking-widest mt-1">Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-orange-600 flex items-center justify-center p-12 border-2 border-white/20">
              <div className="text-center space-y-6">
                <Utensils size={80} className="text-white/20 mx-auto" />
                <div className="serif text-3xl font-bold text-white/40 italic">Excellence in Every Bite</div>
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/10 rounded-3xl -z-10 backdrop-blur-md"></div>
            <div className="absolute -top-10 -right-10 w-48 h-48 border-2 border-white/20 rounded-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="py-24 bg-orange-700 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="serif text-4xl md:text-5xl font-bold mb-4">Give Us a Review</h2>
            <p className="text-white/70">Your feedback helps us grow and serve you better</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10">
            <form action="https://formspree.io/f/mlgojpep" method="POST" className="space-y-8">
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-gold/80 ml-2">Your Rating</label>
                <div className="flex gap-4 justify-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star 
                        size={40} 
                        className={star <= rating ? "text-gold" : "text-white/20"} 
                        fill={star <= rating ? "currentColor" : "none"} 
                      />
                    </button>
                  ))}
                </div>
                <input type="hidden" name="rating" value={rating} />
              </div>

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
                  <label className="text-xs font-bold uppercase tracking-widest text-gold/80 ml-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all text-white placeholder:text-gray-500"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-gold/80 ml-2">Your Experience</label>
                <textarea 
                  name="description"
                  rows={4}
                  required
                  placeholder="Share your thoughts about our service..."
                  className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all resize-none text-white placeholder:text-gray-500"
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-gold text-white py-6 rounded-2xl font-bold text-xl hover:bg-white hover:text-charcoal transition-all duration-500 flex items-center justify-center gap-3 group shadow-xl">
                Submit Review <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="serif text-4xl font-bold mb-4 text-white">Why Choose Us?</h2>
            <p className="text-white/70">The values that drive our culinary excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard 
              icon={<Award className="text-white" size={32} />}
              title="Premium Quality"
              desc="We never compromise on ingredients. Only the freshest, finest produce makes it to our kitchen."
            />
            <ValueCard 
              icon={<Heart className="text-white" size={32} />}
              title="Passion for Food"
              desc="Our chefs pour their heart into every dish, creating flavors that resonate and delight."
            />
            <ValueCard 
              icon={<Users className="text-white" size={32} />}
              title="Guest-Centric"
              desc="Your satisfaction is our priority. We go above and beyond to ensure your guests are pampered."
            />
            <ValueCard 
              icon={<Shield className="text-white" size={32} />}
              title="Reliability"
              desc="With over a decade of experience, we handle every detail so you can enjoy your event stress-free."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 text-center border border-white/20">
      <div className="flex justify-center mb-6">{icon}</div>
      <h3 className="serif text-2xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-white/80 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function TeamMember({ image, name, role }: { image: string, name: string, role: string }) {
  return (
    <div className="group text-center">
      <div className="aspect-square rounded-full overflow-hidden mb-6 border-4 border-gold/10 group-hover:border-gold transition-colors duration-500">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
      </div>
      <h4 className="serif text-2xl font-bold">{name}</h4>
      <p className="text-gold text-sm uppercase tracking-widest mt-1">{role}</p>
    </div>
  );
}
