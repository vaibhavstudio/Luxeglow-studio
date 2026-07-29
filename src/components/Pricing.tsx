import React from 'react';
import { motion } from 'motion/react';
import { PRICING } from '../data';

export default function Pricing() {
  const categories = [
    { id: 'hair', label: 'Hair' },
    { id: 'beauty', label: 'Beauty' },
    { id: 'bridal', label: 'Bridal' },
    { id: 'spa', label: 'Spa' }
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-brand-black mb-4"
          >
            Service Menu
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-brand-text-muted font-light max-w-2xl mx-auto"
          >
            Transparent pricing for our luxury treatments. Final pricing may vary depending on consultation, hair length, treatment type or customization.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              className="bg-white p-6 md:p-10 rounded-[20px] shadow-sm border border-brand-border"
            >
              <h3 className="text-[24px] md:text-3xl font-serif text-brand-black mb-8 pb-4 border-b border-brand-border">
                {category.label}
              </h3>
              <ul className="space-y-6">
                {PRICING[category.id as keyof typeof PRICING].map((item, idx) => (
                  <li key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between group gap-4">
                    <div className="flex-grow">
                      <h4 className="text-[16px] md:text-lg font-medium text-brand-text group-hover:text-brand-accent transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-[14px] text-brand-text-muted font-light mt-1">{item.duration}</p>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t sm:border-t-0 border-brand-border/30 pt-3 sm:pt-0">
                      <span className="font-serif text-[18px] text-brand-text whitespace-nowrap">{item.price}</span>
                      <a
                        href="#booking"
                        className="inline-flex justify-center items-center text-[13px] font-medium uppercase tracking-widest text-brand-accent border border-brand-accent px-4 py-2 rounded-[12px] hover:bg-brand-accent hover:text-white transition-colors duration-300 whitespace-nowrap"
                      >
                        Book
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
