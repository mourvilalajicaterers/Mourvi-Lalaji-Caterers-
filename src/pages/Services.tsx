import React from 'react';
import { motion } from 'motion/react';
import { Utensils, Users, ChefHat, Flame, Coffee, PartyPopper, GraduationCap, Heart, Home as HomeIcon, Briefcase, Star } from 'lucide-react';

const services = [
  {
    title: "Wedding Catering",
    icon: <Heart className="text-gold" />,
    desc: "From traditional feasts to modern fusion, we create the perfect menu for your big day.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Event Catering",
    icon: <Briefcase className="text-gold" />,
    desc: "Professional catering for corporate events, conferences, and product launches.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Dinner Catering",
    icon: <Utensils className="text-gold" />,
    desc: "Exquisite multi-course dinners for formal gatherings and celebrations.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Private Catering",
    icon: <HomeIcon className="text-gold" />,
    desc: "Exclusive catering services for private residences and intimate settings.",
    image: "https://images.unsplash.com/photo-1533143708019-ea5cfa80213e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Personal Chef",
    icon: <ChefHat className="text-gold" />,
    desc: "A dedicated chef to prepare customized meals at your location.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Party Catering",
    icon: <PartyPopper className="text-gold" />,
    desc: "Fun and flavorful menus for house parties, kitty parties, and get-togethers.",
    image: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Barbecue Catering",
    icon: <Flame className="text-gold" />,
    desc: "Live grill stations and smoky flavors for outdoor events.",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Buffet Catering",
    icon: <Utensils className="text-gold" />,
    desc: "Extensive spreads with a wide variety of cuisines to suit every palate.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Brunch Catering",
    icon: <Coffee className="text-gold" />,
    desc: "Delightful morning and afternoon spreads for relaxed celebrations.",
    image: "https://images.unsplash.com/photo-1495214783159-3503fd1b572d?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Graduation Parties",
    icon: <GraduationCap className="text-gold" />,
    desc: "Celebrate academic achievements with vibrant food and service.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Birthday Parties",
    icon: <Star className="text-gold" />,
    desc: "Themed menus and special treats for birthdays of all ages.",
    image: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Get Togethers",
    icon: <Users className="text-gold" />,
    desc: "Casual and comfortable catering for reunions and social meets.",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Services() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <section className="bg-charcoal text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=2000" 
            alt="Fine Dining" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="serif text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light">
              From grand weddings to intimate private dinners, we bring culinary excellence to every occasion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm">
                  {service.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="serif text-2xl font-bold mb-3 text-charcoal">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <button className="text-gold font-bold text-sm flex items-center gap-2 group/btn">
                  Enquire Now <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Custom Request */}
      <section className="max-w-4xl mx-auto px-4 mt-24">
        <div className="bg-gold rounded-3xl p-12 text-center text-white shadow-2xl shadow-gold/20">
          <h2 className="serif text-3xl md:text-4xl font-bold mb-6">Need a Custom Menu?</h2>
          <p className="text-white/80 mb-10 text-lg">
            Our chefs are ready to create a bespoke culinary experience tailored specifically to your event's theme and dietary requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-gold px-8 py-4 rounded-full font-bold hover:bg-charcoal hover:text-white transition-all">
              Talk to Our Chef
            </button>
            <button className="bg-charcoal text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-charcoal transition-all">
              Request a Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
