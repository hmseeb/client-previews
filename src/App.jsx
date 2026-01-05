import React, { useState } from 'react';
import {
  Phone, MapPin, Clock, Menu, X, Star,
  TreeDeciduous, Leaf, Flower2, Scissors,
  CloudLightning, Droplets, Shield, Award,
  BadgeCheck, ThumbsUp, ArrowRight, CheckCircle2
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const business = {
    name: "Red Hawaii Landscaping",
    phone: "(808) 216-4613",
    address: "41-310 Hihimanu St, Waimanalo, HI 96795",
    area: "Waimanalo & Windward Oahu",
    rating: "4.9",
    reviews: "120+"
  };

  const services = [
    {
      icon: <TreeDeciduous className="w-8 h-8 text-forest" />,
      title: "Tree Care & Trimming",
      desc: "Expert coconut palm trimming, removal, and pruning for safety and aesthetics."
    },
    {
      icon: <Leaf className="w-8 h-8 text-forest" />,
      title: "Lawn Maintenance",
      desc: "Review-worthy mowing, edging, and fertilization for the perfect tropical lawn."
    },
    {
      icon: <Flower2 className="w-8 h-8 text-forest" />,
      title: "Garden Design",
      desc: "Custom tropical landscapes with native Hawaiian plants, vibrant flowers, and harmonious layouts."
    },
    {
      icon: <Scissors className="w-8 h-8 text-forest" />,
      title: "Hedge Shaping",
      desc: "Precision trimming for hedges, privacy screens, and ornamental bushes."
    },
    {
      icon: <Droplets className="w-8 h-8 text-forest" />,
      title: "Irrigation Systems",
      desc: "Installation and repair of efficient sprinkler and drip systems."
    },
    {
      icon: <CloudLightning className="w-8 h-8 text-forest" />,
      title: "Storm Cleanup",
      desc: "Fast and reliable debris removal after heavy winds or storms."
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Top Bar */}
      <div className="bg-forest-dark text-white/90 text-sm py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-harvest" /> {business.address}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-harvest" /> Mon-Sat: 7am - 6pm</span>
          </div>
          <div className="flex gap-4">
            <span className="text-harvest font-semibold">Licensed & Insured</span>
            <span>|</span>
            <span>Free Estimates</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-moss/30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold font-display text-forest-dark">
            Red Hawaii <span className="text-harvest">Landscaping</span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-medium text-forest-dark">
            <a href="#services" className="hover:text-harvest transition-colors">Services</a>
            <a href="#gallery" className="hover:text-harvest transition-colors">Gallery</a>
            <a href="#testimonials" className="hover:text-harvest transition-colors">Testimonials</a>
            <a href="#contact" className="bg-forest text-white px-5 py-2.5 rounded-lg hover:bg-forest-dark transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" /> {business.phone}
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-forest-dark">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-moss p-4 space-y-4 shadow-lg absolute w-full">
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium text-forest-dark py-2">Services</a>
            <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium text-forest-dark py-2">Gallery</a>
            <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium text-forest-dark py-2">Testimonials</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block w-full text-center bg-harvest text-forest-dark font-bold py-3 rounded-lg">
              Call Now
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero.png"
            alt="Tropical Hawaiian Landscaping"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full pt-16">
          <div className="max-w-2xl text-white">
            <div className="flex items-center gap-2 mb-4 bg-white/10 w-fit px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
              <div className="flex text-harvest">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="text-sm font-medium">#{business.rating} Rated in {business.area}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
              Transform Your <br />
              <span className="text-harvest">Paradise</span>
            </h1>

            <p className="text-xl md:text-2xl mb-10 text-cream/90 font-light leading-relaxed">
              Premium landscaping and tree services specifically designed for Hawaii's unique climate.
              Reliable, professional, and locally owned.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-harvest hover:bg-harvest-dark text-forest-dark font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:scale-105 transition-all text-center">
                Get a Free Quote
              </a>
              <a href={`tel:${business.phone}`} className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-semibold px-8 py-4 rounded-xl text-lg flex items-center justify-center gap-2 transition-all">
                <Phone className="w-5 h-5" /> {business.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-forest-light py-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-8 text-white/90">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-harvest" />
            <div>
              <div className="font-bold">Fully Insured</div>
              <div className="text-xs opacity-80">Protection Guaranteed</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <UsersIcon />
            <div>
              <div className="font-bold">Locally Owned</div>
              <div className="text-xs opacity-80">Serving Waimanalo</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <BadgeCheck className="w-8 h-8 text-harvest" />
            <div>
              <div className="font-bold">Expert Team</div>
              <div className="text-xs opacity-80">Trained Arborists</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ThumbsUp className="w-8 h-8 text-harvest" />
            <div>
              <div className="font-bold"> Satisfaction</div>
              <div className="text-xs opacity-80">100% Guaranteed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest-dark mb-4 drop-shadow-sm">Complete Outdoor Care</h2>
            <p className="text-lg text-stone max-w-2xl mx-auto">
              From routine maintenance to complete transformations, we treat your property with the respect it deserves.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-moss shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="bg-forest/5 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-forest/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-forest-dark mb-3">{service.title}</h3>
                <p className="text-stone leading-relaxed mb-6">{service.desc}</p>
                <div className="inline-flex items-center text-forest font-semibold hover:text-harvest transition-colors cursor-pointer">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Stats */}
      <section className="py-20 bg-forest-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-grid"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Why Neighbors Choose <span className="text-harvest">Red Hawaii</span></h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              We understand the unique challenges of Hawaiian landscaping - from salt spray to rapid growth cycles. Our team is dedicated to keeping your property pristine year-round.
            </p>
            <ul className="space-y-4 mb-10">
              {['Reliable, Scheduled Service', 'Professional Equipment', 'Native Plant Knowledge', 'Transparent Pricing'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-harvest w-6 h-6" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="inline-block bg-harvest hover:bg-harvest-dark text-forest-dark font-bold px-8 py-4 rounded-xl transition-all">
              Schedule Consultation
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10">
              <div className="text-5xl font-bold text-harvest mb-2 stat-number">15+</div>
              <div className="text-sm uppercase tracking-wider opacity-80">Years Exp.</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10">
              <div className="text-5xl font-bold text-harvest mb-2 stat-number">5k+</div>
              <div className="text-sm uppercase tracking-wider opacity-80">Happy Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10">
              <div className="text-5xl font-bold text-harvest mb-2 stat-number">4.9</div>
              <div className="text-sm uppercase tracking-wider opacity-80">Star Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10">
              <div className="text-5xl font-bold text-harvest mb-2 stat-number">24h</div>
              <div className="text-sm uppercase tracking-wider opacity-80">Resp. Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-forest-dark mb-4">Our Recent Projects</h2>
            <p className="text-stone">See the difference professional care makes.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <img src="/images/gallery-1.png" alt="Project 1" className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 w-full h-64 md:h-80 object-cover" />
            <img src="/images/gallery-2.png" alt="Project 2" className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 w-full h-64 md:h-80 object-cover" />
            <img src="/images/gallery-3.png" alt="Project 3" className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 w-full h-64 md:h-80 object-cover" />
            <img src="/images/gallery-4.png" alt="Project 4" className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 w-full h-64 md:h-80 object-cover" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-forest-dark text-center mb-16">Community Trusted</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "Red Hawaii transformed our overgrown backyard into a tropical paradise. The team was prompt, polite, and hardworking.", name: "Kai L.", loc: "Waimanalo" },
              { text: "Best lawn service I've ever used. They actually show up when they say they will and do an amazing job.", name: "Sarah J.", loc: "Kailua" },
              { text: "Professional tree trimming. They handled a huge coconut palm safely and cleaned up everything perfectly.", name: "Mike T.", loc: "Kaneohe" }
            ].map((test, i) => (
              <div key={i} className="bg-cream p-8 rounded-2xl border-l-4 border-forest shadow-sm relative">
                <div className="flex text-harvest mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-stone italic mb-6">"{test.text}"</p>
                <div>
                  <div className="font-bold text-forest-dark">{test.name}</div>
                  <div className="text-sm text-stone/80">{test.loc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-forest-dark relative">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 text-white">
          <div>
            <h2 className="text-4xl font-bold mb-6">Get Your Free Estimate</h2>
            <p className="text-lg opacity-80 mb-8">
              Fill out the form or give us a call. We'll get back to you within 24 hours to schedule your consultation.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl">
                <div className="bg-harvest p-3 rounded-full text-forest-dark"><Phone /></div>
                <div>
                  <div className="text-sm opacity-60">Call Us Directly</div>
                  <div className="text-xl font-bold">{business.phone}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl">
                <div className="bg-harvest p-3 rounded-full text-forest-dark"><MapPin /></div>
                <div>
                  <div className="text-sm opacity-60">Our Location</div>
                  <div className="text-xl font-bold">{business.address}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl">
                <div className="bg-harvest p-3 rounded-full text-forest-dark"><Clock /></div>
                <div>
                  <div className="text-sm opacity-60">Business Hours</div>
                  <div className="text-xl font-bold">Mon - Sat: 7am - 6pm</div>
                </div>
              </div>
            </div>
          </div>

          <form className="bg-white rounded-2xl p-8 text-forest-dark shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-xl border border-moss focus:border-forest focus:ring-2 focus:ring-forest/20 transition-all outline-none bg-cream/50" />
                <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-xl border border-moss focus:border-forest focus:ring-2 focus:ring-forest/20 transition-all outline-none bg-cream/50" />
              </div>

              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-moss focus:border-forest focus:ring-2 focus:ring-forest/20 transition-all outline-none bg-cream/50" />
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-moss focus:border-forest focus:ring-2 focus:ring-forest/20 transition-all outline-none bg-cream/50" />

              <select className="w-full px-4 py-3 rounded-xl border border-moss focus:border-forest focus:ring-2 focus:ring-forest/20 transition-all outline-none bg-cream/50 cursor-pointer">
                <option value="">Interested Service...</option>
                <option value="landscaping">General Landscaping</option>
                <option value="tree-care">Tree Care</option>
                <option value="lawn">Lawn Maintenance</option>
                <option value="other">Other</option>
              </select>

              <textarea placeholder="How can we help?" rows="4" className="w-full px-4 py-3 rounded-xl border border-moss focus:border-forest focus:ring-2 focus:ring-forest/20 transition-all outline-none bg-cream/50"></textarea>

              <button type="submit" className="w-full bg-harvest hover:bg-harvest-dark text-forest-dark font-bold py-4 rounded-xl text-lg shadow-lg transition-colors">
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-dark py-12 border-t border-white/10 text-white/60 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <div className="text-xl font-bold font-display text-white mb-2">Red Hawaii <span className="text-harvest">Landscaping</span></div>
            <p>© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50 flex gap-3">
        <a href={`tel:${business.phone}`} className="flex-1 bg-accent text-white font-bold py-3.5 rounded-xl shadow-xl flex items-center justify-center gap-2">
          <Phone className="w-5 h-5" /> Call Now
        </a>
        <a href="#contact" className="flex-1 bg-white text-forest-dark border border-forest font-bold py-3.5 rounded-xl shadow-xl flex items-center justify-center gap-2">
          Get Quote
        </a>
      </div>
    </div>
  );
}

// Icon helper
function UsersIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-harvest"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
  )
}

export default App;