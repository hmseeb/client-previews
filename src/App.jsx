import { Phone, Mail, MapPin, Clock, Star, Menu, X, Shield, Award, ThumbsUp, Users, TreeDeciduous, Scissors, Droplets, Leaf, Flower2, ChevronRight, Quote, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

const BUSINESS = {
  name: "Ezcutz Lawncare",
  phone: "(213) 257-5328",
  phoneLink: "tel:+12132575328",
  address: "1112 S Oxford Ave, Los Angeles, CA 90006",
  city: "Los Angeles",
  state: "CA",
  hours: "Mon-Sun: 7AM - 5PM",
  rating: 4.7,
  reviewCount: 13,
  tagline: "100% Satisfaction Guaranteed",
  description: "Landscaping based out of Los Angeles, CA. We offer 100% satisfaction on all our projects. Our team is dedicated to completing projects on time with the best quality."
};

const SERVICES = [
  { icon: Leaf, title: "Lawn Care", description: "Complete lawn maintenance including mowing, edging, and fertilization for a lush, healthy yard." },
  { icon: TreeDeciduous, title: "Tree Services", description: "Expert tree trimming, removal, palm tree care, and stump grinding services." },
  { icon: Flower2, title: "Landscaping", description: "Full landscape design, installation, and renovation to transform your outdoor space." },
  { icon: Scissors, title: "Hardscaping", description: "Professional concrete work, paving, and hardscape installations." },
  { icon: Droplets, title: "Turf & Sod", description: "Premium turf and sod installation for instant beautiful lawns." },
  { icon: Leaf, title: "Planting", description: "Expert planting services including trees, shrubs, and ornamental gardens." }
];

const TESTIMONIALS = [
  { name: "Eddie Ortiz", text: "His prices were fair, he came out on Sunday first thing and did a fantastic job!", rating: 5 },
  { name: "Roberta Ponce", text: "The quality of service is consistent and leaves the yard looking amazing.", rating: 5 },
  { name: "L Diaz", text: "Great price and wonderful people.", rating: 5 }
];

const GALLERY = [
  "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=600&q=80",
  "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80",
  "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=600&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
  "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=600&q=80",
  "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=600&q=80"
];

function StarRating({ rating, size = 16 }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={size} className={i < Math.floor(rating) ? "fill-harvest text-harvest" : "text-stone"} />
      ))}
    </div>
  );
}

