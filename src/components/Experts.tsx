import React from 'react';
import { motion } from 'motion/react';
import { EXPERTS } from '../data';
import { SafeImage } from './ui/SafeImage';

export default function Experts() {
  return (
    <section id="experts" className="py-20 md:py-28 bg-brand-alt">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-brand-black mb-4"
          >
            Meet Our Experts
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-brand-text-muted font-light max-w-2xl mx-auto"
          >
            Passionate professionals dedicated to bringing your beauty vision to life.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {EXPERTS.map((expert, index) => (
            <motion.div
              key={expert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col items-center text-center bg-white p-6 rounded-[20px] shadow-sm hover:shadow-md transition-shadow duration-300 border border-brand-border"
            >
              <div className="relative w-full aspect-[4/5] mb-6 overflow-hidden rounded-[16px]">
                <SafeImage
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-[22px] md:text-[28px] font-serif font-semibold text-[#241F1C] mb-1">{expert.name}</h3>
              <p className="text-[11px] font-medium uppercase tracking-widest text-brand-accent/90 mb-2 mt-1">
                {expert.role}
              </p>
              <p className="text-[14px] font-medium text-brand-text-muted mb-4 block">{expert.experience}</p>
              <p className="text-brand-text-muted font-light text-[15px] mb-8 leading-[1.8] flex-grow px-2">
                {expert.bio}
              </p>
              <a
                href="#booking"
                className="w-full mt-auto inline-flex justify-center items-center text-sm font-medium border border-brand-accent text-brand-accent px-4 py-2.5 rounded-[12px] hover:bg-brand-accent hover:text-white transition-colors duration-300 tracking-wide uppercase"
              >
                Book With Me
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
