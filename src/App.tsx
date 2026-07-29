/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Bridal from './components/Bridal';
import Experts from './components/Experts';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Pricing />
        <Gallery />
        <Bridal />
        <Experts />
        <Testimonials />
        <Booking />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
