import { useState } from 'react'
import {
  Phone, Mail, MapPin, Clock, Menu, X, Star, ChevronRight,
  Droplets, Leaf, TreeDeciduous, Wrench, Shield, Award, BadgeCheck, ThumbsUp,
  Quote, CheckCircle2, Users, Timer, Sparkles
} from 'lucide-react'

const BUSINESS = {
  name: 'On Time Landscaping',
  phone: '702-348-8399',
  email: 'info@ontimevegas.com',
  address: 'PO Box 401531, Las Vegas, NV 89140',
  areas: 'Las Vegas, North Las Vegas, Henderson, Summerlin, Mountains Edge, Southern Highlands, Green Valley, Pahrump',
  since: '2008',
  licenseC10: 'C10 0070688',
  licenseC6: '7143',
  rating: '4.9',
  reviews: '139',
}

const SERVICES = [
  { icon: Droplets, title: 'Irrigation Leak Repair', description: 'Emergency and scheduled repair for sprinkler systems, drip irrigation, PVC, black poly, and backflow/PVB replacement.' },
  { icon: Wrench, title: 'Sprinkler System Service', description: 'Complete sprinkler head replacement, timer/clock installation, valve repair, and system programming.' },
  { icon: Leaf, title: 'Weed Control', description: 'Licensed herbicide application (C6 #7143). Safe, legal, and effective weed management for all property types.' },
  { icon: TreeDeciduous, title: 'Landscaping Installation', description: 'Installing rock, bushes, trees, and vegetation. Creating beautiful desert-adapted landscapes.' },
  { icon: Sparkles, title: 'SNWA Grass Conversions', description: 'Convert water-wasting grass to water-efficient desert landscaping. Qualify for rebates and save on water bills.' },
  { icon: Users, title: 'HOA & Commercial', description: 'Maintenance contracts, one-time jobs, and violation remediation for HOA, commercial, and multi-family properties.' },
]

const TESTIMONIALS = [
  { name: 'Jazzmon Nikol', date: '12/17/2025', text: 'I spoke with Matthew, the owner of the company. He was incredibly helpful and professional. Highly recommend!', rating: 5 },
  { name: 'Philldeees', date: '12/2/2025', text: 'Matthew was honest and very helpful. Great experience from start to finish.', rating: 5 },
  { name: 'Rob Goldman', date: '11/18/2025', text: 'Matthew reached out immediately and helped resolve our irrigation issues quickly. Outstanding service!', rating: 5 },
]

