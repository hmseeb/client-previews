import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Menu, X, Star, Shield, Award, BadgeCheck, ThumbsUp, TreeDeciduous, Leaf, Flower2, Scissors, Droplets, CloudLightning, ChevronRight, Quote } from 'lucide-react'

const BUSINESS = {
  name: "Purple Hawaii Landscaping",
  phone: "(808) 216-4613",
  phoneRaw: "8082164613",
  address: "41-310 Hihimanu St, Waimanalo, HI 96795",
  city: "Waimanalo",
  state: "Hawaii",
  hours: "Mon-Sat: 7AM-6PM",
  tagline: "Creating Paradise, One Yard at a Time",
  rating: 4.9,
  reviews: 127,
}

const SERVICES = [
  { icon: TreeDeciduous, title: "Landscape Design", desc: "Custom tropical garden designs that capture the spirit of Hawaii" },
  { icon: Leaf, title: "Lawn Maintenance", desc: "Regular mowing, edging, and lawn care to keep your property pristine" },
  { icon: Flower2, title: "Tropical Planting", desc: "Native Hawaiian plants, orchids, plumeria, and exotic flowers" },
  { icon: Scissors, title: "Tree Trimming", desc: "Professional pruning and shaping for palms and tropical trees" },
  { icon: Droplets, title: "Irrigation Systems", desc: "Smart irrigation installation and repair for water efficiency" },
  { icon: CloudLightning, title: "Storm Cleanup", desc: "Fast response cleanup after tropical storms and heavy winds" },
]

const TESTIMONIALS = [
  { name: "Kailani M.", location: "Waimanalo", text: "They transformed our backyard into a tropical paradise! The attention to detail and knowledge of native plants is incredible.", rating: 5 },
  { name: "David & Sarah K.", location: "Kailua", text: "Best landscaping company on the windward side. Professional, reliable, and their designs are stunning.", rating: 5 },
  { name: "Robert L.", location: "Hawaii Kai", text: "Purple Hawaii has maintained our property for 3 years. Always on time, always excellent work. Highly recommend!", rating: 5 },
]

const GALLERY = [
  "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80",
  "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=600&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
  "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=600&q=80",
  "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=600&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
]

function TopBar() {
  return (
    <div className="bg-purple-dark text-white text-sm py-2">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-4 flex-wrap">
          <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-1 hover:text-harvest transition-colors">
            <Phone size={14} /> {BUSINESS.phone}
          </a>
          <span className="hidden sm:flex items-center gap-1">
            <Clock size={14} /> {BUSINESS.hours}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin size={14} /> {BUSINESS.city}, {BUSINESS.state}
        </div>
      </div>
    </div>
  )
}

