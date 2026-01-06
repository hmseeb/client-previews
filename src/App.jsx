import { useState } from 'react'
import {
  Phone, Mail, MapPin, Clock, Star, Menu, X, ChevronRight,
  TreeDeciduous, Leaf, Flower2, Scissors, Droplets, Shield,
  Award, BadgeCheck, ThumbsUp, Quote, Users, Calendar
} from 'lucide-react'

// Business Information
const BUSINESS = {
  name: "American Landscapes LLC",
  phone: "(513) 947-8727",
  phoneRaw: "+15139478727",
  email: "info@americanlandscapesllc.com",
  address: "4370 Mt Carmel Rd, Cincinnati, OH 45244",
  city: "Cincinnati",
  state: "OH",
  rating: 4.9,
  reviewCount: 155,
  hours: "Mon-Sat: 8AM - 6PM",
  tagline: "Cincinnati's Premier Landscape Specialists",
  yearsInBusiness: 15,
}

const SERVICES = [
  { icon: TreeDeciduous, title: "Landscape Design", description: "Custom landscape designs that transform your outdoor space into a beautiful retreat." },
  { icon: Flower2, title: "Garden Installation", description: "Professional planting of flowers, shrubs, and ornamental gardens with expert care." },
  { icon: Leaf, title: "Lawn Maintenance", description: "Regular mowing, edging, and lawn care to keep your property looking pristine." },
  { icon: Scissors, title: "Hardscape & Patios", description: "Natural stone patios, walkways, and retaining walls built to last." },
  { icon: Droplets, title: "Irrigation Systems", description: "Efficient irrigation solutions to keep your landscape healthy year-round." },
  { icon: TreeDeciduous, title: "Seasonal Cleanup", description: "Spring and fall cleanup services including leaf removal and bed preparation." },
]

const TESTIMONIALS = [
  { name: "Michael R.", location: "Anderson Township", text: "American Landscapes completely transformed our backyard. The stone patio and landscaping exceeded our expectations. Highly recommend!", rating: 5 },
  { name: "Sarah K.", location: "Mt. Carmel", text: "Professional, punctual, and their attention to detail is incredible. Our front yard has never looked better!", rating: 5 },
  { name: "David & Lisa T.", location: "Milford", text: "We've used them for 3 years now. Reliable, fair pricing, and they truly care about their work. Best landscapers in Cincinnati!", rating: 5 },
]

