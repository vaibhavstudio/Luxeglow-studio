import React from 'react';
import { motion } from 'motion/react';
import { SafeImage } from './ui/SafeImage';
import indianBrideImg from '../assets/images/indian_bride_1784436047233.jpg';

export default function Bridal() {
  return (
    <section className="bg-brand-soft overflow-hidden">
      <div className="flex flex-col lg:flex-row">

        {/* Content Side */}
        <div className="w-full lg:w-1/2 px-6 py-24 lg:py-32 flex flex-col justify-center items-start lg:pl-[10%] lg:pr-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-brand-accent font-medium tracking-widest uppercase text-sm mb-4"
          >
            LuxeGlow Bridal
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-brand-text mb-6 leading-tight"
          >
            Your Dream Bridal Look Starts Here
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-brand-text-muted font-light mb-8 leading-relaxed"
          >
            From pre-wedding consultations to your final bridal transformation,
            our beauty experts ensure you look stunning on your most memorable day.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-3 mb-10 w-full max-w-md"
          >
            {[
              'Makeup consultation',
              'Bridal hair styling',
              'Draping assistance',
              'Trial session',
              'Personalized beauty planning',
            ].map((item) => (
              <li
                key={item}
                className="flex items-center text-brand-text font-medium"
              >
                <span className="w-1.5 h-1.5 bg-brand-accent rounded-full mr-3" />
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#booking"
              className="inline-flex justify-center items-center bg-brand-accent text-white px-8 py-4 rounded-[12px] font-medium hover:brightness-95 hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Bridal Consultation
            </a>

            <a
              href="#services"
              className="inline-flex justify-center items-center bg-transparent border border-brand-text text-brand-text px-8 py-4 rounded-[12px] font-medium hover:bg-brand-text hover:text-white transition-colors duration-300"
            >
              Explore Bridal Packages
            </a>
          </motion.div>
        </div>

        {/* Image Side */}
        <div className="w-full lg:w-1/2 relative overflow-hidden bg-brand-soft">
          <SafeImage
            src={indianBrideImg}
            alt="Beautiful Indian bride with professional bridal makeup"
            className="block w-full h-auto object-contain object-center lg:absolute lg:inset-0 lg:w-full lg:h-full lg:object-cover lg:object-[65%_center]"
          />
        </div>

      </div>
    </section>
  );
}