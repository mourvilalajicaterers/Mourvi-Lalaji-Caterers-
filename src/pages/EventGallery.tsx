import React from 'react';
import { motion } from 'motion/react';
import { Camera, Sparkles } from 'lucide-react';

const galleryItems = [
  {
    url: "https://i.ibb.co/39hfwztL/Whats-App-Image-2026-03-29-at-12-53-59.jpg",
    title: "Hygine Utensils and Quality"
  },
  {
    url: "https://i.ibb.co/Z6ykNj2k/Whats-App-Image-2026-03-29-at-12-53-59-1.jpg",
    title: "Different Variety of Sweets Available"
  },
  {
    url: "https://i.ibb.co/N2njCSkr/Whats-App-Image-2026-03-29-at-12-53-59-2.jpg",
    title: "Complete Packages"
  },
  {
    url: "https://i.ibb.co/TMGS5k6R/Whats-App-Image-2026-03-29-at-12-54-00.jpg",
    title: "Hygine Management"
  },
  {
    url: "https://i.ibb.co/JRRr7LDg/Whats-App-Image-2026-03-29-at-12-54-00-1.jpg",
    title: "Buffet System"
  },
  {
    url: "https://i.ibb.co/RTGpr6wY/Whats-App-Image-2026-03-29-at-12-54-00-2.jpg",
    title: "Aluminium foil covered"
  },
  {
    url: "https://i.ibb.co/mC75hKQ0/Whats-App-Image-2026-03-29-at-12-54-00-3.jpg",
    title: "Haldi/Mehndi"
  },
  {
    url: "https://i.ibb.co/GQyKkXRH/Whats-App-Image-2026-03-29-at-12-54-00-4.jpg",
    title: "Full Party Decoration Lights"
  },
  {
    url: "https://i.ibb.co/ynJ4y8sT/Whats-App-Image-2026-03-29-at-12-54-00-5.jpg",
    title: "Grill Flame Cooking"
  },
  {
    url: "https://i.ibb.co/pr94qqhj/Whats-App-Image-2026-03-29-at-12-54-00-6.jpg",
    title: "Garden Decoration"
  },
  {
    url: "https://i.ibb.co/6003jP4d/Whats-App-Image-2026-03-29-at-12-54-00-7.jpg",
    title: "Decorated Tents"
  },
  {
    url: "https://i.ibb.co/B2X7HMHD/Whats-App-Image-2026-03-29-at-12-54-00-8.jpg",
    title: "Full Banquet Hall Coverage"
  },
  {
    url: "https://i.ibb.co/ymzFm7Zt/Whats-App-Image-2026-03-29-at-12-54-00-9.jpg",
    title: "Lala Ji"
  },
  {
    url: "https://i.ibb.co/gbXr44F0/Whats-App-Image-2026-03-29-at-12-54-00-10.jpg",
    title: "Garden"
  },
  {
    url: "https://i.ibb.co/b0pnJKR/Whats-App-Image-2026-03-29-at-12-54-00-11.jpg",
    title: "Grill Flame Cooking"
  },
  {
    url: "https://i.ibb.co/V09d8Dxt/Whats-App-Image-2026-03-29-at-12-54-00-12.jpg",
    title: "Engagement Planning"
  },
  {
    url: "https://i.ibb.co/j9x3y9j5/Whats-App-Image-2026-03-29-at-12-54-00-13.jpg",
    title: "Sundarkand/Bhandara Tent Decoration"
  },
  {
    url: "https://i.ibb.co/jPhcC4Q9/Whats-App-Image-2026-03-29-at-12-54-00-14.jpg",
    title: "Prasad"
  },
  {
    url: "https://i.ibb.co/nqKNCyGn/Whats-App-Image-2026-03-29-at-12-54-00-15.jpg",
    title: "Tent & Banquet Decoration Service"
  },
  {
    url: "https://i.ibb.co/mFvzgJ2W/Whats-App-Image-2026-03-29-at-12-54-00-16.jpg",
    title: "Buffet"
  },
  {
    url: "https://i.ibb.co/xtxVp1F5/Whats-App-Image-2026-03-29-at-12-54-01.jpg",
    title: "Quality decoration"
  },
  {
    url: "https://i.ibb.co/9mnB94wP/Whats-App-Image-2026-03-29-at-12-54-01-1.jpg",
    title: "High Trained Staff"
  }
];

export default function EventGallery() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-purple-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/gallery/1920/1080" 
            alt="Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-bold mb-6"
          >
            <Sparkles size={16} />
            <span>Visual Journey</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="serif text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Event Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-purple-100 max-w-2xl mx-auto text-lg"
          >
            Explore our portfolio of successfully managed events, exquisite catering setups, and beautiful decorations.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.url} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 text-gold mb-2">
                  <Camera size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">Event Highlight</span>
                </div>
                <h3 className="text-white font-bold text-lg leading-tight">{item.title}</h3>
              </div>
              <div className="p-4 md:hidden">
                <h3 className="text-charcoal font-bold text-sm">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="serif text-3xl md:text-4xl font-bold text-charcoal mb-6">Ready to Plan Your Event?</h2>
          <p className="text-gray-600 mb-10">Let us bring your vision to life with our expert catering and event management services.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-gold text-white px-8 py-4 rounded-full font-bold hover:bg-charcoal transition-all transform hover:scale-105"
            >
              Get a Quote
            </a>
            <a 
              href="/ai-planner" 
              className="bg-purple-950 text-white px-8 py-4 rounded-full font-bold hover:bg-gold transition-all transform hover:scale-105"
            >
              Try AI Planner
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
