import React, { useState } from 'react';
import { Phone, TreeDeciduous, Scissors, Shield, Check, Star, Menu, X, MapPin, Mail, Clock, Leaf, CloudLightning, BadgeCheck, Zap } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const phone = "(562) 560-3119";
  const email = "philsarborcare@gmail.com";

  const services = [
    { title: "Tree Removal", icon: <TreeDeciduous className="w-8 h-8 text-harvest" />, desc: "Safe and efficient removal of trees of any size using professional DRT and SRT techniques." },
    { title: "Pruning & Trimming", icon: <Scissors className="w-8 h-8 text-harvest" />, desc: "Expert lacing, crown cleaning, raising, reduction, and restoration for tree health." },
    { title: "Stump Grinding", icon: <Zap className="w-8 h-8 text-harvest" />, desc: "Complete stump removal and grinding services to reclaim your landscape." },
    { title: "Palm Tree Care", icon: <Leaf className="w-8 h-8 text-harvest" />, desc: "Specialized care for palm trees including skinning and trimming." },
    { title: "Landscaping", icon: <TreeDeciduous className="w-8 h-8 text-harvest" />, desc: "Residential and commercial landscaping design and execution." },
    { title: "Emergency Care", icon: <CloudLightning className="w-8 h-8 text-harvest" />, desc: "24/7 availability for storm damage, fallen trees, and hazard clearing." },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Bar */}
      <div className="bg-forest-dark text-white py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><MapPin size={14} /> Serving LA, San Bernardino, Riverside, Orange & Ventura Counties</span>
            <span className="flex items-center gap-2"><Clock size={14} /> Open Daily until 7 PM</span>
          </div>
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><BadgeCheck size={14} /> License #1076339</span>
            <span className="flex items-center gap-2">Insured & Bonded</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <span className="text-2xl font-bold font-display text-forest-dark">Phil's Arbor Care</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-forest font-medium">Services</a>
              <a href="#about" className="text-gray-700 hover:text-forest font-medium">About</a>
              <a href="#reviews" className="text-gray-700 hover:text-forest font-medium">Reviews</a>
              <a href="#contact" className="bg-harvest hover:bg-harvest-dark text-forest-dark font-bold px-6 py-2 rounded-lg transition-colors">
                Get Quote
              </a>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-forest-dark">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4">
            <a href="#services" className="block text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#about" className="block text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#reviews" className="block text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>Reviews</a>
            <a href="#contact" className="block text-harvest font-bold" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative bg-forest-dark text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1598902108854-10e335adac99?w=1920&q=80"
            alt="Tree Service" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 to-forest/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-harvest mb-4 font-bold tracking-wide uppercase">
              <Star className="fill-current" size={20} />
              <span>4.8/5 Rating from 23 Google Reviews</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 leading-tight">
              Complete Tree Care & Landscaping Services
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Professional, licensed, and insured tree service for residential and commercial needs. We expertly care for your trees using the latest safety techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-harvest hover:bg-harvest-dark text-forest-dark font-bold text-lg px-8 py-4 rounded-lg shadow-lg text-center transition-all hover:-translate-y-1">
                Get Free Estimate
              </a>
              <a href={`tel:${phone}`} className="bg-white/10 hover:bg-white/20 backdrop-blur text-white font-bold text-lg px-8 py-4 rounded-lg border border-white/30 text-center transition-all flex items-center justify-center gap-2">
                <Phone size={20} />
                {phone}
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Trust Bar */}
      <div className="bg-cream py-8 border-b border-moss/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between gap-8 text-forest-dark opacity-80 font-medium uppercase tracking-wide text-sm">
            <span className="flex items-center gap-2"><BadgeCheck className="text-harvest" /> Licensed #1076339</span>
            <span className="flex items-center gap-2"><Shield className="text-harvest" /> Residential & Commercial</span>
            <span className="flex items-center gap-2"><Check className="text-harvest" /> Double & Single Rope Safety</span>
            <span className="flex items-center gap-2"><Zap className="text-harvest" /> 24/7 Emergency Service</span>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-display text-forest-dark mb-4">Our Expert Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We offer comprehensive tree and landscaping solutions for your property.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-moss shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mb-6 group-hover:bg-forest/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-forest-dark mb-3 font-display">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <a href="#contact" className="text-harvest-dark font-bold hover:text-accent flex items-center gap-1 text-sm">
                  Get quote <span className="text-lg">›</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / About Section */}
      <section id="about" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=800&q=80" 
                alt="Landscaping" 
                className="rounded-2xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-harvest/20 rounded-full blur-3xl -z-0"></div>
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-forest/20 rounded-full blur-3xl -z-0"></div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold font-display text-forest-dark mb-6">Local Tree Care You Can Trust</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  At <strong>Phil's Arbor Care</strong>, we are locally owned and operated, dedicated to offering the best pricing and highest quality service for your needs. Whether it's a small residential trim or a large commercial removal, we work with precision, safety, and efficiency.
                </p>
                <p>
                  Our professional climbers utilize advanced <strong>DRT and SRT (double and single rope techniques)</strong> to access and care for trees safely, without the need for heavy machinery that can damage your lawn.
                </p>
                <p>
                  We also specialize in functional and beautiful landscaping solutions for homeowners, retail spaces, schools, and HOAs throughout Southern California.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-harvest font-accent">4.8</div>
                    <div className="text-sm font-bold text-forest-dark uppercase tracking-wider">Rating</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-harvest font-accent">100%</div>
                    <div className="text-sm font-bold text-forest-dark uppercase tracking-wider">Licensed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-display text-forest-dark text-center mb-12">What Our Neighbors Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cream p-8 rounded-xl border-t-4 border-forest shadow-sm relative">
              <div className="flex text-harvest mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-700 italic mb-6">"Phil's team did an amazing job on our large oak tree. They were professional, on time, and cleaned up everything perfectly. Highly recommend!"</p>
              <div className="font-bold text-forest-dark">- Sarah J., Los Angeles</div>
            </div>
            
            <div className="bg-cream p-8 rounded-xl border-t-4 border-forest shadow-sm relative">
              <div className="flex text-harvest mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-700 italic mb-6">"Best pricing I found and the work was excellent. They removed a dangerous palm tree quickly and safely. Great communication."</p>
              <div className="font-bold text-forest-dark">- Michael T., Orange County</div>
            </div>
            
            <div className="bg-cream p-8 rounded-xl border-t-4 border-forest shadow-sm relative">
              <div className="flex text-harvest mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-700 italic mb-6">"We use Phil's Arbor Care for our HOA landscaping. They are reliable, knowledgeable, and keep our community looking beautiful year-round."</p>
              <div className="font-bold text-forest-dark">- David R., Riverside</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-forest-dark text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold font-display mb-6">Schedule Your Free Consultation</h2>
              <p className="text-moss text-lg mb-8">
                Ready to transform your landscape or need tree care? Contact us today. We are available for projects in Los Angeles, San Bernardino, Riverside, Orange, and Ventura Counties.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-harvest rounded-full flex items-center justify-center text-forest-dark">
                    <Phone />
                  </div>
                  <div>
                    <div className="text-moss text-sm uppercase font-bold tracking-wider">Call or Text</div>
                    <div className="text-2xl font-bold">{phone}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-forest-light rounded-full flex items-center justify-center text-white">
                    <Mail />
                  </div>
                  <div>
                    <div className="text-moss text-sm uppercase font-bold tracking-wider">Email Us</div>
                    <div className="text-xl">{email}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-forest-light rounded-full flex items-center justify-center text-white">
                    <Clock />
                  </div>
                  <div>
                    <div className="text-moss text-sm uppercase font-bold tracking-wider">Hours</div>
                    <div className="text-xl">Open Daily · Closes 7 PM</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-forest-dark shadow-2xl">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold mb-1">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-moss focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none bg-cream" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-moss focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none bg-cream" placeholder="(555) 555-5555" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Service Needed</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-moss focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none bg-cream">
                    <option>Tree Removal</option>
                    <option>Pruning / Trimming</option>
                    <option>Stump Grinding</option>
                    <option>Landscaping</option>
                    <option>Emergency Service</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Message</label>
                  <textarea className="w-full px-4 py-3 rounded-xl border border-moss focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none bg-cream h-32" placeholder="How can we help?"></textarea>
                </div>
                <button className="w-full bg-harvest hover:bg-harvest-dark text-forest-dark font-bold text-lg py-4 rounded-xl shadow-lg transition-colors">
                  Request Free Estimate
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-dark border-t border-forest-light/30 pt-16 pb-8 text-moss">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-4">&copy; {new Date().getFullYear()} Phil's Arbor Care. License #1076339. All rights reserved.</p>
          <p className="text-sm opacity-60">Serving Greater Southern California</p>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 flex gap-4">
        <a href={`tel:${phone}`} className="flex-1 bg-accent text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 shadow-sm">
          <Phone size={18} /> Call Now
        </a>
        <a href="#contact" className="flex-1 bg-forest text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 shadow-sm">
          Get Quote
        </a>
      </div>
    </div>
  );
}

export default App;
