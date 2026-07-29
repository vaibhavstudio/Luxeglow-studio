import React from 'react';
import { motion } from 'motion/react';
import { SafeImage } from './ui/SafeImage';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[600px] w-full"
        >
          <SafeImage
            src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&q=80&w=800"
            alt="Luxury Salon Interior"
            className="w-full h-full object-cover rounded-md shadow-xl"
          />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-brand-accent -z-10" />
        </motion.div>

        {/* Content Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-brand-black mb-6">
            Beauty, Elevated.
          </h2>
          <p className="text-lg text-brand-text-muted mb-8 leading-relaxed font-light">
            At LuxeGlow Studio, beauty is more than a service—it is an experience. Our expert stylists, beauty professionals and wellness specialists are dedicated to delivering personalized care in a luxurious environment where every visit leaves you feeling confident, refreshed and radiant.
          </p>

          <ul className="space-y-4 mb-10">
            {['Expert Professionals', 'Premium Products', 'Personalized Care'].map((item) => (
              <li key={item} className="flex items-center text-brand-text font-medium">
                <span className="w-1.5 h-1.5 bg-brand-accent rounded-full mr-3" />
                {item}
              </li>
            ))}
          </ul>

          <a
            href="#gallery"
            className="inline-flex justify-center items-center bg-transparent border border-brand-black text-brand-black px-8 py-4 rounded-[12px] font-medium hover:bg-brand-black hover:text-white transition-colors duration-300"
          >
            Discover Our Story
          </a>
        </motion.div>
      </div>
    </section>
  );
}
