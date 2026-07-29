import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../data';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (name: string, value: string) => {
    if (!value) return 'This field is required';
    if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
    if (name === 'phone' && !/^[0-9]{10}$/.test(value)) return 'Please enter a valid 10-digit phone number';
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validate(name, value) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validate(name, value) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: Record<string, string> = {};
    let isValid = true;
    Object.keys(formData).forEach(key => {
      // Don't require message
      if (key !== 'message') {
        const error = validate(key, formData[key as keyof typeof formData]);
        if (error) {
          newErrors[key] = error;
          isValid = false;
        }
      }
    });

    setErrors(newErrors);
    
    // Mark all as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {} as Record<string, boolean>);
    setTouched(allTouched);

    if (!isValid) return;

    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        date: '',
        time: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <section id="booking" className="py-20 md:py-28 bg-brand-alt relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:sticky lg:top-32"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-brand-text mb-6 leading-tight">
            Book Your Luxury Beauty Experience
          </h2>
          <p className="text-lg text-brand-text-muted font-light mb-10 leading-relaxed max-w-md">
            Schedule your appointment today and let our experts create a personalized beauty experience just for you.
          </p>
          
          <div className="space-y-6 mb-10">
            <div className="flex items-center text-brand-text">
              <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent mr-4">
                <span className="font-serif italic text-lg">W</span>
              </div>
              <div>
                <p className="text-sm text-brand-text-muted uppercase tracking-widest font-medium mb-1">WhatsApp Booking</p>
                <a
                  href="https://wa.me/000000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium hover:text-brand-accent transition-colors"
                >
                  +00 0000 000000
                </a>
              </div>
            </div>
            
            <div className="flex items-center text-brand-text">
              <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent mr-4">
                <span className="font-serif italic text-lg">T</span>
              </div>
              <div>
                <p className="text-sm text-brand-text-muted uppercase tracking-widest font-medium mb-1">Estimated Response</p>
                <p className="text-lg font-medium">Within 2 Hours</p>
              </div>
            </div>
          </div>
          
          <a
            href="https://wa.me/000000000000?text=Hello%20LuxeGlow%20Studio,%20I%20would%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center bg-[#25D366] text-white px-8 py-3 rounded-[12px] font-medium hover:bg-[#1DA851] transition-colors shadow-lg shadow-[#25D366]/20"
          >
            Chat on WhatsApp
          </a>

          <p className="mt-6 text-xs text-brand-text-muted font-light italic">
            Demo Contact Information — For Portfolio Demonstration Only
          </p>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-12 rounded-[20px] shadow-sm border border-brand-border"
        >
          {status === 'success' ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-brand-accent/10 text-brand-accent rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                ✓
              </div>
              <h3 className="text-2xl font-serif text-brand-text mb-4">Request Received</h3>
              <p className="text-brand-text-muted font-light">
                Thank you for choosing LuxeGlow Studio. Our team will contact you shortly to confirm your appointment.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[15px] font-medium text-brand-text mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-5 py-3.5 bg-brand-ivory border ${errors.name && touched.name ? 'border-[#B97862]/60 focus:ring-[#B97862]/30' : 'border-brand-border focus:ring-brand-accent/50 focus:border-brand-accent'} rounded-[12px] focus:outline-none focus:ring-2 transition-all text-[15px]`}
                  />
                  {errors.name && touched.name && <p className="mt-2 text-sm text-[#B97862]">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[15px] font-medium text-brand-text mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-5 py-3.5 bg-brand-ivory border ${errors.phone && touched.phone ? 'border-[#B97862]/60 focus:ring-[#B97862]/30' : 'border-brand-border focus:ring-brand-accent/50 focus:border-brand-accent'} rounded-[12px] focus:outline-none focus:ring-2 transition-all text-[15px]`}
                  />
                  {errors.phone && touched.phone && <p className="mt-2 text-sm text-[#B97862]">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-[15px] font-medium text-brand-text mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-5 py-3.5 bg-brand-ivory border ${errors.email && touched.email ? 'border-[#B97862]/60 focus:ring-[#B97862]/30' : 'border-brand-border focus:ring-brand-accent/50 focus:border-brand-accent'} rounded-[12px] focus:outline-none focus:ring-2 transition-all text-[15px]`}
                />
                {errors.email && touched.email && <p className="mt-2 text-sm text-[#B97862]">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="service" className="block text-[15px] font-medium text-brand-text mb-2">
                  Select Service *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-5 py-3.5 bg-brand-ivory border ${errors.service && touched.service ? 'border-[#B97862]/60 focus:ring-[#B97862]/30' : 'border-brand-border focus:ring-brand-accent/50 focus:border-brand-accent'} rounded-[12px] focus:outline-none focus:ring-2 transition-all appearance-none text-[15px]`}
                >
                  <option value="" disabled>Choose a service</option>
                  {SERVICES.map(s => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                  <option value="other">Other / Not Sure</option>
                </select>
                {errors.service && touched.service && <p className="mt-2 text-sm text-[#B97862]">{errors.service}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-[15px] font-medium text-brand-text mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-5 py-3.5 bg-brand-ivory border ${errors.date && touched.date ? 'border-[#B97862]/60 focus:ring-[#B97862]/30' : 'border-brand-border focus:ring-brand-accent/50 focus:border-brand-accent'} rounded-[12px] focus:outline-none focus:ring-2 transition-all text-[15px]`}
                  />
                  {errors.date && touched.date && <p className="mt-2 text-sm text-[#B97862]">{errors.date}</p>}
                </div>
                <div>
                  <label htmlFor="time" className="block text-[15px] font-medium text-brand-text mb-2">
                    Preferred Time *
                  </label>
                  <select
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-5 py-3.5 bg-brand-ivory border ${errors.time && touched.time ? 'border-[#B97862]/60 focus:ring-[#B97862]/30' : 'border-brand-border focus:ring-brand-accent/50 focus:border-brand-accent'} rounded-[12px] focus:outline-none focus:ring-2 transition-all appearance-none text-[15px]`}
                  >
                    <option value="" disabled>Choose a time</option>
                    <option value="morning">Morning (10 AM - 1 PM)</option>
                    <option value="afternoon">Afternoon (1 PM - 5 PM)</option>
                    <option value="evening">Evening (5 PM - 8 PM)</option>
                  </select>
                  {errors.time && touched.time && <p className="mt-2 text-sm text-[#B97862]">{errors.time}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-[15px] font-medium text-brand-text mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full px-5 py-3.5 bg-brand-ivory border border-brand-border rounded-[12px] focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all resize-none text-[15px]"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-brand-accent text-white font-medium px-8 py-4 rounded-[12px] hover:brightness-95 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Submitting...' : 'Request Appointment'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