const TRUST_BADGES = [
  { icon: Shield, label: 'Licensed & Insured' },
  { icon: Award, label: 'Since 2008' },
  { icon: BadgeCheck, label: 'Bonded Contractor' },
  { icon: ThumbsUp, label: '139+ 5-Star Reviews' },
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', property: '', service: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = `mailto:${BUSINESS.email}?subject=Service Request from ${formData.name}&body=Name: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AProperty Address: ${formData.property}%0AService: ${formData.service}%0AMessage: ${formData.message}`
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Top Bar */}
      <div className="bg-forest-dark text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-6 flex-wrap">
            <a href={`tel:${BUSINESS.phone}`} className="flex items-center gap-2 hover:text-harvest transition-colors">
              <Phone size={14} /> <span className="font-semibold">{BUSINESS.phone}</span>
            </a>
            <a href={`mailto:${BUSINESS.email}`} className="hidden sm:flex items-center gap-2 hover:text-harvest transition-colors">
              <Mail size={14} /> {BUSINESS.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <span className="hidden md:inline">Serving the Las Vegas Valley</span>
            <span className="md:hidden">Las Vegas, NV</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-forest rounded-full flex items-center justify-center">
                <Droplets className="text-white" size={20} />
              </div>
              <div>
                <span className="font-display text-lg font-bold text-forest-dark block leading-tight">{BUSINESS.name}</span>
                <span className="text-xs text-sage">Since {BUSINESS.since}</span>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              <a href="#services" className="text-sage hover:text-forest font-medium transition-colors">Services</a>
              <a href="#about" className="text-sage hover:text-forest font-medium transition-colors">About</a>
              <a href="#gallery" className="text-sage hover:text-forest font-medium transition-colors">Gallery</a>
              <a href="#testimonials" className="text-sage hover:text-forest font-medium transition-colors">Reviews</a>
              <a href="#contact" className="text-sage hover:text-forest font-medium transition-colors">Contact</a>
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a href={`tel:${BUSINESS.phone}`} className="bg-accent hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded-lg shadow-lg transition-all flex items-center gap-2">
                <Phone size={18} /> Call Now
              </a>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-forest">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-moss py-4 px-4">
            <div className="flex flex-col gap-4">
              <a href="#services" className="text-sage hover:text-forest font-medium" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#about" className="text-sage hover:text-forest font-medium" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#gallery" className="text-sage hover:text-forest font-medium" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
              <a href="#testimonials" className="text-sage hover:text-forest font-medium" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
              <a href="#contact" className="text-sage hover:text-forest font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <a href={`tel:${BUSINESS.phone}`} className="bg-accent text-white font-bold px-5 py-3 rounded-lg text-center">
                Call {BUSINESS.phone}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img src="/images/hero.png" alt="Professional landscaping in Las Vegas" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/70 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-harvest">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <span className="text-white/90 text-sm">{BUSINESS.rating} stars • {BUSINESS.reviews} Google Reviews</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 leading-tight">
              Las Vegas Landscaping & Irrigation Repair
            </h1>

            <p className="text-xl text-white/90 mb-8">
              Licensed, bonded & insured since 2008. Emergency irrigation leak repair, weed control, and professional landscaping services throughout the Las Vegas Valley.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#contact" className="bg-harvest hover:bg-harvest-dark text-forest-dark font-bold px-8 py-4 rounded-lg shadow-xl transition-all text-center text-lg flex items-center justify-center gap-2">
                Get Free Estimate <ChevronRight size={20} />
              </a>
              <a href={`tel:${BUSINESS.phone}`} className="bg-accent hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg shadow-xl transition-all text-center text-lg flex items-center justify-center gap-2">
                <Phone size={20} /> {BUSINESS.phone}
              </a>
            </div>

            <div className="flex flex-wrap gap-4 text-white/80 text-sm">
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-harvest" /> Licensed C10 Contractor</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-harvest" /> Same Day Service Available</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-harvest" /> Free Estimates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-forest-dark py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TRUST_BADGES.map((badge, i) => (
              <div key={i} className="flex items-center justify-center gap-3 text-white">
                <badge.icon className="text-harvest" size={28} />
                <span className="font-semibold">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-forest-dark mb-4">Our Professional Services</h2>
            <p className="text-sage text-lg max-w-2xl mx-auto">
              From emergency irrigation repairs to complete landscape transformations, we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <div key={i} className="bg-cream p-6 rounded-xl border border-moss hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-forest/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="text-forest" size={28} />
                </div>
                <h3 className="text-xl font-display font-bold text-forest-dark mb-2">{service.title}</h3>
                <p className="text-sage mb-4">{service.description}</p>
                <a href="#contact" className="text-forest hover:text-forest-dark font-semibold flex items-center gap-1 transition-colors">
                  Request Service <ChevronRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Stats Section */}
      <section id="about" className="py-20 bg-forest">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Why Choose On Time Landscaping?</h2>
              <p className="text-white/90 text-lg mb-6">
                Prior to starting On Time Landscaping in 2008, I was frustrated with landscapers not living up to their promises and poor customer service. I wanted to help other people.
              </p>
              <p className="text-white/90 text-lg mb-6">
                Customers deal directly with me, the owner. No middle management, no runaround. I continue working hard every day to make my customers' lives easier by taking care of their landscaping and irrigation issues.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-harvest mt-1 flex-shrink-0" size={20} />
                  <span>NV Contractor License C10 #0070688 • Bid limit $50,000</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-harvest mt-1 flex-shrink-0" size={20} />
                  <span>NV Dept. of Agriculture C6 License #7143 for weed control</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-harvest mt-1 flex-shrink-0" size={20} />
                  <span>Featured on A&E's "Flipping Vegas"</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="stat-number text-5xl font-bold text-harvest mb-2">17+</div>
                <div className="text-white/80 uppercase text-sm tracking-wide">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="stat-number text-5xl font-bold text-harvest mb-2">{BUSINESS.reviews}+</div>
                <div className="text-white/80 uppercase text-sm tracking-wide">5-Star Reviews</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="stat-number text-5xl font-bold text-harvest mb-2">{BUSINESS.rating}</div>
                <div className="text-white/80 uppercase text-sm tracking-wide">Google Rating</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="stat-number text-5xl font-bold text-harvest mb-2">Same</div>
                <div className="text-white/80 uppercase text-sm tracking-wide">Day Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-forest-dark mb-4">Our Work</h2>
            <p className="text-sage text-lg">See the quality of our landscaping and irrigation projects</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={`/images/gallery-${i}.png`}
                  alt={`Project ${i}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-forest-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-semibold">View Project</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-forest-dark mb-4">What Our Customers Say</h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex text-harvest">
                {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
              </div>
              <span className="text-sage text-lg">{BUSINESS.rating} average from {BUSINESS.reviews} reviews on Google</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-cream p-6 rounded-xl border-l-4 border-forest shadow-md">
                <div className="flex text-harvest mb-4">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
                </div>
                <Quote className="text-forest/20 mb-2" size={32} />
                <p className="text-sage mb-4 italic">"{t.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-forest-dark">{t.name}</div>
                    <div className="text-sm text-stone">{t.date}</div>
                  </div>
                  <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 bg-forest-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Service Areas</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              We proudly serve the entire Las Vegas Valley and surrounding communities
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {['Las Vegas', 'North Las Vegas', 'Henderson', 'Summerlin', 'Mountains Edge', 'Southern Highlands', 'Green Valley', 'Pahrump', 'Anthem', 'Aliante', 'Centennial', 'Rhodes Ranch', 'Spring Valley', 'Sun City'].map((area, i) => (
              <span key={i} className="bg-white/10 text-white px-4 py-2 rounded-full text-sm">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-forest-dark mb-6">Get Your Free Estimate</h2>
              <p className="text-sage text-lg mb-8">
                Contact us today for a free, no-obligation estimate. We'll respond quickly to help with your landscaping or irrigation needs.
              </p>

              <div className="space-y-4 mb-8">
                <a href={`tel:${BUSINESS.phone}`} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-forest-dark">{BUSINESS.phone}</div>
                    <div className="text-sm text-sage">Call for immediate assistance</div>
                  </div>
                </a>

                <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-forest-dark">{BUSINESS.email}</div>
                    <div className="text-sm text-sage">Email us photos for faster quotes</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-harvest rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-forest-dark">Las Vegas Valley</div>
                    <div className="text-sm text-sage">{BUSINESS.address}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-xl font-display font-bold text-forest-dark mb-6">Request a Quote</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-moss focus:border-forest focus:ring-2 focus:ring-forest/20 transition-all outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone *"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-moss focus:border-forest focus:ring-2 focus:ring-forest/20 transition-all outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-moss focus:border-forest focus:ring-2 focus:ring-forest/20 transition-all outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Property Address *"
                    required
                    value={formData.property}
                    onChange={(e) => setFormData({ ...formData, property: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-moss focus:border-forest focus:ring-2 focus:ring-forest/20 transition-all outline-none"
                  />
                </div>
                <div>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-moss focus:border-forest focus:ring-2 focus:ring-forest/20 transition-all outline-none bg-white"
                  >
                    <option value="">Select Service</option>
                    <option value="Irrigation Leak Repair">Irrigation Leak Repair</option>
                    <option value="Sprinkler System Service">Sprinkler System Service</option>
                    <option value="Weed Control">Weed Control</option>
                    <option value="Landscaping Installation">Landscaping Installation</option>
                    <option value="SNWA Grass Conversion">SNWA Grass Conversion</option>
                    <option value="HOA/Commercial Maintenance">HOA/Commercial Maintenance</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your project... Photos can be emailed to us for faster quotes."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-moss focus:border-forest focus:ring-2 focus:ring-forest/20 transition-all outline-none resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-harvest hover:bg-harvest-dark text-forest-dark font-bold py-4 rounded-xl shadow-lg transition-all text-lg"
                >
                  Get Free Estimate
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-accent py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white text-center">
            <Timer size={28} />
            <span className="text-xl font-semibold">Emergency Irrigation Leak? Same Day Service Available!</span>
            <a href={`tel:${BUSINESS.phone}`} className="bg-white text-accent font-bold px-6 py-2 rounded-lg hover:bg-cream transition-all">
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-forest rounded-full flex items-center justify-center">
                  <Droplets className="text-white" size={20} />
                </div>
                <span className="font-display text-lg font-bold">{BUSINESS.name}</span>
              </div>
              <p className="text-white/70 mb-4">Licensed, bonded & insured landscaping contractor serving the Las Vegas Valley since 2008.</p>
              <div className="space-y-1 text-sm text-white/70">
                <div>NV Contractor License: {BUSINESS.licenseC10}</div>
                <div>NV Dept. of Agriculture: C6 #{BUSINESS.licenseC6}</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-white/70">
                <li>Irrigation Leak Repair</li>
                <li>Sprinkler System Service</li>
                <li>Weed Control</li>
                <li>Landscaping Installation</li>
                <li>SNWA Grass Conversions</li>
                <li>HOA & Commercial</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-center gap-2">
                  <Phone size={16} /> <a href={`tel:${BUSINESS.phone}`} className="hover:text-harvest">{BUSINESS.phone}</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} /> <a href={`mailto:${BUSINESS.email}`} className="hover:text-harvest">{BUSINESS.email}</a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="mt-1" /> {BUSINESS.address}
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
            <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-moss shadow-[0_-4px_20px_rgba(0,0,0,0.15)] p-3 z-50">
        <div className="flex gap-2">
          <a href={`tel:${BUSINESS.phone}`} className="flex-1 bg-accent text-white font-bold py-3 rounded-lg text-center flex items-center justify-center gap-2">
            <Phone size={18} /> Call Now
          </a>
          <a href="#contact" className="flex-1 bg-harvest text-forest-dark font-bold py-3 rounded-lg text-center">
            Get Quote
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
