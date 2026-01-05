import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Star, CheckCircle, Leaf, TreeDeciduous, Scissors, Shovel, Flower2, Menu, X, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const businessInfo = {
    name: "Ezcutz Lawncare",
    phone: "(213) 257-5328",
    address: "1112 S Oxford Ave, Los Angeles, CA 90006",
    rating: 4.7,
    reviews: 13
  };

  const services = [
    { title: "Lawn Care & Mowing", icon: <Scissors className="w-6 h-6" />, desc: "Regular maintenance keeping your grass green and perfectly trimmed." },
    { title: "Landscaping Design", icon: <Leaf className="w-6 h-6" />, desc: "Transform your outdoor space with our custom landscaping renovation." },
    { title: "Tree Services", icon: <TreeDeciduous className="w-6 h-6" />, desc: "Pruning, trimming, and removal of trees including palms." },
    { title: "Hardscaping", icon: <Shovel className="w-6 h-6" />, desc: "Paving, concrete work, and durable outdoor structures." },
    { title: "Sod Installation", icon: <Flower2 className="w-6 h-6" />, desc: "Instant green lawns with professional sod laying services." },
    { title: "Clean Up", icon: <CheckCircle className="w-6 h-6" />, desc: "Complete yard cleanup and debris removal." }
  ];

  const testimonials = [
    { name: "Eddie Ortiz", text: "His prices were fair, he came out on Sunday first thing and did a fantastic job!", rating: 5 },
    { name: "Roberta Ponce", text: "The quality of service is consistent and leaves the yard looking amazing.", rating: 5 },
    { name: "L Diaz", text: "Great price and wonderful people.", rating: 5 },
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
             <h1 className={`text-2xl font-bold font-display ${isScrolled ? 'text-forest' : 'text-white'}`}>Ezcutz<span className="text-harvest">.</span></h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Services', 'About', 'Gallery', 'Reviews'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`font-semibold hover:text-harvest transition-colors ${isScrolled ? 'text-forest-dark' : 'text-white'}`}>
                {item}
              </a>
            ))}
            <a href="tel:+12132575328" className="bg-accent hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-bold transition-all shadow-lg flex items-center gap-2">
              <Phone className="w-4 h-4" /> (213) 257-5328
            </a>
          </div>

          <button className="md:hidden text-2xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
             {isMobileMenuOpen ? <X className={isScrolled ? 'text-forest' : 'text-white'} /> : <Menu className={isScrolled ? 'text-forest' : 'text-white'} />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-forest-dark z-40 flex flex-col items-center justify-center space-y-8 text-white pt-20">
          {['Services', 'About', 'Gallery', 'Reviews'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-display">
              {item}
            </a>
          ))}
          <a href="tel:+12132575328" className="bg-accent px-8 py-3 rounded-xl font-bold text-xl">
             Call Now
          </a>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920&q=80" 
            alt="Lush green lawn in Los Angeles" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-2xl text-white">
            <div className="flex items-center gap-2 mb-4 text-harvest font-bold uppercase tracking-wider text-sm">
              <MapPin className="w-4 h-4" /> Serving Los Angeles, CA
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Premium Lawn Care & <span className="text-harvest">Landscaping</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-lg">
              We offer 100% satisfaction on all our projects. Renovation, installation, and maintenance done right from the beginning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-harvest hover:bg-harvest-dark text-white text-lg font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-center">
                Get a Free Quote
              </a>
              <a href="tel:+12132575328" className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white text-lg font-bold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" /> Call {businessInfo.phone}
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-white/90">
               <div className="flex text-yellow-400">
                 {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-5 h-5" />)}
               </div>
               <span className="font-semibold">{businessInfo.rating} Stars ({businessInfo.reviews} Google Reviews)</span>
            </div>
          </div>
        </div>
      </header>

      {/* Trust Bar */}
      <div className="bg-forest-light py-8">
        <div className="container mx-auto px-6">
           <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-white font-semibold uppercase tracking-wide text-sm opacity-90">
             <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-harvest" /> Licensed & Insured</div>
             <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-harvest" /> 100% Satisfaction</div>
             <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-harvest" /> Prompt Service</div>
             <div className="flex items-center gap-2"><MapPin className="w-5 h-5 text-harvest" /> Locally Owned</div>
           </div>
        </div>
      </div>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-forest-dark text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-harvest mx-auto rounded-full"></div>
            <p className="text-sage mt-4 text-lg max-w-2xl mx-auto">From ongoing maintenance to complete transformations, our team is dedicated to getting the job done right.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-moss shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-14 h-14 bg-forest/10 rounded-full flex items-center justify-center text-forest mb-6 group-hover:bg-forest group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-forest-dark mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <a href="#contact" className="text-harvest-dark font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Get details <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-20 bg-forest-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Neighbors Trust <br/><span className="text-harvest">Ezcutz Lawncare</span></h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                We are a local Los Angeles team committed to excellence. Whether it's a simple mow or a complex tree removal, we treat your property with respect and care.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border-l-4 border-harvest">
                   <div className="text-4xl font-bold font-accent text-white mb-1">4.7</div>
                   <div className="text-sm uppercase tracking-wider text-gray-400">Google Rating</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border-l-4 border-harvest">
                   <div className="text-4xl font-bold font-accent text-white mb-1">100%</div>
                   <div className="text-sm uppercase tracking-wider text-gray-400">Satisfaction</div>
                </div>
              </div>

               <ul className="space-y-4">
                 <li className="flex items-center gap-3">
                   <CheckCircle className="text-harvest w-6 h-6 flex-shrink-0" />
                   <span>Fair and transparent pricing</span>
                 </li>
                 <li className="flex items-center gap-3">
                   <CheckCircle className="text-harvest w-6 h-6 flex-shrink-0" />
                   <span>Available Sundays & weekends</span>
                 </li>
                 <li className="flex items-center gap-3">
                   <CheckCircle className="text-harvest w-6 h-6 flex-shrink-0" />
                   <span>Consistent quality service</span>
                 </li>
               </ul>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-harvest/30 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1598902108854-10e335adac99?w=800&q=80" 
                alt="Tree Care Professional" 
                className="rounded-3xl shadow-2xl w-full object-cover relative transform -rotate-2 hover:rotate-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-forest-dark text-4xl md:text-5xl font-bold mb-4">Our Recent Work</h2>
            <p className="text-sage text-lg">See the difference we make in lawns across Los Angeles.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
             <img src="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=600&q=80" alt="Lawn Care" className="w-full h-80 object-cover rounded-xl hover:scale-[1.02] transition-transform duration-300 shadow-md"/>
             <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80" alt="Backyard Project" className="w-full h-80 object-cover rounded-xl hover:scale-[1.02] transition-transform duration-300 shadow-md lg:translate-y-8"/>
             <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80" alt="Garden Path" className="w-full h-80 object-cover rounded-xl hover:scale-[1.02] transition-transform duration-300 shadow-md"/>
             <img src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=600&q=80" alt="Landscaping" className="w-full h-80 object-cover rounded-xl hover:scale-[1.02] transition-transform duration-300 shadow-md lg:translate-y-8"/>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-20 bg-cream">
        <div className="container mx-auto px-6">
           <h2 className="text-forest-dark text-4xl md:text-5xl font-bold text-center mb-16">What Our Clients Say</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {testimonials.map((review, i) => (
               <div key={i} className="bg-white p-8 rounded-2xl border-t-4 border-harvest shadow-md relative">
                 <div className="text-harvest mb-4 flex">
                   {[...Array(5)].map((_, j) => <Star key={j} fill="currentColor" className="w-5 h-5" />)}
                 </div>
                 <p className="text-gray-600 italic mb-6">"{review.text}"</p>
                 <div className="flex items- center gap-3">
                   <div className="w-10 h-10 bg-forest/20 rounded-full flex items-center justify-center font-bold text-forest">
                     {review.name.charAt(0)}
                   </div>
                   <div>
                     <div className="font-bold text-forest-dark">{review.name}</div>
                     <div className="text-xs text-stone uppercase">Google Review</div>
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-forest-dark relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 p-12 bg-forest text-white relative flex flex-col justify-between">
               <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
               <div>
                  <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
                  <p className="text-forest-light mb-8">Ready to transform your lawn? Contact us for a free estimate today.</p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-harvest" />
                      </div>
                      <div>
                        <div className="font-bold text-harvest">Location</div>
                        <div>1112 S Oxford Ave, Los Angeles, CA 90006</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="text-harvest" />
                      </div>
                      <div>
                        <div className="font-bold text-harvest">Phone</div>
                        <div>(213) 257-5328</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="text-harvest" />
                      </div>
                      <div>
                        <div className="font-bold text-harvest">Hours</div>
                        <div>Open Daily · Closes 5 PM</div>
                      </div>
                    </div>
                  </div>
               </div>
               
               <div className="mt-12">
                 <div className="text-sm opacity-50">Ezcutz Lawncare</div>
               </div>
            </div>

            <div className="md:w-1/2 p-12 bg-white">
              <h3 className="text-2xl font-bold text-forest-dark mb-6">Send a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-moss focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-moss focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all" placeholder="(555) 000-000" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">Service Needed</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-moss focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all">
                    <option>Lawn Maintenance</option>
                    <option>Landscaping</option>
                    <option>Tree Trimming</option>
                    <option>Hardscaping</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-moss focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="w-full bg-harvest hover:bg-harvest-dark text-white font-bold py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1">
                  Get Free Estimate
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-dark text-white pt-16 pb-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
           <div className="mb-8">
             <h2 className="text-3xl font-bold font-display">Ezcutz<span className="text-harvest">.</span></h2>
             <p className="text-gray-400 mt-2">Professional Landscaping in Los Angeles</p>
           </div>
           
           <div className="flex justify-center gap-8 mb-8 text-gray-400">
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
             <a href="#" className="hover:text-white transition-colors">Terms</a>
             <a href="#" className="hover:text-white transition-colors">Sitemap</a>
           </div>
           
           <div className="text-gray-600 text-sm">
             © {new Date().getFullYear()} Ezcutz Lawncare. All rights reserved.
           </div>
        </div>
      </footer>
      
      {/* Sticky Mobile Call Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden z-50 flex gap-4">
        <a href="tel:+12132575328" className="flex-1 bg-accent text-white font-bold py-3 rounded-lg text-center shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2">
          <Phone className="w-5 h-5" /> Call Now
        </a>
        <a href="#contact" className="flex-1 bg-forest text-white font-bold py-3 rounded-lg text-center shadow-lg active:scale-95 transition-transform">
          Get Quote
        </a>
      </div>
    </div>
  );
}

export default App;