const STATS = [
  { value: "15+", label: "Years Experience" },
  { value: "2,500+", label: "Projects Completed" },
  { value: "4.9★", label: "Average Rating" },
  { value: "100%", label: "Satisfaction Guaranteed" },
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! We will contact you within 24 hours.')
    setFormData({ name: '', phone: '', email: '', service: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Top Bar */}
      <div className="bg-forest-dark text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-2 hover:text-harvest transition-colors">
              <Phone size={14} /> {BUSINESS.phone}
            </a>
            <span className="hidden md:flex items-center gap-2">
              <Clock size={14} /> {BUSINESS.hours}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <MapPin size={14} /> Serving Greater {BUSINESS.city} Area
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <a href="#" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center">
                <Leaf className="text-white" size={24} />
              </div>
              <div>
                <span className="font-display text-xl font-bold text-forest-dark">{BUSINESS.name}</span>
                <div className="flex items-center gap-1 text-xs text-harvest">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  <span className="text-stone ml-1">{BUSINESS.rating} ({BUSINESS.reviewCount} reviews)</span>
                </div>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              <a href="#services" className="text-sage hover:text-forest font-semibold transition-colors">Services</a>
              <a href="#about" className="text-sage hover:text-forest font-semibold transition-colors">About</a>
              <a href="#gallery" className="text-sage hover:text-forest font-semibold transition-colors">Gallery</a>
              <a href="#testimonials" className="text-sage hover:text-forest font-semibold transition-colors">Reviews</a>
              <a href="#contact" className="text-sage hover:text-forest font-semibold transition-colors">Contact</a>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a href={`tel:${BUSINESS.phoneRaw}`} className="bg-accent hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg flex items-center gap-2 transition-all shadow-lg hover:shadow-xl">
                <Phone size={18} /> Call Now
              </a>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="flex flex-col p-4 gap-4">
              <a href="#services" className="text-sage hover:text-forest font-semibold py-2" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#about" className="text-sage hover:text-forest font-semibold py-2" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#gallery" className="text-sage hover:text-forest font-semibold py-2" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
              <a href="#testimonials" className="text-sage hover:text-forest font-semibold py-2" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
              <a href="#contact" className="text-sage hover:text-forest font-semibold py-2" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <a href={`tel:${BUSINESS.phoneRaw}`} className="bg-accent text-white font-bold px-6 py-3 rounded-lg text-center">
                Call {BUSINESS.phone}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/hero.png"
            alt="Beautiful landscape by American Landscapes LLC"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-harvest mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              <span className="text-white ml-2">{BUSINESS.rating} Stars • {BUSINESS.reviewCount} Reviews</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              {BUSINESS.tagline}
            </h1>

            <p className="text-xl text-white/90 mb-8">
              Transform your outdoor space with Cincinnati's most trusted landscape professionals.
              From design to installation, we bring your vision to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-harvest hover:bg-harvest-dark text-forest-dark font-bold px-8 py-4 rounded-lg text-lg text-center transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                Get Free Estimate <ChevronRight size={20} />
              </a>
              <a href={`tel:${BUSINESS.phoneRaw}`} className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold px-8 py-4 rounded-lg text-lg text-center transition-all border border-white/30 flex items-center justify-center gap-2">
                <Phone size={20} /> {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-forest py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, text: "Licensed & Insured" },
              { icon: Award, text: "Award Winning" },
              { icon: BadgeCheck, text: "Locally Owned" },
              { icon: ThumbsUp, text: "Satisfaction Guaranteed" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-3 text-white">
                <item.icon size={24} className="text-harvest" />
                <span className="font-semibold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-forest font-semibold uppercase tracking-wider">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-forest-dark mt-2 mb-4">Our Services</h2>
            <p className="text-sage max-w-2xl mx-auto text-lg">
              From initial design to ongoing maintenance, we provide comprehensive landscaping solutions for residential and commercial properties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-moss/30">
                <div className="w-16 h-16 bg-forest/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-forest group-hover:scale-110 transition-all duration-300">
                  <service.icon className="text-forest group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="text-xl font-display font-bold text-forest-dark mb-3">{service.title}</h3>
                <p className="text-sage mb-4">{service.description}</p>
                <a href="#contact" className="text-forest font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Learn More <ChevronRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About & Stats Section */}
      <section id="about" className="py-20 bg-forest-dark text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-harvest font-semibold uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-6">Trusted Landscape Experts Since 2010</h2>
              <p className="text-white/80 text-lg mb-6">
                For over {BUSINESS.yearsInBusiness} years, American Landscapes LLC has been the premier choice for landscape design, installation, and maintenance in the Greater Cincinnati area. Our team of certified professionals brings creativity, expertise, and dedication to every project.
              </p>
              <p className="text-white/80 text-lg mb-8">
                We pride ourselves on transforming ordinary properties into extraordinary outdoor living spaces. From intimate garden retreats to expansive commercial installations, we deliver results that exceed expectations.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="bg-harvest hover:bg-harvest-dark text-forest-dark font-bold px-6 py-3 rounded-lg transition-all">
                  Start Your Project
                </a>
                <a href={`tel:${BUSINESS.phoneRaw}`} className="border border-white/30 hover:bg-white/10 text-white font-bold px-6 py-3 rounded-lg transition-all flex items-center gap-2">
                  <Phone size={18} /> {BUSINESS.phone}
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {STATS.map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all">
                  <div className="stat-number text-4xl md:text-5xl font-bold text-harvest mb-2">{stat.value}</div>
                  <div className="text-white/80 uppercase tracking-wider text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-forest font-semibold uppercase tracking-wider">Our Work</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-forest-dark mt-2 mb-4">Project Gallery</h2>
            <p className="text-sage max-w-2xl mx-auto text-lg">
              See the transformations we've created for homeowners and businesses throughout Cincinnati.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative group overflow-hidden rounded-2xl aspect-square">
                <img
                  src={`/images/gallery-${i}.png`}
                  alt={`Landscape project ${i}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-forest-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">View Project</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-forest font-semibold uppercase tracking-wider">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-forest-dark mt-2 mb-4">What Our Clients Say</h2>
            <div className="flex items-center justify-center gap-2 text-harvest">
              {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
              <span className="text-sage ml-2">{BUSINESS.rating} out of 5 based on {BUSINESS.reviewCount} reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-forest relative">
                <Quote className="absolute top-6 right-6 text-moss" size={40} />
                <div className="flex items-center gap-1 text-harvest mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-sage mb-6 text-lg leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-forest-dark">{testimonial.name}</div>
                  <div className="text-stone text-sm">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 bg-forest">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-harvest font-semibold uppercase tracking-wider">Service Area</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-2 mb-6">
            Proudly Serving Greater Cincinnati
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg mb-8">
            Located at {BUSINESS.address}, we provide professional landscaping services throughout the Cincinnati metro area including Anderson Township, Mt. Carmel, Milford, Loveland, and surrounding communities.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Anderson", "Mt. Carmel", "Milford", "Loveland", "Madeira", "Indian Hill", "Terrace Park", "Batavia"].map((area, i) => (
              <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-white text-sm">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-forest font-semibold uppercase tracking-wider">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-forest-dark mt-2 mb-6">
                Request Your Free Estimate
              </h2>
              <p className="text-sage text-lg mb-8">
                Ready to transform your outdoor space? Contact us today for a free, no-obligation consultation and estimate. We'll work with you to bring your vision to life.
              </p>

              <div className="space-y-6">
                <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-4 group">
                  <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-stone">Call Us Today</div>
                    <div className="text-xl font-bold text-forest-dark">{BUSINESS.phone}</div>
                  </div>
                </a>

                <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-4 group">
                  <div className="w-14 h-14 bg-forest rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-stone">Email Us</div>
                    <div className="text-xl font-bold text-forest-dark">{BUSINESS.email}</div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-harvest rounded-xl flex items-center justify-center">
                    <MapPin className="text-forest-dark" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-stone">Our Location</div>
                    <div className="text-xl font-bold text-forest-dark">{BUSINESS.address}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-moss rounded-xl flex items-center justify-center">
                    <Clock className="text-forest-dark" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-stone">Business Hours</div>
                    <div className="text-xl font-bold text-forest-dark">{BUSINESS.hours}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-cream p-8 md:p-10 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-display font-bold text-forest-dark mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name *"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-4 rounded-xl border border-moss focus:border-forest focus:ring-2 focus:ring-forest/20 transition-all outline-none bg-white"
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-4 rounded-xl border border-moss focus:border-forest focus:ring-2 focus:ring-forest/20 transition-all outline-none bg-white"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-4 rounded-xl border border-moss focus:border-forest focus:ring-2 focus:ring-forest/20 transition-all outline-none bg-white"
                />
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-4 rounded-xl border border-moss focus:border-forest focus:ring-2 focus:ring-forest/20 transition-all outline-none bg-white text-sage"
                >
                  <option value="">Select a Service</option>
                  {SERVICES.map((s, i) => <option key={i} value={s.title}>{s.title}</option>)}
                </select>
                <textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-4 rounded-xl border border-moss focus:border-forest focus:ring-2 focus:ring-forest/20 transition-all outline-none bg-white resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-forest hover:bg-forest-dark text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
                >
                  Request Free Estimate
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-accent py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <span className="text-white text-xl font-semibold">Need immediate service? We're here to help!</span>
            <a href={`tel:${BUSINESS.phoneRaw}`} className="bg-white text-accent font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
              <Phone size={20} /> Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center">
                  <Leaf className="text-white" size={24} />
                </div>
                <span className="font-display text-xl font-bold">{BUSINESS.name}</span>
              </div>
              <p className="text-white/70 mb-6">
                {BUSINESS.tagline}. Serving the Greater Cincinnati area with pride since 2010.
              </p>
              <div className="flex items-center gap-1 text-harvest">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                <span className="text-white/70 ml-2">{BUSINESS.rating}/5</span>
              </div>
            </div>

            <div>
              <h4 className="font-display text-lg font-bold mb-6">Our Services</h4>
              <ul className="space-y-3 text-white/70">
                {SERVICES.slice(0, 4).map((s, i) => (
                  <li key={i}><a href="#services" className="hover:text-harvest transition-colors">{s.title}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg font-bold mb-6">Service Areas</h4>
              <ul className="space-y-3 text-white/70">
                <li>Anderson Township</li>
                <li>Mt. Carmel</li>
                <li>Milford</li>
                <li>Loveland</li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg font-bold mb-6">Contact Info</h4>
              <ul className="space-y-4 text-white/70">
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-harvest" />
                  <a href={`tel:${BUSINESS.phoneRaw}`} className="hover:text-harvest transition-colors">{BUSINESS.phone}</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-harvest" />
                  <a href={`mailto:${BUSINESS.email}`} className="hover:text-harvest transition-colors">{BUSINESS.email}</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-harvest mt-1" />
                  <span>{BUSINESS.address}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/50 text-sm">
            <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved. | Licensed & Insured</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.15)] p-4 z-50">
        <div className="flex gap-3">
          <a href={`tel:${BUSINESS.phoneRaw}`} className="flex-1 bg-accent text-white font-bold py-3 rounded-lg text-center flex items-center justify-center gap-2">
            <Phone size={18} /> Call Now
          </a>
          <a href="#contact" className="flex-1 bg-forest text-white font-bold py-3 rounded-lg text-center">
            Get Quote
          </a>
        </div>
      </div>

      {/* Bottom padding for mobile sticky CTA */}
      <div className="lg:hidden h-20" />
    </div>
  )
}

export default App