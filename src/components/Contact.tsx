import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-brand-text mb-4"
          >
            Visit LuxeGlow Studio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-brand-text-muted font-light max-w-2xl mx-auto"
          >
            We would love to welcome you. Visit our studio or contact us to book your next appointment.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            <div className="flex flex-col">
              <div className="w-12 h-12 bg-brand-accent/10 text-brand-accent rounded-full flex items-center justify-center mb-6">
                <MapPin size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-serif mb-2 text-brand-text">Location</h3>
              <p className="text-brand-text-muted font-light leading-relaxed">
                Aurora Plaza,<br />
                Dream Avenue,<br />
                Emerald District,<br />
                Nova City,<br />
                PIN: 000000
              </p>
            </div>

            <div className="flex flex-col">
              <div className="w-12 h-12 bg-brand-accent/10 text-brand-accent rounded-full flex items-center justify-center mb-6">
                <Clock size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-serif mb-2 text-brand-text">Opening Hours</h3>
              <p className="text-brand-text-muted font-light leading-relaxed">
                Tue - Sun: 10:00 AM - 8:00 PM<br />
                Monday: Closed
              </p>
            </div>

            <div className="flex flex-col">
              <div className="w-12 h-12 bg-brand-accent/10 text-brand-accent rounded-full flex items-center justify-center mb-6">
                <Phone size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-serif mb-2 text-brand-text">Contact</h3>
              <p className="text-brand-text-muted font-light leading-relaxed">
                +00 0000 000000<br />
                +00 0000 000001
              </p>
            </div>

            <div className="flex flex-col">
              <div className="w-12 h-12 bg-brand-accent/10 text-brand-accent rounded-full flex items-center justify-center mb-6">
                <Mail size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-serif mb-2 text-brand-text">Email</h3>
              <p className="text-brand-text-muted font-light leading-relaxed">
                demo@luxeglow.studio
              </p>
            </div>
            
            <div className="col-span-1 sm:col-span-2 pt-6">
              <button
                type="button"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center text-brand-accent font-medium hover:text-brand-text transition-colors uppercase tracking-widest text-sm cursor-default"
              >
                Get Directions <ArrowRight size={16} className="ml-2" />
              </button>
              <p className="mt-4 text-xs text-brand-text-muted font-light italic">
                Demo Contact Information — For Portfolio Demonstration Only
              </p>
            </div>
          </motion.div>

          {/* Map Placeholder Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-80 lg:h-full min-h-[400px] bg-brand-ivory rounded-[20px] overflow-hidden relative border border-brand-border shadow-sm flex flex-col justify-center items-center p-8 text-center"
          >
            {/* Minimal Luxury Abstract Grid Pattern */}
            <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#B97862_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative z-10 flex flex-col items-center max-w-sm">
              <div className="w-16 h-16 bg-brand-accent/10 text-brand-accent rounded-full flex items-center justify-center mb-6 shadow-sm border border-brand-accent/20">
                <MapPin size={32} strokeWidth={1.5} />
              </div>

              <span className="px-3.5 py-1 bg-brand-accent/10 text-brand-accent text-xs font-medium tracking-widest uppercase rounded-full mb-4 border border-brand-accent/20">
                Fictional Portfolio Demonstration
              </span>

              <h3 className="text-2xl font-serif text-brand-text mb-3">
                Demo Location
              </h3>

              <p className="text-brand-text-muted font-light leading-relaxed mb-6">
                Aurora Plaza<br />
                Dream Avenue<br />
                Emerald District<br />
                Nova City<br />
                PIN: 000000
              </p>

              <div className="w-12 h-[1px] bg-brand-border mb-4" />

              <p className="text-xs text-brand-text-muted font-light italic">
                This location is used only for portfolio and UI demonstration purposes.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
