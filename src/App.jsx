import { useState, useEffect } from 'react'
import { 
  Phone, Clock, MapPin, Menu, X, Star, ChevronRight, 
  TreeDeciduous, Leaf, Flower2, CloudLightning, Droplets, Scissors,
  Shield, Award, BadgeCheck, ThumbsUp, Quote, CheckCircle2,
  Facebook, Instagram, Youtube, Mail, ExternalLink
} from 'lucide-react'

const PHONE = "(808) 216-4613"
const ADDRESS = "41-310 Hihimanu St, Waimanalo, HI 96795"

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-forest-dark text-white py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href={`tel:${PHONE.replace(/[^0-9]/g, '')}`} className="flex items-center gap-2 text-harvest font-semibold hover:text-harvest-dark transition-colors">
              <Phone size={14} />
              {PHONE}
            </a>
            <span className="flex items-center gap-2 text-white/80">
              <Clock size={14} />
              Mon-Sat 7AM-6PM
            </span>
            <span className="flex items-center gap-2 text-white/80">
              <MapPin size={14} />
              Serving Oahu & Windward Side
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-harvest transition-colors"><Facebook size={16} /></a>
            <a href="#" className="hover:text-harvest transition-colors"><Instagram size={16} /></a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center">
              <TreeDeciduous className="text-white" size={28} />
            </div>
            <div>
              <span className="font-display text-xl font-bold text-forest-dark block leading-tight">Green Hawaii</span>
              <span className="text-xs text-sage uppercase tracking-wider">Landscaping</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            <a href="#services" className="text-gray-700 hover:text-forest font-medium transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-forest font-medium transition-colors">About</a>
            <a href="#gallery" className="text-gray-700 hover:text-forest font-medium transition-colors">Gallery</a>
            <a href="#reviews" className="text-gray-700 hover:text-forest font-medium transition-colors">Reviews</a>
            <a href="#contact" className="text-gray-700 hover:text-forest font-medium transition-colors">Contact</a>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:${PHONE.replace(/[^0-9]/g, '')}`} className="flex items-center gap-2 text-forest font-semibold">
              <Phone size={18} />
              {PHONE}
            </a>
            <a href="#contact" className="bg-harvest hover:bg-harvest-dark text-forest-dark font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              Free Quote
            </a>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-forest-dark">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t">
            <div className="p-6 space-y-4">
              <a href={`tel:${PHONE.replace(/[^0-9]/g, '')}`} className="flex items-center justify-center gap-2 bg-accent text-white font-bold py-4 rounded-lg text-lg">
                <Phone size={20} />
                Call Now: {PHONE}
              </a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-lg font-medium text-gray-700 border-b">Services</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-lg font-medium text-gray-700 border-b">About</a>
              <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-lg font-medium text-gray-700 border-b">Gallery</a>
              <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-lg font-medium text-gray-700 border-b">Reviews</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-lg font-medium text-gray-700">Contact</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block bg-harvest text-forest-dark font-semibold py-4 rounded-lg text-center text-lg">
                Get Free Quote
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920&q=80')` }} />
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Professional Landscaping for <span className="text-harvest">Hawaiian</span> Homes
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              Trusted by hundreds of Oahu families for beautiful, sustainable outdoor spaces since day one.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#contact" className="bg-harvest hover:bg-harvest-dark text-forest-dark font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-200 text-lg text-center">
                Get Free Estimate
              </a>
              <a href={`tel:${PHONE.replace(/[^0-9]/g, '')}`} className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-forest-dark font-bold px-8 py-4 rounded-lg transition-all duration-200 text-lg text-center flex items-center justify-center gap-2">
                <Phone size={20} />
                {PHONE}
              </a>
            </div>

            <div className="flex items-center gap-2 text-white">
              <div className="flex text-harvest">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <span className="text-white/90">4.9/5 from 150+ Happy Customers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-cream py-8 border-y border-moss">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center gap-3 text-forest-dark">
              <Shield className="text-forest" size={32} />
              <span className="font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-3 text-forest-dark">
              <Award className="text-forest" size={32} />
              <span className="font-semibold">Locally Owned</span>
            </div>
            <div className="flex items-center gap-3 text-forest-dark">
              <BadgeCheck className="text-forest" size={32} />
              <span className="font-semibold">Free Estimates</span>
            </div>
            <div className="flex items-center gap-3 text-forest-dark">
              <ThumbsUp className="text-forest" size={32} />
              <span className="font-semibold">100% Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-dark mb-4">Our Professional Services</h2>
            <p className="text-lg text-sage max-w-2xl mx-auto">Comprehensive landscaping care tailored for Hawaii's unique climate and your property's needs.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: TreeDeciduous, title: "Tree Trimming & Care", desc: "Expert pruning and maintenance to keep your trees healthy, safe, and beautiful year-round." },
              { icon: Leaf, title: "Lawn Maintenance", desc: "Regular mowing, edging, and care to maintain a lush, green lawn in Hawaii's tropical climate." },
              { icon: Flower2, title: "Landscape Design", desc: "Custom tropical garden designs that enhance your property's beauty and increase home value." },
              { icon: Scissors, title: "Hedge & Shrub Care", desc: "Precise shaping and maintenance of hedges, shrubs, and ornamental plants." },
              { icon: Droplets, title: "Irrigation Systems", desc: "Installation and repair of efficient irrigation systems optimized for Hawaiian weather." },
              { icon: CloudLightning, title: "Storm Cleanup", desc: "Fast response for storm damage cleanup and debris removal when you need it most." },
            ].map((service, i) => (
              <div key={i} className="group bg-white p-6 md:p-8 rounded-xl border border-moss hover:border-forest shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-forest/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-forest group-hover:text-white transition-colors duration-300">
                  <service.icon className="text-forest group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-bold text-forest-dark mb-3">{service.title}</h3>
                <p className="text-sage mb-4">{service.desc}</p>
                <a href="#contact" className="inline-flex items-center text-forest font-semibold hover:text-forest-dark transition-colors">
                  Learn More <ChevronRight size={18} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Why Choose Us */}
      <section id="about" className="py-16 md:py-24 bg-forest-dark leaf-pattern">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Oahu Homeowners Choose Green Hawaii</h2>
              <p className="text-white/80 text-lg mb-8">
                We're not just landscapers—we're your neighbors. As a locally owned and operated company, we understand Hawaii's unique environment and what it takes to create outdoor spaces that thrive here.
              </p>
              
              <div className="space-y-5">
                {[
                  { title: "Licensed & Fully Insured", desc: "Complete protection for your property and our team." },
                  { title: "Local Hawaiian Expertise", desc: "We know which plants thrive in our climate and soil." },
                  { title: "Free, Detailed Estimates", desc: "Transparent pricing with no surprises or hidden fees." },
                  { title: "Clean Job Sites", desc: "We leave your property cleaner than we found it." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="text-harvest shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                      <p className="text-white/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "150+", label: "Happy Customers" },
                { num: "4.9", label: "Star Rating" },
                { num: "100%", label: "Satisfaction" },
                { num: "24hr", label: "Response Time" },
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="stat-number text-4xl md:text-5xl font-bold text-harvest mb-2">{stat.num}</div>
                  <div className="text-white/80 text-sm uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-dark mb-4">Our Recent Projects</h2>
            <p className="text-lg text-sage">See the transformations we've created for Hawaiian homeowners.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80',
              'https://images.unsplash.com/photo-1598902108854-10e335adac99?w=600&q=80',
              'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
              'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=600&q=80',
              'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=600&q=80',
              'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
            ].map((img, i) => (
              <div key={i} className={`relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 ${i === 1 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                <img src={img} alt={`Landscaping project ${i + 1}`} className="w-full h-48 md:h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-dark mb-4">What Our Customers Say</h2>
            <p className="text-lg text-sage">Real reviews from real Hawaiian homeowners.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: "Incredible work! They transformed our overgrown backyard into a tropical paradise. The team was professional, on time, and cleaned up perfectly.", name: "Keoni M.", location: "Kailua" },
              { text: "Best landscapers on the island. Fair prices, amazing quality, and they really know Hawaiian plants. Our yard has never looked better!", name: "Sarah L.", location: "Waimanalo" },
              { text: "Fast response after the storm damaged our trees. They were out the next day and took care of everything. Highly recommend!", name: "David K.", location: "Kaneohe" },
            ].map((review, i) => (
              <div key={i} className="bg-white p-6 md:p-8 rounded-xl border-l-4 border-forest shadow-md">
                <div className="flex text-harvest mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <Quote className="text-forest/20 mb-3" size={32} />
                <p className="text-gray-700 mb-6 italic">"{review.text}"</p>
                <div>
                  <div className="font-semibold text-forest-dark">{review.name}</div>
                  <div className="text-sm text-sage">{review.location}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="#" className="inline-flex items-center text-forest font-semibold hover:text-forest-dark transition-colors">
              Read All 150+ Reviews <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-forest-dark mb-6">Proudly Serving Oahu's Windward Side</h2>
              <p className="text-sage text-lg mb-8">Based in Waimanalo, we provide professional landscaping services throughout the Windward Coast and greater Honolulu area.</p>
              
              <div className="grid grid-cols-2 gap-3">
                {['Waimanalo', 'Kailua', 'Kaneohe', 'Hawaii Kai', 'Honolulu', 'Lanikai', 'Enchanted Lake', 'Kahaluu'].map((city, i) => (
                  <div key={i} className="flex items-center gap-2 text-forest-dark">
                    <CheckCircle2 className="text-forest" size={18} />
                    <span>{city}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="inline-flex items-center mt-8 bg-forest hover:bg-forest-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                Check Your Address <ChevronRight size={18} className="ml-1" />
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59673.47847654695!2d-157.73436342089844!3d21.346977699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c001392ed5a2f35%3A0x8d7c7c1f3a1c5c1a!2sWaimanalo%2C%20HI%2096795!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus" width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Service Area Map" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-forest-dark mb-6">Ready to Transform Your Outdoor Space?</h2>
              <p className="text-sage text-lg mb-8">Get your free, no-obligation estimate today. Our team will assess your property and provide a detailed plan tailored to your needs and budget.</p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="text-forest" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-forest-dark">Call Us</div>
                    <a href={`tel:${PHONE.replace(/[^0-9]/g, '')}`} className="text-lg text-forest hover:text-forest-dark transition-colors">{PHONE}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="text-forest" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-forest-dark">Email Us</div>
                    <a href="mailto:info@greenhawaii.com" className="text-lg text-forest hover:text-forest-dark transition-colors">info@greenhawaii.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="text-forest" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-forest-dark">Visit Us</div>
                    <span className="text-sage">{ADDRESS}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 bg-forest hover:bg-forest-dark rounded-full flex items-center justify-center text-white transition-colors"><Facebook size={20} /></a>
                <a href="#" className="w-10 h-10 bg-forest hover:bg-forest-dark rounded-full flex items-center justify-center text-white transition-colors"><Instagram size={20} /></a>
                <a href="#" className="w-10 h-10 bg-forest hover:bg-forest-dark rounded-full flex items-center justify-center text-white transition-colors"><Youtube size={20} /></a>
              </div>
            </div>

            <div className="bg-cream p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-forest-dark mb-6">Request Your Free Quote</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Your Name *" className="w-full px-4 py-3 rounded-xl border border-moss focus:border-forest focus:ring-2 focus:ring-forest/20 transition-all outline-none" required />
                <input type="tel" placeholder="Phone Number *" className="w-full px-4 py-3 rounded-xl border border-moss focus:border-forest focus:ring-2 focus:ring-forest/20 transition-all outline-none" required />
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-moss focus:border-forest focus:ring-2 focus:ring-forest/20 transition-all outline-none" />
                <select className="w-full px-4 py-3 rounded-xl border border-moss focus:border-forest focus:ring-2 focus:ring-forest/20 transition-all outline-none bg-white text-gray-500">
                  <option value="">Select Service Needed</option>
                  <option value="tree">Tree Trimming & Care</option>
                  <option value="lawn">Lawn Maintenance</option>
                  <option value="landscape">Landscape Design</option>
                  <option value="hedge">Hedge & Shrub Care</option>
                  <option value="irrigation">Irrigation Systems</option>
                  <option value="storm">Storm Cleanup</option>
                  <option value="other">Other</option>
                </select>
                <textarea placeholder="Tell us about your project..." rows={4} className="w-full px-4 py-3 rounded-xl border border-moss focus:border-forest focus:ring-2 focus:ring-forest/20 transition-all outline-none resize-y" />
                <button type="submit" className="w-full bg-harvest hover:bg-harvest-dark text-forest-dark font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-lg">
                  Request Free Quote
                </button>
                <p className="text-sm text-sage text-center">
                  Or call us directly: <a href={`tel:${PHONE.replace(/[^0-9]/g, '')}`} className="text-forest font-semibold">{PHONE}</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-accent py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-3">
              <CloudLightning className="text-white animate-pulse" size={32} />
              <span className="text-white text-xl font-bold">24/7 Emergency Storm Response</span>
            </div>
            <a href={`tel:${PHONE.replace(/[^0-9]/g, '')}`} className="bg-white text-accent font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors text-lg animate-pulse-gentle">
              Call Now: {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-dark leaf-pattern py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <TreeDeciduous className="text-forest" size={22} />
                </div>
                <span className="font-display text-xl font-bold text-white">Green Hawaii</span>
              </div>
              <p className="text-white/70 mb-4">Professional landscaping services for Hawaiian homes. Licensed, insured, and committed to excellence.</p>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"><Facebook size={16} /></a>
                <a href="#" className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"><Instagram size={16} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {['Tree Trimming', 'Lawn Care', 'Landscaping', 'Hedge Care', 'Irrigation', 'Storm Cleanup'].map((item, i) => (
                  <li key={i}><a href="#services" className="text-white/70 hover:text-harvest transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-white/70">
                <li><a href={`tel:${PHONE.replace(/[^0-9]/g, '')}`} className="hover:text-harvest transition-colors">{PHONE}</a></li>
                <li><a href="mailto:info@greenhawaii.com" className="hover:text-harvest transition-colors">info@greenhawaii.com</a></li>
                <li>{ADDRESS}</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Hours</h4>
              <ul className="space-y-2 text-white/70">
                <li>Monday - Saturday</li>
                <li className="text-harvest font-semibold">7:00 AM - 6:00 PM</li>
                <li className="mt-4">Sunday</li>
                <li>Closed (Emergency Only)</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
              <div>© 2024 Green Hawaii Landscaping. All rights reserved.</div>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.15)] p-3 flex gap-3 lg:hidden z-50">
        <a href={`tel:${PHONE.replace(/[^0-9]/g, '')}`} className="flex-1 bg-accent text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2">
          <Phone size={18} />
          Call Now
        </a>
        <a href="#contact" className="flex-1 bg-harvest text-forest-dark font-bold py-3 rounded-lg text-center">
          Get Quote
        </a>
      </div>
    </div>
  )
}

export default App