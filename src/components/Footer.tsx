import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-text text-brand-ivory pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-serif tracking-wide mb-6">
              LuxeGlow Studio
            </h2>

            <p className="text-brand-ivory/70 font-light leading-relaxed mb-8 pr-4">
              Luxury beauty experiences designed with elegance, precision and
              personalized care.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LuxeGlow Studio on Instagram"
                className="w-10 h-10 rounded-full border border-brand-ivory/20 flex items-center justify-center text-brand-ivory/70 hover:text-white hover:border-brand-accent transition-colors hover:bg-brand-accent"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LuxeGlow Studio on Facebook"
                className="w-10 h-10 rounded-full border border-brand-ivory/20 flex items-center justify-center text-brand-ivory/70 hover:text-white hover:border-brand-accent transition-colors hover:bg-brand-accent"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-widest text-brand-accent-light mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {['Home', 'About', 'Gallery', 'Experts', 'Reviews', 'Contact'].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-brand-ivory/70 hover:text-brand-accent-light transition-colors font-light"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-widest text-brand-accent-light mb-6">
              Services
            </h3>

            <ul className="space-y-4">
              {[
                'Hair Styling',
                'Hair Colour',
                'Bridal Makeup',
                'Skincare',
                'Spa & Massage',
                'Nail Art',
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#services"
                    className="text-brand-ivory/70 hover:text-brand-accent-light transition-colors font-light"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-widest text-brand-accent-light mb-6">
              Contact Us
            </h3>

            <address className="not-italic space-y-4 text-brand-ivory/70 font-light">
              <p>
                Aurora Plaza,
                <br />
                Dream Avenue,
                <br />
                Emerald District,
                <br />
                Nova City,
                <br />
                PIN: 000000
              </p>

              <p>+00 0000 000000</p>
              <p>demo@luxeglow.studio</p>

              <p className="pt-2 text-xs text-brand-ivory/50 italic">
                Demo Contact Information — For Portfolio Demonstration Only
              </p>
            </address>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-ivory/10 flex flex-col md:flex-row items-center justify-between text-xs text-brand-ivory/40 font-light">
          <p className="mb-4 md:mb-0">
            © 2026 LuxeGlow Studio. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <span className="text-brand-ivory/40 cursor-default select-none hover:text-brand-ivory transition-colors">
              Privacy Policy
            </span>

            <span className="text-brand-ivory/40 cursor-default select-none hover:text-brand-ivory transition-colors">
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}