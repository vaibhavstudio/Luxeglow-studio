import hairColourImg from './assets/images/hair_colouring_1784436001178.jpg';
import skincareImg from './assets/images/skincare_facial_1784436018588.jpg';
import nailArtImg from './assets/images/manicure_nail_art_1784436033071.jpg';
import aanyaImg from './assets/images/stylist_portrait_1784436061624.jpg';
import hairstylingImg from './assets/images/hairstyling_1784436082000.jpg';
import salonInteriorImg from './assets/images/salon_interior_1784436099909.jpg';
import indianBrideImg from './assets/images/indian_bride_1784436047233.jpg';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Experts', href: '#experts' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES = [
  {
    id: 'hair-styling',
    name: 'Hair Styling',
    description: 'Precision cuts, styling and transformations.',
    price: 'From ₹1,500',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hair-colour',
    name: 'Hair Colour',
    description: 'Premium colouring, highlights and balayage services.',
    price: 'From ₹3,500',
    image: hairColourImg
  },
  {
    id: 'bridal-makeup',
    name: 'Bridal Makeup',
    description: 'Luxury bridal looks tailored to your personality.',
    price: 'From ₹15,000',
    image: indianBrideImg
  },
  {
    id: 'skincare',
    name: 'Skincare',
    description: 'Professional facial and skin treatments.',
    price: 'From ₹2,000',
    image: skincareImg
  },
  {
    id: 'spa-massage',
    name: 'Spa & Massage',
    description: 'Relaxation and rejuvenation therapies.',
    price: 'From ₹2,500',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'nail-art',
    name: 'Nail Art',
    description: 'Creative nail styling using premium products.',
    price: 'From ₹1,000',
    image: nailArtImg
  }
];

export const EXPERTS = [
  {
    id: 1,
    name: 'Aanya Sharma',
    role: 'Lead Hair Stylist',
    experience: '12 Years Experience',
    bio: 'Specializing in advanced balayage and precision cuts, Aanya brings international styling techniques to LuxeGlow.',
    image: aanyaImg
  },
  {
    id: 2,
    name: 'Priya Desai',
    role: 'Bridal Makeup Director',
    experience: '10 Years Experience',
    bio: 'Renowned for her flawless and natural bridal looks, Priya ensures every bride feels radiant on her special day.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    name: 'Meera Patel',
    role: 'Skincare Specialist',
    experience: '8 Years Experience',
    bio: 'With a deep understanding of dermatology, Meera creates personalized skincare routines for glowing results.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    name: 'Kavita Singh',
    role: 'Wellness & Spa Expert',
    experience: '15 Years Experience',
    bio: 'Kavita’s holistic approach to wellness provides clients with deeply restorative and relaxing spa experiences.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Ananya Verma',
    service: 'Bridal Makeup',
    rating: 5,
    text: 'My bridal makeup exceeded every expectation. The team understood exactly what I wanted and made me feel so comfortable and beautiful.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 2,
    name: 'Neha Kapoor',
    service: 'Hair Styling & Spa',
    rating: 5,
    text: 'Amazing service, professional staff and a luxurious experience from start to finish. My hair has never looked better.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 3,
    name: 'Riya Gupta',
    service: 'Skincare Treatment',
    rating: 5,
    text: 'The ambience, hygiene and attention to detail were absolutely incredible. I felt completely pampered and my skin is glowing.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
  }
];

export const FAQS = [
  {
    question: 'Do I need to book in advance?',
    answer: 'While we do accommodate walk-ins when possible, we highly recommend booking in advance to ensure your preferred time and specialist are available, especially for bridal and long-duration services.'
  },
  {
    question: 'Which beauty products do you use?',
    answer: 'We exclusively use premium, globally recognized brands known for their efficacy and safety, including Oribe, Kerastase, MAC, Charlotte Tilbury, and Dermalogica.'
  },
  {
    question: 'Do you offer bridal trials?',
    answer: 'Yes, we strongly encourage bridal trials. This allows our makeup artists to understand your skin, preferences, and wedding theme to craft the perfect look before your big day.'
  },
  {
    question: 'Can I reschedule my appointment?',
    answer: 'Absolutely. We request that you provide at least 24 hours notice for rescheduling to allow us to offer the slot to other clients.'
  },
  {
    question: 'Are consultation charges applicable?',
    answer: 'Basic consultations are complimentary. In-depth bridal or advanced skincare consultations may carry a nominal fee, which is fully redeemable against the booked service.'
  },
  {
    question: 'Do you offer customized packages?',
    answer: 'Yes, we offer tailored beauty, spa, and bridal packages. Our experts will curate a combination of services to perfectly match your specific needs and timeline.'
  }
];

export const PRICING = {
  hair: [
    { name: 'Women\'s Haircut', duration: '60 mins', price: 'From ₹1,500' },
    { name: 'Blow Dry & Styling', duration: '45 mins', price: 'From ₹800' },
    { name: 'Global Hair Colour', duration: '120 mins', price: 'From ₹3,500' },
    { name: 'Balayage / Ombre', duration: '180 mins', price: 'From ₹5,500' },
    { name: 'Keratin Treatment', duration: '150 mins', price: 'From ₹6,000' }
  ],
  beauty: [
    { name: 'Signature Facial', duration: '60 mins', price: 'From ₹2,500' },
    { name: 'Advanced Peels', duration: '45 mins', price: 'From ₹3,000' },
    { name: 'Classic Manicure', duration: '45 mins', price: 'From ₹800' },
    { name: 'Luxury Pedicure', duration: '60 mins', price: 'From ₹1,200' },
    { name: 'Threading & Waxing', duration: 'Varies', price: 'From ₹200' }
  ],
  bridal: [
    { name: 'Bridal Makeup', duration: '180 mins', price: 'From ₹15,000' },
    { name: 'Pre-Bridal Package', duration: '2 Days', price: 'From ₹12,000' },
    { name: 'Engagement Makeup', duration: '120 mins', price: 'From ₹8,000' },
    { name: 'Party Makeup', duration: '90 mins', price: 'From ₹4,500' },
    { name: 'Bridal Hair Styling', duration: '60 mins', price: 'From ₹3,500' }
  ],
  spa: [
    { name: 'Swedish Massage', duration: '60 mins', price: 'From ₹2,500' },
    { name: 'Deep Tissue Massage', duration: '60 mins', price: 'From ₹3,000' },
    { name: 'Aromatherapy', duration: '90 mins', price: 'From ₹3,500' },
    { name: 'Body Polish', duration: '45 mins', price: 'From ₹2,000' },
    { name: 'Head & Shoulder Spa', duration: '30 mins', price: 'From ₹1,000' }
  ]
};

export const GALLERY = [
  hairstylingImg,
  hairColourImg,
  salonInteriorImg,
  indianBrideImg,
  skincareImg,
  nailArtImg
];

