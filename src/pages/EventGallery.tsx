import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Sparkles, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Zoom, Keyboard, Mousewheel } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

const galleryItems = [
  {
    url: "https://i.ibb.co/39hfwztL/Whats-App-Image-2026-03-29-at-12-53-59.jpg",
    title: "Hygine Utensils and Quality",
    category: "Catering"
  },
  {
    url: "https://i.ibb.co/Z6ykNj2k/Whats-App-Image-2026-03-29-at-12-53-59-1.jpg",
    title: "Different Variety of Sweets Available",
    category: "Sweets"
  },
  {
    url: "https://i.ibb.co/N2njCSkr/Whats-App-Image-2026-03-29-at-12-53-59-2.jpg",
    title: "Complete Packages",
    category: "Catering"
  },
  {
    url: "https://i.ibb.co/TMGS5k6R/Whats-App-Image-2026-03-29-at-12-54-00.jpg",
    title: "Hygine Management",
    category: "Catering"
  },
  {
    url: "https://i.ibb.co/JRRr7LDg/Whats-App-Image-2026-03-29-at-12-54-00-1.jpg",
    title: "Buffet System",
    category: "Catering"
  },
  {
    url: "https://i.ibb.co/RTGpr6wY/Whats-App-Image-2026-03-29-at-12-54-00-2.jpg",
    title: "Aluminium foil covered",
    category: "Catering"
  },
  {
    url: "https://i.ibb.co/mC75hKQ0/Whats-App-Image-2026-03-29-at-12-54-00-3.jpg",
    title: "Haldi/Mehndi",
    category: "Decoration"
  },
  {
    url: "https://i.ibb.co/GQyKkXRH/Whats-App-Image-2026-03-29-at-12-54-00-4.jpg",
    title: "Full Party Decoration Lights",
    category: "Decoration"
  },
  {
    url: "https://i.ibb.co/ynJ4y8sT/Whats-App-Image-2026-03-29-at-12-54-00-5.jpg",
    title: "Grill Flame Cooking",
    category: "Catering"
  },
  {
    url: "https://i.ibb.co/pr94qqhj/Whats-App-Image-2026-03-29-at-12-54-00-6.jpg",
    title: "Garden Decoration",
    category: "Decoration"
  },
  {
    url: "https://i.ibb.co/6003jP4d/Whats-App-Image-2026-03-29-at-12-54-00-7.jpg",
    title: "Decorated Tents",
    category: "Decoration"
  },
  {
    url: "https://i.ibb.co/B2X7HMHD/Whats-App-Image-2026-03-29-at-12-54-00-8.jpg",
    title: "Full Banquet Hall Coverage",
    category: "Decoration"
  },
  {
    url: "https://i.ibb.co/ymzFm7Zt/Whats-App-Image-2026-03-29-at-12-54-00-9.jpg",
    title: "Lala Ji",
    category: "Team"
  },
  {
    url: "https://i.ibb.co/gbXr44F0/Whats-App-Image-2026-03-29-at-12-54-00-10.jpg",
    title: "Garden",
    category: "Decoration"
  },
  {
    url: "https://i.ibb.co/b0pnJKR/Whats-App-Image-2026-03-29-at-12-54-00-11.jpg",
    title: "Grill Flame Cooking",
    category: "Catering"
  },
  {
    url: "https://i.ibb.co/V09d8Dxt/Whats-App-Image-2026-03-29-at-12-54-00-12.jpg",
    title: "Engagement Planning",
    category: "Planning"
  },
  {
    url: "https://i.ibb.co/j9x3y9j5/Whats-App-Image-2026-03-29-at-12-54-00-13.jpg",
    title: "Sundarkand/Bhandara Tent Decoration",
    category: "Decoration"
  },
  {
    url: "https://i.ibb.co/jPhcC4Q9/Whats-App-Image-2026-03-29-at-12-54-00-14.jpg",
    title: "Prasad",
    category: "Catering"
  },
  {
    url: "https://i.ibb.co/nqKNCyGn/Whats-App-Image-2026-03-29-at-12-54-00-15.jpg",
    title: "Tent & Banquet Decoration Service",
    category: "Decoration"
  },
  {
    url: "https://i.ibb.co/mFvzgJ2W/Whats-App-Image-2026-03-29-at-12-54-00-16.jpg",
    title: "Buffet",
    category: "Catering"
  },
  {
    url: "https://i.ibb.co/xtxVp1F5/Whats-App-Image-2026-03-29-at-12-54-01.jpg",
    title: "Quality decoration",
    category: "Decoration"
  },
  {
    url: "https://i.ibb.co/9mnB94wP/Whats-App-Image-2026-03-29-at-12-54-01-1.jpg",
    title: "High Trained Staff",
    category: "Team"
  },
  // New Images
  {
    url: "https://i.ibb.co/hFWLpG6z/Whats-App-Image-2026-03-29-at-20-40-33.jpg",
    title: "Specials",
    category: "Catering"
  },
  {
    url: "https://i.ibb.co/6RqC4WxN/Whats-App-Image-2026-03-29-at-20-40-33-1.jpg",
    title: "Specials",
    category: "Catering"
  },
  {
    url: "https://i.ibb.co/5XRDy0Cv/Whats-App-Image-2026-03-29-at-20-40-34.jpg",
    title: "Specials",
    category: "Catering"
  },
  {
    url: "https://i.ibb.co/vCQPmRc1/Whats-App-Image-2026-03-29-at-20-40-34-1.jpg",
    title: "Specials",
    category: "Catering"
  },
  {
    url: "https://i.ibb.co/gLpjwLsk/Whats-App-Image-2026-03-29-at-20-40-34-2.jpg",
    title: "Specials",
    category: "Catering"
  },
  {
    url: "https://i.ibb.co/s9GqyrGq/Whats-App-Image-2026-03-29-at-20-40-34-3.jpg",
    title: "Specials",
    category: "Catering"
  },
  {
    url: "https://i.ibb.co/wqspqw0/Whats-App-Image-2026-03-29-at-20-40-35.jpg",
    title: "Specials",
    category: "Catering"
  },
  {
    url: "https://i.ibb.co/dsMP8z3x/Whats-App-Image-2026-03-29-at-20-40-35-1.jpg",
    title: "Specials",
    category: "Catering"
  },
  {
    url: "https://i.ibb.co/XrGH0b0g/Whats-App-Image-2026-03-29-at-20-40-35-2.jpg",
    title: "Specials",
    category: "Catering"
  },
  {
    url: "https://i.ibb.co/4nVRRW38/Whats-App-Image-2026-03-29-at-20-40-35-3.jpg",
    title: "Specials",
    category: "Catering"
  },
  {
    url: "https://i.ibb.co/twf1FRC1/Whats-App-Image-2026-03-29-at-20-41-25.jpg",
    title: "Flower Decoration",
    category: "Decoration"
  },
  {
    url: "https://i.ibb.co/RTnfJfDF/Whats-App-Image-2026-03-29-at-20-41-25-1.jpg",
    title: "Exclusive Setup",
    category: "Decoration"
  },
  {
    url: "https://i.ibb.co/bMsqgGng/Whats-App-Image-2026-03-29-at-20-41-26.jpg",
    title: "Tent",
    category: "Decoration"
  },
  {
    url: "https://i.ibb.co/993KBs3d/Whats-App-Image-2026-03-29-at-20-41-26-1.jpg",
    title: "Tent",
    category: "Decoration"
  },
  {
    url: "https://i.ibb.co/Y7nCWQX8/Whats-App-Image-2026-03-29-at-20-41-27.jpg",
    title: "Premium Setup",
    category: "Decoration"
  },
  {
    url: "https://i.ibb.co/Wv6MTYP9/Whats-App-Image-2026-03-29-at-20-41-27-1.jpg",
    title: "Quality Service",
    category: "Catering"
  },
  {
    url: "https://i.ibb.co/PsgFCPhS/Whats-App-Image-2026-03-29-at-20-41-27-2.jpg",
    title: "Special",
    category: "Catering"
  },
  {
    url: "https://i.ibb.co/2JP3b09/Whats-App-Image-2026-03-29-at-20-41-27-3.jpg",
    title: "Mocktail",
    category: "Catering"
  },
  {
    url: "https://i.ibb.co/0Vcvdt0D/Whats-App-Image-2026-03-29-at-20-41-28.jpg",
    title: "Fruit Juice",
    category: "Catering"
  },
  {
    url: "https://i.ibb.co/yFzMhVS2/Whats-App-Image-2026-03-29-at-20-41-28-1.jpg",
    title: "Different Tendors",
    category: "Catering"
  },
  {
    url: "https://i.ibb.co/ycGbQJJN/Whats-App-Image-2026-03-29-at-20-41-28-2.jpg",
    title: "Candle light setup",
    category: "Decoration"
  },
  {
    url: "https://i.ibb.co/0jkxFtff/Whats-App-Image-2026-03-29-at-20-41-28-3.jpg",
    title: "Quality Service feels Luxury",
    category: "Catering"
  },
  {
    url: "https://i.ibb.co/cKwmLjrG/Whats-App-Image-2026-03-29-at-20-42-01.jpg",
    title: "Birthday Ballons Set up",
    category: "Decoration"
  },
  {
    url: "https://i.ibb.co/SwMMKhhn/Whats-App-Image-2026-03-29-at-20-42-01-1.jpg",
    title: "DJ/Music Service",
    category: "Decoration"
  },
  {
    url: "https://i.ibb.co/ns9JScnR/Whats-App-Image-2026-03-29-at-20-42-02.jpg",
    title: "Birthday Party",
    category: "Decoration"
  },
  {
    url: "https://i.ibb.co/ZpVtwd40/Whats-App-Image-2026-03-29-at-20-42-02-1.jpg",
    title: "Clown Dolls Setup",
    category: "Decoration"
  },
  {
    url: "https://i.ibb.co/LhsM9N0y/Whats-App-Image-2026-03-29-at-20-42-02-2.jpg",
    title: "Smiles into Happiness",
    category: "Decoration"
  },
  {
    url: "https://i.ibb.co/k65vD4HP/Whats-App-Image-2026-03-29-at-20-42-02-3.jpg",
    title: "Birthday",
    category: "Decoration"
  },
  {
    url: "https://i.ibb.co/Xf3KtWSy/Whats-App-Image-2026-03-29-at-20-43-59.jpg",
    title: "Our Decors",
    category: "Decoration"
  },
  {
    url: "https://i.ibb.co/MybJm12p/Whats-App-Image-2026-03-29-at-20-43-59-1.jpg",
    title: "Decorated Stage & Chairs",
    category: "Decoration"
  },
  {
    url: "https://i.ibb.co/Q7WGv3Ss/Whats-App-Image-2026-03-29-at-20-44-00.jpg",
    title: "Corporate Parties",
    category: "Decoration"
  },
  {
    url: "https://i.ibb.co/DDTC91JF/Whats-App-Image-2026-03-29-at-20-44-00-1.jpg",
    title: "Entrance",
    category: "Decoration"
  }
];

