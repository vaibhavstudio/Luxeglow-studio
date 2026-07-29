import React from 'react';
import { motion } from 'motion/react';
import { Award, Gem, HeartHandshake, Sparkles } from 'lucide-react';

const BENEFITS = [
  {
    icon: Award,
    title: 'Certified Experts',
    desc: 'Experienced professionals committed to exceptional results.'
  },
  {
    icon: Gem,
    title: 'Premium Products',
    desc: 'Trusted and high-quality beauty and skincare products.'
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Care',
    desc: 'Every service is tailored to the client’s needs and style.'
  },
  {
    icon: Sparkles,
    title: 'Relaxing Experience',
    desc: 'A calm, hygienic and luxurious environment.'
  }
];

const METRICS = [
  { value: '10+', label: 'Years of Experience' },
  { value: '2,000+', label: 'Happy Clients' },
  { value: '25+', label: 'Premium Services' },
  { value: '4.9', label: 'Average Rating' }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-white text-brand-text">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full border border-brand-accent/20 flex items-center justify-center mb-6 text-brand-accent bg-brand-soft/50">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif mb-3 text-brand-text">{benefit.title}</h3>
                <p className="text-brand-text-muted font-light text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-brand-border mb-20" />

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {METRICS.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-serif text-brand-accent mb-2">
                {metric.value}
              </div>
              <div className="text-sm font-medium uppercase tracking-widest text-brand-text-muted">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
