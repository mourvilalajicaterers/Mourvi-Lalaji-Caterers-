import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-charcoal text-white py-24 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="serif text-5xl md:text-6xl font-bold mb-6"
          >
            Get In Touch
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Ready to plan your next extraordinary event? We're here to help you create a culinary masterpiece.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h2 className="serif text-3xl font-bold mb-8 text-charcoal">Contact Information</h2>
              <div className="space-y-8">
                <ContactItem 
                  icon={<Phone className="text-gold" />}
                  title="Call Us"
                  content="+91 98765 43210"
                  subContent="Mon-Sat, 9am - 8pm"
                />
                <ContactItem 
                  icon={<Mail className="text-gold" />}
                  title="Email Us"
                  content="info@mourvilalaji.com"
                  subContent="We'll respond within 24 hours"
                />
                <ContactItem 
                  icon={<MapPin className="text-gold" />}
                  title="Visit Us"
                  content="123 Gourmet Plaza, Celebration Road"
                  subContent="New Delhi, India - 110001"
                />
                <ContactItem 
                  icon={<Clock className="text-gold" />}
                  title="Working Hours"
                  content="Monday - Saturday"
                  subContent="09:00 AM - 08:00 PM"
                />
              </div>
            </div>

            <div className="p-8 bg-gold-light rounded-3xl border border-gold/10">
              <h3 className="serif text-xl font-bold mb-4">Follow Our Journey</h3>
              <p className="text-sm text-gray-500 mb-6">Stay updated with our latest events and culinary creations.</p>
              <div className="flex gap-4">
                <SocialLink name="Instagram" />
                <SocialLink name="Facebook" />
                <SocialLink name="Twitter" />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-gray-200 border border-gray-100">
              <h2 className="serif text-3xl font-bold mb-8 text-charcoal">Send Us a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 00000 00000"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Event Type</label>
                    <select className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all appearance-none">
                      <option>Wedding</option>
                      <option>Corporate Event</option>
                      <option>Birthday Party</option>
                      <option>Private Dinner</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Your Message</label>
                  <textarea 
                    rows={6}
                    placeholder="Tell us about your event..."
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all resize-none"
                  ></textarea>
                </div>

                <button className="w-full bg-gold text-white py-5 rounded-xl font-bold text-lg hover:bg-charcoal transition-all duration-300 flex items-center justify-center gap-3 group">
                  Send Inquiry <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactItem({ icon, title, content, subContent }: { icon: React.ReactNode, title: string, content: string, subContent: string }) {
  return (
    <div className="flex gap-6 items-start">
      <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-charcoal">{title}</h4>
        <p className="text-lg text-charcoal/80">{content}</p>
        <p className="text-sm text-gray-400">{subContent}</p>
      </div>
    </div>
  );
}

function SocialLink({ name }: { name: string }) {
  return (
    <a href="#" className="text-sm font-bold text-gold hover:text-charcoal transition-colors">
      {name}
    </a>
  );
}
