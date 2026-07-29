import React from 'react';
import { motion } from 'motion/react';
import { GALLERY } from '../data';
import { SafeImage } from './ui/SafeImage';

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-brand-black mb-4"
          >
            Our Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-brand-text-muted font-light max-w-2xl mx-auto"
          >
            A glimpse into the transformations and luxurious experiences crafted at LuxeGlow Studio.
          </motion.p>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {GALLERY.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              className="relative overflow-hidden rounded-[16px] group break-inside-avoid shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <SafeImage
                src={image}
                alt={`LuxeGlow Studio Gallery ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/10 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