function Header({ scrolled, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-forest-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      {/* Top Bar */}
      <div className={`transition-all duration-300 ${scrolled ? 'h-0 overflow-hidden opacity-0' : 'bg-forest-dark/80 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-sm text-white/90">
          <div className="flex items-center gap-6">
            <a href={BUSINESS.phoneLink} className="flex items-center gap-2 hover:text-harvest transition-colors">
              <Phone size={14} /> {BUSINESS.phone}
            </a>
            <span className="hidden md:flex items-center gap-2">
              <Clock size={14} /> {BUSINESS.hours}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <MapPin size={14} /> Serving {BUSINESS.city}, {BUSINESS.state}
          </div>
        </div>
      </div>
      
      {/* Main Nav */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-harvest rounded-full flex items-center justify-center">
              <Leaf className="text-forest-dark" size={24} />
            </div>
            <div className="text-white">
              <h1 className="text-xl font-bold font-display">{BUSINESS.name}</h1>
              <p className="text-xs text-white/70">Professional Lawn Care</p>
            </div>
          </a>
          
          <div className="hidden lg:flex items-center gap-8">
            {['Services', 'About', 'Gallery', 'Reviews', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-white/90 hover:text-harvest transition-colors font-medium">
                {item}
              </a>
            ))}
          </div>
          
          <div className="hidden lg:flex items-center gap-4">
            <a href={BUSINESS.phoneLink} className="bg-accent hover:bg-accent/90 text-white font-bold px-6 py-3 rounded-lg flex items-center gap-2 transition-all hover:scale-105 shadow-lg">
              <Phone size={18} /> Call Now
            </a>
          </div>
          
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-white p-2">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-forest-dark/95 backdrop-blur-md rounded-xl p-6 animate-fade-in-up">
            {['Services', 'About', 'Gallery', 'Reviews', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="block py-3 text-white/90 hover:text-harvest border-b border-white/10 last:border-0">
                {item}
              </a>
            ))}
            <a href={BUSINESS.phoneLink} className="mt-4 bg-accent text-white font-bold px-6 py-3 rounded-lg flex items-center justify-center gap-2">
              <Phone size={18} /> Call {BUSINESS.phone}
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=1920&q=80" 
          alt="Lawn care" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/95 via-forest-dark/80 to-forest-dark/60" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 lg:py-40">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="flex items-center gap-2 mb-6">
            <StarRating rating={BUSINESS.rating} size={20} />
            <span className="text-white/90 ml-2">{BUSINESS.rating} · {BUSINESS.reviewCount} Google Reviews</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-display leading-tight">
            Los Angeles' Trusted <span className="text-harvest">Lawn Care</span> Experts
          </h1>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl">
            {BUSINESS.tagline}. Professional landscaping, tree services, and lawn maintenance for residential and commercial properties.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="#contact" className="bg-harvest hover:bg-harvest-dark text-forest-dark font-bold px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-xl text-lg">
              Get Free Estimate <ChevronRight size={20} />
            </a>
            <a href={BUSINESS.phoneLink} className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-all border border-white/20 text-lg">
              <Phone size={20} /> {BUSINESS.phone}
            </a>
          </div>
          
          <div className="flex flex-wrap gap-6 text-white/80">
            {["Licensed & Insured", "Free Estimates", "Same-Day Service"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle size={18} className="text-harvest" /> {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const badges = [
    { icon: Shield, text: "Licensed & Insured" },
    { icon: Award, text: "5-Star Rated" },
    { icon: ThumbsUp, text: "100% Satisfaction" },
    { icon: Users, text: "Local Family Business" }
  ];
  
  return (
    <section className="bg-forest-dark py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center justify-center gap-3 text-white/90">
              <Icon size={24} className="text-harvest" />
              <span className="font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-dark mb-4 font-display">Our Services</h2>
          <p className="text-xl text-sage max-w-2xl mx-auto">Complete outdoor solutions for your home or business</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map(({ icon: Icon, title, description }, i) => (
            <div key={title} className={`bg-white p-8 rounded-2xl border border-moss shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group animate-fade-in-up`} style={{ animationDelay: `${i * 100}ms` }}>
              <div className="w-16 h-16 bg-forest/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-forest group-hover:text-white transition-all">
                <Icon size={32} className="text-forest group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-forest-dark mb-3 font-display">{title}</h3>
              <p className="text-sage mb-4">{description}</p>
              <a href="#contact" className="text-forest font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ChevronRight size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section id="about" className="py-24 bg-forest-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">Why Choose Ezcutz?</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">{BUSINESS.description}</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "10+", label: "Years Experience" },
            { number: "500+", label: "Happy Customers" },
            { number: "4.7", label: "Star Rating" },
            { number: "24hr", label: "Response Time" }
          ].map(({ number, label }) => (
            <div key={label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 hover:bg-white/15 transition-all">
              <div className="stat-number text-5xl md:text-6xl font-bold text-harvest mb-2">{number}</div>
              <div className="text-white/80 uppercase tracking-wide text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-dark mb-4 font-display">Our Work</h2>
          <p className="text-xl text-sage">See the quality we deliver on every project</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY.map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-xl group cursor-pointer">
              <img 
                src={src} 
                alt={`Project ${i + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-dark mb-4 font-display">What Customers Say</h2>
          <div className="flex items-center justify-center gap-2">
            <StarRating rating={BUSINESS.rating} size={24} />
            <span className="text-xl text-sage ml-2">{BUSINESS.rating} average from {BUSINESS.reviewCount} reviews</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map(({ name, text, rating }, i) => (
            <div key={name} className={`bg-white p-8 rounded-2xl shadow-md border-l-4 border-forest relative animate-fade-in-up`} style={{ animationDelay: `${i * 100}ms` }}>
              <Quote size={40} className="absolute top-4 right-4 text-forest/10" />
              <StarRating rating={rating} size={18} />
              <p className="text-sage mt-4 mb-6 text-lg italic">"{text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-forest/10 rounded-full flex items-center justify-center">
                  <span className="text-forest font-bold text-lg">{name.charAt(0)}</span>
                </div>
                <div>
                  <div className="font-bold text-forest-dark">{name}</div>
                  <div className="text-sm text-stone flex items-center gap-1">
                    <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" /> Google Review
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-forest-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">Get Your Free Estimate</h2>
            <p className="text-xl text-white/70 mb-8">
              Ready to transform your outdoor space? Contact us today for a free, no-obligation quote.
            </p>
            
            <div className="space-y-6">
              <a href={BUSINESS.phoneLink} className="flex items-center gap-4 text-white hover:text-harvest transition-colors group">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-harvest transition-all">
                  <Phone size={24} className="group-hover:text-forest-dark" />
                </div>
                <div>
                  <div className="text-sm text-white/60">Call Us</div>
                  <div className="text-xl font-bold">{BUSINESS.phone}</div>
                </div>
              </a>
              
              <div className="flex items-center gap-4 text-white">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm text-white/60">Location</div>
                  <div className="text-xl font-bold">{BUSINESS.address}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-white">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                  <Clock size={24} />
                </div>
                <div>
                  <div className="text-sm text-white/60">Hours</div>
                  <div className="text-xl font-bold">{BUSINESS.hours}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-harvest focus:ring-2 focus:ring-harvest/20 transition-all outline-none"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-harvest focus:ring-2 focus:ring-harvest/20 transition-all outline-none"
                />
              </div>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-harvest focus:ring-2 focus:ring-harvest/20 transition-all outline-none"
              />
              <select className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white/70 focus:border-harvest focus:ring-2 focus:ring-harvest/20 transition-all outline-none">
                <option value="">Select a Service</option>
                {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
              </select>
              <textarea 
                placeholder="Tell us about your project..." 
                rows={4}
                className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-harvest focus:ring-2 focus:ring-harvest/20 transition-all outline-none resize-none"
              />
              <button type="submit" className="w-full bg-harvest hover:bg-harvest-dark text-forest-dark font-bold px-8 py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg text-lg">
                Get Free Estimate
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-forest-dark border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-harvest rounded-full flex items-center justify-center">
              <Leaf className="text-forest-dark" size={20} />
            </div>
            <span className="text-white font-bold font-display text-xl">{BUSINESS.name}</span>
          </div>
          
          <p className="text-white/60 text-center">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved. Serving {BUSINESS.city}, {BUSINESS.state}.
          </p>
          
          <a href={BUSINESS.phoneLink} className="text-harvest hover:text-harvest-dark transition-colors font-bold">
            {BUSINESS.phone}
          </a>
        </div>
      </div>
    </footer>
  );
}

function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.15)] p-4 lg:hidden z-50">
      <div className="flex gap-3">
        <a href={BUSINESS.phoneLink} className="flex-1 bg-accent text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2">
          <Phone size={20} /> Call Now
        </a>
        <a href="#contact" className="flex-1 bg-forest text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2">
          Free Quote
        </a>
      </div>
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen pb-20 lg:pb-0">
      <Header scrolled={scrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <MobileCTA />
    </div>
  );
}