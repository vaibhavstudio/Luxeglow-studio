import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../data';
import { SafeImage } from './ui/SafeImage';
import bridalFallbackImg from '../assets/images/bridal_fallback_1784437384323.jpg';

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-brand-alt">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-brand-black mb-4"
          >
            Signature Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-brand-text-muted font-light"
          >
            Thoughtfully designed beauty, hair and wellness experiences tailored to your individual style.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col h-full bg-white rounded-[20px] overflow-hidden border border-brand-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 hover:border-brand-accent/50"
            >
              <div className="relative h-[220px] md:h-[260px] overflow-hidden">
                <SafeImage
                  src={service.image}
                  alt={service.name}
                  fallbackSrc={service.id === 'bridal-makeup' ? bridalFallbackImg : undefined}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-[20px] md:text-[22px] font-serif text-brand-text mb-3">{service.name}</h3>
                <p className="text-[15px] text-brand-text-muted font-light mb-8 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-5 border-t border-brand-border/50">
                  <span className="font-medium text-brand-accent text-lg">{service.price}</span>
                  <a
                    href="#booking"
                    className="inline-flex justify-center items-center text-sm font-medium tracking-wide text-brand-accent border border-brand-accent px-5 py-2 rounded-[10px] hover:bg-brand-accent hover:text-white transition-colors duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