function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-display font-bold text-purple">
          🌺 Purple Hawaii
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sage hover:text-purple transition-colors font-medium">Services</a>
          <a href="#about" className="text-sage hover:text-purple transition-colors font-medium">About</a>
          <a href="#gallery" className="text-sage hover:text-purple transition-colors font-medium">Gallery</a>
          <a href="#testimonials" className="text-sage hover:text-purple transition-colors font-medium">Reviews</a>
          <a href="#contact" className="bg-purple hover:bg-purple-dark text-white font-semibold px-5 py-2.5 rounded-lg transition-colors">Get Free Quote</a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-purple">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-moss px-4 py-4 flex flex-col gap-4">
          <a href="#services" onClick={() => setOpen(false)} className="text-sage hover:text-purple">Services</a>
          <a href="#about" onClick={() => setOpen(false)} className="text-sage hover:text-purple">About</a>
          <a href="#gallery" onClick={() => setOpen(false)} className="text-sage hover:text-purple">Gallery</a>
          <a href="#testimonials" onClick={() => setOpen(false)} className="text-sage hover:text-purple">Reviews</a>
          <a href="#contact" onClick={() => setOpen(false)} className="bg-purple text-white text-center font-semibold px-5 py-2.5 rounded-lg">Get Free Quote</a>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center" style={{
      backgroundImage: `linear-gradient(to right, rgba(107, 33, 168, 0.85), rgba(107, 33, 168, 0.4)), url('https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920&q=80')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="max-w-7xl mx-auto px-4 py-20 text-white">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#D4A84B" color="#D4A84B" />)}
            <span className="ml-2 text-harvest font-semibold">{BUSINESS.rating} ({BUSINESS.reviews} reviews)</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Professional Landscaping in {BUSINESS.city}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            {BUSINESS.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-harvest hover:bg-harvest-dark text-purple-dark font-bold px-8 py-4 rounded-lg text-lg text-center shadow-lg transition-all hover:scale-105">
              Get Your Free Quote
            </a>
            <a href={`tel:${BUSINESS.phoneRaw}`} className="bg-white/20 hover:bg-white/30 backdrop-blur text-white font-bold px-8 py-4 rounded-lg text-lg text-center flex items-center justify-center gap-2 transition-all">
              <Phone size={20} /> {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustBar() {
  const badges = [
    { icon: Shield, text: "Licensed & Insured" },
    { icon: Award, text: "20+ Years Experience" },
    { icon: BadgeCheck, text: "Locally Owned" },
    { icon: ThumbsUp, text: "100% Satisfaction" },
  ]
  return (
    <section className="bg-cream py-6 border-y border-moss">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {badges.map((b, i) => (
            <div key={i} className="flex items-center gap-2 text-purple">
              <b.icon size={24} className="text-purple-light" />
              <span className="font-semibold">{b.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-purple-dark mb-4">Our Services</h2>
          <p className="text-sage text-lg max-w-2xl mx-auto">From complete landscape transformations to regular maintenance, we bring paradise to your property.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-moss shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-purple/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple/20 transition-colors">
                <s.icon size={28} className="text-purple" />
              </div>
              <h3 className="text-xl font-display font-bold text-purple-dark mb-2">{s.title}</h3>
              <p className="text-sage mb-4">{s.desc}</p>
              <a href="#contact" className="text-purple font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                Learn More <ChevronRight size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  const stats = [
    { num: "20+", label: "Years Experience" },
    { num: "500+", label: "Happy Customers" },
    { num: "4.9", label: "Star Rating" },
    { num: "24hr", label: "Emergency Response" },
  ]
  return (
    <section id="about" className="py-20 bg-purple-dark text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Why Choose Purple Hawaii?</h2>
            <p className="text-white/80 text-lg mb-6">
              Born and raised on Oahu, we understand the unique beauty and challenges of Hawaiian landscaping. Our team combines decades of experience with a deep love for our islands' native plants and tropical aesthetics.
            </p>
            <p className="text-white/80 text-lg mb-8">
              From Waimanalo to Hawaii Kai, we've transformed hundreds of properties into stunning outdoor spaces that honor Hawaii's natural beauty while meeting the practical needs of island living.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 bg-harvest hover:bg-harvest-dark text-purple-dark font-bold px-6 py-3 rounded-lg transition-colors">
              Schedule Free Consultation <ChevronRight size={20} />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="stat-number text-4xl md:text-5xl font-bold text-harvest mb-2">{s.num}</div>
                <div className="text-white/70 uppercase text-sm tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-purple-dark mb-4">Our Recent Work</h2>
          <p className="text-sage text-lg">See the transformations we've created across Oahu</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY.map((img, i) => (
            <div key={i} className="aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img src={img} alt={`Project ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-purple-dark mb-4">What Our Customers Say</h2>
          <p className="text-sage text-lg">Real reviews from real neighbors</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border-l-4 border-purple shadow-md">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => <Star key={j} size={18} fill="#D4A84B" color="#D4A84B" />)}
              </div>
              <Quote size={32} className="text-purple/20 mb-2" />
              <p className="text-sage mb-4 italic">"{t.text}"</p>
              <div className="font-semibold text-purple-dark">{t.name}</div>
              <div className="text-stone text-sm">{t.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceArea() {
  return (
    <section className="py-20 bg-purple/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-purple-dark mb-6">Serving the Windward Side & Beyond</h2>
            <p className="text-sage text-lg mb-6">
              Based in Waimanalo, we proudly serve communities across Oahu's windward and east sides.
            </p>
            <div className="grid grid-cols-2 gap-2 text-sage">
              {["Waimanalo", "Kailua", "Kaneohe", "Hawaii Kai", "Enchanted Lake", "Lanikai", "Maunawili", "Olomana"].map((area, i) => (
                <div key={i} className="flex items-center gap-2">
                  <MapPin size={16} className="text-purple" /> {area}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59588.40461393!2d-157.7447!3d21.3397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c001389d6d6daf5%3A0x84c6e5898e9a4d95!2sWaimanalo%2C%20HI%2096795!5e0!3m2!1sen!2sus!4v1705000000000!5m2!1sen!2sus"
              width="100%" 
              height="350" 
              style={{border: 0}} 
              allowFullScreen="" 
              loading="lazy"
              title="Service Area Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-purple-dark mb-6">Get Your Free Quote</h2>
            <p className="text-sage text-lg mb-8">
              Ready to transform your outdoor space? Contact us today for a free, no-obligation consultation.
            </p>
            <div className="space-y-4">
              <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-4 text-lg text-purple-dark hover:text-purple transition-colors">
                <div className="w-12 h-12 bg-purple/10 rounded-xl flex items-center justify-center">
                  <Phone size={24} className="text-purple" />
                </div>
                <div>
                  <div className="font-semibold">{BUSINESS.phone}</div>
                  <div className="text-stone text-sm">Call or Text</div>
                </div>
              </a>
              <a href={`mailto:info@purplehawaii.com`} className="flex items-center gap-4 text-lg text-purple-dark hover:text-purple transition-colors">
                <div className="w-12 h-12 bg-purple/10 rounded-xl flex items-center justify-center">
                  <Mail size={24} className="text-purple" />
                </div>
                <div>
                  <div className="font-semibold">info@purplehawaii.com</div>
                  <div className="text-stone text-sm">Email Us</div>
                </div>
              </a>
              <div className="flex items-center gap-4 text-lg text-purple-dark">
                <div className="w-12 h-12 bg-purple/10 rounded-xl flex items-center justify-center">
                  <MapPin size={24} className="text-purple" />
                </div>
                <div>
                  <div className="font-semibold">{BUSINESS.address}</div>
                  <div className="text-stone text-sm">Main Office</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-lg text-purple-dark">
                <div className="w-12 h-12 bg-purple/10 rounded-xl flex items-center justify-center">
                  <Clock size={24} className="text-purple" />
                </div>
                <div>
                  <div className="font-semibold">{BUSINESS.hours}</div>
                  <div className="text-stone text-sm">Business Hours</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-cream p-8 rounded-2xl">
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-moss focus:border-purple focus:ring-2 focus:ring-purple/20 transition-all outline-none"
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                value={form.phone}
                onChange={(e) => setForm({...form, phone: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-moss focus:border-purple focus:ring-2 focus:ring-purple/20 transition-all outline-none"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-moss focus:border-purple focus:ring-2 focus:ring-purple/20 transition-all outline-none"
              />
              <select 
                value={form.service}
                onChange={(e) => setForm({...form, service: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-moss focus:border-purple focus:ring-2 focus:ring-purple/20 transition-all outline-none text-sage"
              >
                <option value="">Select a Service</option>
                {SERVICES.map((s, i) => <option key={i} value={s.title}>{s.title}</option>)}
              </select>
              <textarea 
                placeholder="Tell us about your project..." 
                rows={4}
                value={form.message}
                onChange={(e) => setForm({...form, message: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-moss focus:border-purple focus:ring-2 focus:ring-purple/20 transition-all outline-none resize-none"
              ></textarea>
              <button className="w-full bg-purple hover:bg-purple-dark text-white font-bold py-4 rounded-xl transition-colors text-lg shadow-lg hover:shadow-xl">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function EmergencyBanner() {
  return (
    <section className="bg-accent py-4">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-white font-semibold">
          🌴 <span className="font-bold">Storm Damage?</span> We offer 24/7 emergency cleanup services. 
          <a href={`tel:${BUSINESS.phoneRaw}`} className="underline ml-2 hover:no-underline">Call Now: {BUSINESS.phone}</a>
        </p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-purple-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-display font-bold mb-4">🌺 Purple Hawaii</div>
            <p className="text-white/70">Creating paradise, one yard at a time. Serving Oahu's windward side with professional landscaping services.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="space-y-2 text-white/70">
              <a href="#services" className="block hover:text-harvest transition-colors">Services</a>
              <a href="#about" className="block hover:text-harvest transition-colors">About Us</a>
              <a href="#gallery" className="block hover:text-harvest transition-colors">Gallery</a>
              <a href="#contact" className="block hover:text-harvest transition-colors">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <div className="space-y-2 text-white/70">
              <p>{BUSINESS.phone}</p>
              <p>{BUSINESS.address}</p>
              <p>{BUSINESS.hours}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved. | Licensed & Insured
        </div>
      </div>
    </footer>
  )
}

function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-moss shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-4 md:hidden z-50">
      <div className="flex gap-3">
        <a href={`tel:${BUSINESS.phoneRaw}`} className="flex-1 bg-accent text-white font-bold py-3 rounded-lg text-center flex items-center justify-center gap-2">
          <Phone size={20} /> Call Now
        </a>
        <a href="#contact" className="flex-1 bg-purple text-white font-bold py-3 rounded-lg text-center">
          Get Quote
        </a>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="pb-20 md:pb-0">
      <TopBar />
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <ServiceArea />
      <Contact />
      <EmergencyBanner />
      <Footer />
      <MobileStickyCTA />
    </div>
  )
}