export default function EventGallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...new Set(galleryItems.map(item => item.category))];

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-purple-950 overflow-hidden">
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
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-bold mb-6"
          >
            <Sparkles size={16} />
            <span>Visual Journey</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="serif text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Event Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-purple-100 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
          >
            Explore our portfolio of successfully managed events, exquisite catering setups, and beautiful decorations.
          </motion.p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="pt-12 pb-4 max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-gold text-white shadow-lg scale-105' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.url}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={item.url} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Maximize2 className="text-white w-10 h-10" />
                  </div>
                </div>
                <div className="p-5 bg-white border-t border-gray-50">
                  <div className="flex items-center gap-2 text-gold mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest">{item.category}</span>
                  </div>
                  <h3 className="text-charcoal font-bold text-base leading-snug group-hover:text-gold transition-colors">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox Slider */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col"
          >
            <div className="flex justify-end p-4 md:p-6 text-white">
              <button 
                onClick={closeLightbox}
                className="flex items-center gap-2 px-4 py-2 hover:bg-white/10 rounded-full transition-colors group"
              >
                <span className="text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Close</span>
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 relative flex items-center justify-center overflow-hidden">
              <Swiper
                initialSlide={selectedImageIndex}
                modules={[Navigation, Pagination, Zoom, Keyboard, Mousewheel]}
                navigation={{
                  prevEl: '.swiper-button-prev-custom',
                  nextEl: '.swiper-button-next-custom',
                }}
                pagination={{ clickable: true, type: 'fraction' }}
                zoom={true}
                keyboard={{ enabled: true }}
                mousewheel={true}
                onSlideChange={(swiper) => setSelectedImageIndex(swiper.activeIndex)}
                className="w-full h-full"
              >
                {filteredItems.map((item, idx) => (
                  <SwiperSlide key={idx} className="flex flex-col h-full p-4 md:p-12 items-center justify-center">
                    <div className="w-full max-w-5xl flex flex-col items-center justify-center gap-6 md:gap-8 overflow-hidden">
                      <div className="relative w-full flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl bg-black/20" style={{ maxHeight: '65vh' }}>
                        <div className="swiper-zoom-container w-full h-full flex items-center justify-center">
                          <img 
                            src={item.url} 
                            alt={item.title} 
                            className="max-w-full max-h-full object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                      {/* Lightbox Caption - Below the image, fixed area */}
                      <div className="w-full max-w-3xl text-center p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl">
                        <span className="text-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-3 block">{item.category}</span>
                        <h4 className="text-xl md:text-3xl font-bold serif text-white leading-tight">{item.title}</h4>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <button className="swiper-button-prev-custom absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all flex items-center justify-center">
                <ChevronLeft size={24} className="md:w-8 md:h-8" />
              </button>
              <button className="swiper-button-next-custom absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all flex items-center justify-center">
                <ChevronRight size={24} className="md:w-8 md:h-8" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="serif text-4xl md:text-5xl font-bold text-charcoal mb-6"
          >
            Ready to Plan Your Event?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 mb-10 text-lg"
          >
            Let us bring your vision to life with our expert catering and event management services.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a 
              href="/contact" 
              className="bg-gold text-white px-10 py-4 rounded-full font-bold hover:bg-charcoal transition-all transform hover:scale-105 shadow-lg"
            >
              Get a Quote
            </a>
            <a 
              href="/ai-planner" 
              className="bg-purple-950 text-white px-10 py-4 rounded-full font-bold hover:bg-gold transition-all transform hover:scale-105 shadow-lg"
            >
              Try AI Planner
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
