import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#241F1C]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-[65%_center] md:bg-center bg-no-repeat opacity-80"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#241F1C]/80 via-[#241F1C]/50 to-[#241F1C]/20" />
      </div>

      <div className="relative z-10 px-6 max-w-7xl mx-auto mt-[100px] lg:mt-[130px] py-12 flex flex-col justify-center items-start w-full lg:w-[60%]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-brand-accent-light font-medium tracking-widest uppercase text-sm mb-6"
        >
          Luxury Beauty & Wellness Studio
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[38px] leading-[1.1] sm:text-5xl md:text-6xl lg:text-[72px] font-serif text-brand-ivory mb-6 max-w-2xl"
        >
          Reveal Your Most Radiant Self
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[16px] md:text-[18px] text-brand-ivory/90 mb-10 max-w-lg font-light leading-relaxed"
        >
          Experience luxury salon, bridal makeup, premium haircare and wellness services crafted to help you look and feel your absolute best.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-start gap-4 mb-12 w-full sm:w-auto"
        >
          <a
            href="#booking"
            className="w-full sm:w-auto bg-brand-accent text-white px-8 py-4 rounded-[12px] font-medium hover:-translate-y-0.5 hover:brightness-95 transition-all duration-300 text-center"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto bg-transparent border border-brand-ivory text-brand-ivory px-8 py-4 rounded-[12px] font-medium hover:bg-brand-ivory hover:text-brand-black transition-colors duration-300 text-center"
          >
            Explore Services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col items-start"
        >
          <div className="flex text-brand-accent-light mb-2 text-lg">
            ★★★★★ <span className="ml-3 text-white font-medium text-[15px]">4.9 Rating</span>
          </div>
          <p className="text-sm text-brand-ivory/70">Trusted by 2,000+ Happy Clients</p>
        </motion.div>
      </div>
    </section>
  );
}
