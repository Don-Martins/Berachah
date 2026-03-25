/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  MessageCircle, 
  ChevronRight, 
  Star, 
  ShieldCheck, 
  Truck, 
  BadgePercent, 
  Instagram, 
  Facebook, 
  Twitter, 
  Menu, 
  X,
  Clock,
  MapPin,
  Phone
} from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/2348172794187?text=Hello%20I%20want%20to%20order";

const COLLECTIONS = [
  {
    title: "Men Collection",
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=800&auto=format&fit=crop",
    description: "Sharp, sophisticated, and timeless."
  },
  {
    title: "Women Collection",
    image: "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?q=80&w=800&auto=format&fit=crop",
    description: "Elegant designs for the modern woman."
  },
  {
    title: "Kids Collection",
    image: "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?q=80&w=800&auto=format&fit=crop",
    description: "Stylish and comfortable for the little ones."
  },
  {
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=800&auto=format&fit=crop",
    description: "The perfect finishing touch."
  }
];

const PRODUCTS = [
  { id: 1, name: "Premium Agbada Set", price: "₦45,000", image: "https://images.unsplash.com/photo-1560457079-9a6532ccb118?q=80&w=600&auto=format&fit=crop" },
  { id: 2, name: "Silk Evening Gown", price: "₦35,000", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=600&auto=format&fit=crop" },
  { id: 3, name: "Casual Linen Shirt", price: "₦15,000", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600&auto=format&fit=crop" },
  { id: 4, name: "Traditional Lace Wrapper", price: "₦55,000", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600&auto=format&fit=crop" },
  { id: 5, name: "Designer Leather Shoes", price: "₦25,000", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600&auto=format&fit=crop" },
  { id: 6, name: "Luxury Wristwatch", price: "₦65,000", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=600&auto=format&fit=crop" },
];

const TESTIMONIALS = [
  { name: "Chidi Okafor", text: "Amazing quality and affordable! The fit is perfect.", role: "Businessman" },
  { name: "Amina Bello", text: "Best boutique in Abuja! Their customer service is top-notch.", role: "Fashion Blogger" },
  { name: "Tunde Williams", text: "I ordered from Lagos and got it in 2 days. Impressed!", role: "Architect" },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 45, seconds: 30 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Shop', href: '#shop' },
    { name: 'About', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-luxury-black overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-display font-bold gold-text tracking-widest">
            BERACHAH
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-12">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xs uppercase tracking-[0.3em] hover:text-gold transition-colors font-semibold"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a 
              href="#shop"
              className="text-xs uppercase tracking-[0.3em] text-gold border-b border-gold/30 pb-1 hover:border-gold transition-all"
            >
              Explore Shop
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gold" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full glass md:hidden py-12 px-6 flex flex-col space-y-8 items-center"
            >
              {navLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg uppercase tracking-[0.4em] hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1530131272421-260128061a69?q=80&w=1920&auto=format&fit=crop" 
            alt="Luxury Fashion Model" 
            className="w-full h-full object-cover opacity-40 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/80 via-luxury-black/20 to-luxury-black"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-9xl font-display font-bold mb-8 leading-[0.9] tracking-tighter">
              Defining <br />
              <span className="italic gold-text">Modern Elegance</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Discover a curated collection of premium outfits designed for those who command attention and value timeless quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="#shop"
                className="px-12 py-5 gold-gradient text-luxury-black font-bold uppercase tracking-[0.2em] text-sm hover:tracking-[0.3em] transition-all duration-300"
              >
                View Collections
              </a>
              <a 
                href="#contact"
                className="px-12 py-5 glass border border-white/10 font-bold uppercase tracking-[0.2em] text-sm hover:bg-white/5 transition-all"
              >
                Visit Boutique
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-gold rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-white/5 bg-white/2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-70">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-gold" />
              <span className="text-sm uppercase tracking-widest font-medium">Premium Quality</span>
            </div>
            <div className="flex items-center gap-3">
              <BadgePercent className="text-gold" />
              <span className="text-sm uppercase tracking-widest font-medium">Affordable Luxury</span>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="text-gold" />
              <span className="text-sm uppercase tracking-widest font-medium">Fast Nationwide Delivery</span>
            </div>
            <div className="flex items-center gap-3">
              <Star className="text-gold" />
              <span className="text-sm uppercase tracking-widest font-medium">100+ Happy Customers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section id="shop" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Featured Collections</h2>
            <div className="w-24 h-1 gold-gradient mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COLLECTIONS.map((item, index) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[500px] overflow-hidden cursor-pointer"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <h3 className="text-2xl font-display font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                  <a 
                    href="#shop"
                    className="inline-flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-xs group-hover:gap-4 transition-all"
                  >
                    View Collection <ChevronRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 bg-white/2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Why Choose <span className="gold-text">Berachah Boutique?</span></h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center flex-shrink-0 text-gold">
                    <Star size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Premium Quality Materials</h4>
                    <p className="text-gray-400 font-light">We source only the finest fabrics to ensure every outfit feels as good as it looks.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center flex-shrink-0 text-gold">
                    <BadgePercent size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Affordable Prices</h4>
                    <p className="text-gray-400 font-light">Luxury shouldn't break the bank. We offer premium fashion at competitive rates.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center flex-shrink-0 text-gold">
                    <ShoppingBag size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Latest Fashion Trends</h4>
                    <p className="text-gray-400 font-light">Stay ahead of the curve with our curated selection of the season's hottest styles.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center flex-shrink-0 text-gold">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Excellent Customer Service</h4>
                    <p className="text-gray-400 font-light">Our team is always ready to assist you with your orders and fashion inquiries.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1572493530841-894ee5b70297?q=80&w=800&auto=format&fit=crop" 
                  alt="Fashion Detail" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 glass p-8 rounded-2xl hidden md:block max-w-xs">
                <p className="italic text-lg mb-4">"Fashion is what you buy, style is what you do with it."</p>
                <p className="text-gold font-bold">— Berachah Boutique</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">New Arrivals</h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-light">Explore our latest arrivals and find the perfect outfit for your next occasion.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {PRODUCTS.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-6">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-bold mb-1">{product.name}</h4>
                    <p className="text-gold font-semibold">{product.price}</p>
                  </div>
                  <button className="text-white/50 hover:text-gold transition-colors">
                    <ShoppingBag size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white/2 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 gold-gradient mx-auto"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="glass p-10 rounded-2xl max-w-md flex-1 min-w-[300px]"
              >
                <div className="flex gap-1 text-gold mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#D4AF37" />)}
                </div>
                <p className="text-lg text-gray-300 italic mb-8">"{t.text}"</p>
                <div>
                  <h5 className="font-bold text-lg">{t.name}</h5>
                  <p className="text-gold text-sm uppercase tracking-widest">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-20 gold-gradient">
        <div className="max-w-7xl mx-auto px-6 text-center text-luxury-black">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 uppercase tracking-tighter">Limited Stock Available</h2>
          <p className="text-xl mb-10 font-medium opacity-80">Grab your favorites before they're gone! Flash sale ends in:</p>
          
          <div className="flex justify-center gap-4 md:gap-10">
            <div className="flex flex-col">
              <span className="text-5xl md:text-7xl font-display font-bold">{timeLeft.hours.toString().padStart(2, '0')}</span>
              <span className="text-xs uppercase tracking-widest font-bold">Hours</span>
            </div>
            <span className="text-5xl md:text-7xl font-display font-bold">:</span>
            <div className="flex flex-col">
              <span className="text-5xl md:text-7xl font-display font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</span>
              <span className="text-xs uppercase tracking-widest font-bold">Minutes</span>
            </div>
            <span className="text-5xl md:text-7xl font-display font-bold">:</span>
            <div className="flex flex-col">
              <span className="text-5xl md:text-7xl font-display font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</span>
              <span className="text-xs uppercase tracking-widest font-bold">Seconds</span>
            </div>
          </div>
        </div>
      </section>

      {/* Location + Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-display font-bold mb-8">Visit Our <span className="gold-text">Boutique</span></h2>
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <MapPin className="text-gold mt-1" />
                  <div>
                    <h5 className="font-bold text-lg">Address</h5>
                    <p className="text-gray-400">Suite 102, Luxury Plaza, Wuse II, Abuja, Nigeria</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-gold mt-1" />
                  <div>
                    <h5 className="font-bold text-lg">Phone</h5>
                    <p className="text-gray-400">+234 817 279 4187</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-gold mt-1" />
                  <div>
                    <h5 className="font-bold text-lg">Business Hours</h5>
                    <p className="text-gray-400">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-400">Sun: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-gold hover:text-luxury-black transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-gold hover:text-luxury-black transition-all">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-gold hover:text-luxury-black transition-all">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div className="h-[400px] rounded-2xl overflow-hidden glass">
              {/* Mock Map Embed */}
              <div className="w-full h-full bg-white/5 flex flex-col items-center justify-center p-10 text-center">
                <MapPin size={48} className="text-gold mb-4" />
                <h4 className="text-2xl font-display font-bold mb-2">Find us in Abuja</h4>
                <p className="text-gray-400 mb-6">Wuse II, Abuja's Fashion Hub</p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-luxury-black transition-all uppercase tracking-widest text-sm font-bold"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1920&auto=format&fit=crop" 
            alt="Fashion Background" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-luxury-black/80"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-7xl font-display font-bold mb-8">Ready to Upgrade <br />Your Style?</h2>
          <p className="text-xl text-gray-300 mb-12 font-light max-w-2xl mx-auto">Join our exclusive list of stylish clients and experience luxury like never before.</p>
          <a 
            href="#shop"
            className="inline-flex items-center gap-3 px-12 py-5 gold-gradient text-luxury-black font-bold uppercase tracking-[0.3em] text-sm hover:tracking-[0.4em] transition-all"
          >
            Explore Our Shop
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <a href="#" className="text-3xl font-display font-bold gold-text tracking-widest mb-6 block">
                BERACHAH
              </a>
              <p className="text-gray-500 max-w-sm font-light">
                Berachah Boutique is a premium Nigerian fashion brand dedicated to providing luxury outfits that speak confidence and elegance.
              </p>
            </div>
            
            <div>
              <h5 className="font-bold uppercase tracking-widest mb-6 text-sm">Quick Links</h5>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-gold transition-colors">Home</a></li>
                <li><a href="#shop" className="hover:text-gold transition-colors">Shop Collections</a></li>
                <li><a href="#why-us" className="hover:text-gold transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold uppercase tracking-widest mb-6 text-sm">Contact Us</h5>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li>Wuse II, Abuja, Nigeria</li>
                <li>+234 817 279 4187</li>
                <li>info@berachahboutique.com</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4 text-gray-600 text-xs uppercase tracking-widest">
            <p>© {new Date().getFullYear()} Berachah Boutique. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a 
        href={WHATSAPP_URL}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/20 text-white"
      >
        <MessageCircle size={32} fill="currentColor" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full animate-bounce">
          1
        </span>
      </motion.a>
    </div>
  );
}
