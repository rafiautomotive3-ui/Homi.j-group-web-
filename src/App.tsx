import { motion } from 'motion/react';
import {
  Activity,
  Building2,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Globe2,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  ShieldCheck,
  Wrench,
  X,
  Zap
} from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    title: 'HT & LT Works',
    description: 'Comprehensive High Tension and Low Tension electrical installations, commissioning, and maintenance.',
    icon: <Zap className="w-8 h-8 text-blue-600" />,
  },
  {
    title: 'Complete Electrical Projects',
    description: 'End-to-end execution of industrial, commercial, and specialized infrastructure electrical systems.',
    icon: <Building2 className="w-8 h-8 text-blue-600" />,
  },
  {
    title: 'Specialized Earthing',
    description: 'Advanced earthing systems ensuring absolute safety for complex electrical networks and sensitive equipment.',
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
  },
  {
    title: 'Clean Room Installations',
    description: 'Specialized electrical works for OP, ICU, and Semi-Research Rooms meeting stringent medical and scientific standards.',
    icon: <Activity className="w-8 h-8 text-blue-600" />,
  },
  {
    title: 'Optical Fiber Cabling',
    description: 'Expertise in precision optical fiber cable laying for highly robust telecommunication infrastructure.',
    icon: <Network className="w-8 h-8 text-blue-600" />,
  },
  {
    title: 'Custom Engineering Solutions',
    description: 'Tailored electrical engineering designs for modern technological and manufacturing facilities.',
    icon: <Cpu className="w-8 h-8 text-blue-600" />,
  },
];

const projects = [
  { name: 'Krishnapatnam Port', category: 'Infrastructure / Maritime' },
  { name: 'Bhogapuram International Airport', category: 'Infrastructure' },
  { name: 'IITM', category: 'Education / Institutional' },
  { name: 'Dodla Dairy', category: 'Industrial / Manufacturing' },
  { name: 'PepsiCo', category: 'Industrial / F&B' },
  { name: 'CCBF Alamadi', category: 'Government / Institutional' },
  { name: 'CCBF Hassaraghatta', category: 'Government / Institutional' },
  { name: 'VNAI (Venkata Narayana Active Ingredients)', category: 'Pharmaceuticals' },
  { name: 'Omantel', category: 'Telecom / Optical Fiber' },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:homijprojects@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-700 flex items-center justify-center rounded">
                <span className="text-white font-black italic text-xl">H.j</span>
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight text-blue-900 leading-none">homi.j projects</h1>
                <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-500 hidden sm:block mt-1">Electrical Excellence Specialists</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600 uppercase tracking-widest">
              <a href="#home" className="hover:text-blue-700 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-700 transition-colors">About Us</a>
              <a href="#services" className="hover:text-blue-700 transition-colors">Services</a>
              <a href="#projects" className="hover:text-blue-700 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-700 transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-blue-700 transition-colors">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-2 shadow-lg text-sm font-medium text-slate-600 uppercase tracking-widest">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 hover:text-blue-700">Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 hover:text-blue-700">About Us</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 hover:text-blue-700">Services</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 hover:text-blue-700">Projects</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 hover:text-blue-700">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-900 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-12 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 text-center md:text-left"
          >
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-6">
              <span className="bg-blue-600 text-white px-2 py-0.5 text-xs font-bold rounded uppercase tracking-widest">HT to LT Specialists</span>
              <span className="bg-amber-500 text-slate-900 px-2 py-0.5 text-xs font-bold rounded uppercase tracking-widest">Earthing Experts</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Expertise in all <span className="text-blue-400">Electrical Solutions.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed mx-auto md:mx-0">
              From High Tension to Low Tension, specialized clean room works to massive optical fiber networks. Delivering excellence across major infrastructure in <span className="text-white font-semibold underline decoration-blue-500">Oman</span> and <span className="text-white font-semibold underline decoration-blue-500">India</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contact" className="inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded font-bold transition-all shadow-lg shadow-blue-500/25 uppercase tracking-widest text-sm">
                Work With Us <ChevronRight className="w-5 h-5" />
              </a>
              <a href="#projects" className="inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-3.5 rounded font-bold transition-all uppercase tracking-widest text-sm">
                View Our Projects
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:grid md:col-span-4 grid-cols-2 gap-4"
          >
             <div className="bg-white/5 backdrop-blur-md p-6 rounded border border-white/10 text-center flex flex-col justify-center">
               <p className="text-blue-400 text-3xl font-bold mb-2">HT/LT</p>
               <p className="text-white text-[10px] uppercase font-bold tracking-widest leading-normal">End-to-End Projects</p>
             </div>
             <div className="bg-white/5 backdrop-blur-md p-6 rounded border border-white/10 text-center flex flex-col justify-center">
               <p className="text-blue-400 text-3xl font-bold mb-2">EARTH</p>
               <p className="text-white text-[10px] uppercase font-bold tracking-widest leading-normal">Specialized Systems</p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* About & Stats */}
      <section id="about" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">About Homi.j Projects</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Building the critical pathways that power the modern world.</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                As a premier electrical engineering and contracting company, Homi.j Projects is synonymous with reliability and technical excellence. We specialize in comprehensive electrical projects, handling everything from fundamental HT/LT power distribution to highly sensitive Clean Room integrations.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our legacy spans across top-tier clientele, successfully executing critical infrastructure like airports, leading educational institutes, large-scale dairy processing, pharmaceutical research facilities, and cross-national optical fiber networks.
              </p>
              
              <ul className="space-y-4">
                {['End-to-End Project Execution', 'Uncompromising Safety Standards', 'International Footprint (India & Oman)', 'Domain-specific Technical Expertise'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-5 h-5 bg-blue-100 text-blue-700 flex items-center justify-center rounded-full text-xs flex-shrink-0">✔</div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-6 rounded border border-slate-200 text-center flex flex-col justify-center">
                <div className="text-4xl font-extrabold text-blue-600 mb-2">10+</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold leading-normal">Years<br/>Experience</div>
              </div>
              <div className="bg-slate-50 p-6 rounded border border-slate-200 text-center mt-8 flex flex-col justify-center">
                <div className="text-4xl font-extrabold text-blue-600 mb-2">2</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold leading-normal">Countries<br/>of Operation</div>
              </div>
              <div className="bg-slate-50 p-6 rounded border border-slate-200 text-center flex flex-col justify-center">
                <div className="text-4xl font-extrabold text-blue-600 mb-2">50+</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold leading-normal">Mega Projects<br/>Delivered</div>
              </div>
              <div className="bg-slate-50 p-6 rounded border border-slate-200 text-center mt-8 flex flex-col justify-center">
                <div className="text-4xl font-extrabold text-blue-600 mb-2">100%</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold leading-normal">Commitment<br/>to Safety</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Comprehensive Core Services</h3>
            <p className="text-lg text-slate-600">
              We provide cutting-edge electrical solutions tailored for commercial, industrial, and highly sensitive technological environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded shadow-sm border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all group"
              >
                <div className="bg-blue-50 w-16 h-16 rounded flex items-center justify-center mb-6 border border-blue-100 group-hover:bg-blue-100 transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Projects Section */}
      <section id="projects" className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Portfolio Highlights</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Major Projects & Clients</h3>
              <p className="text-lg text-slate-600">
                Partnering with industry leaders to deliver electrical infrastructure that stands the test of time and performance.
              </p>
            </div>
            <div className="flex items-center gap-2 text-slate-500 bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
              <Globe2 className="w-5 h-5 text-blue-600" />
              <span className="font-bold text-xs uppercase tracking-widest">India & Oman</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-slate-50 p-6 rounded border-l-4 border-l-blue-500 border-y border-r border-slate-200 hover:bg-blue-50 transition-colors group cursor-default"
              >
                <div className="w-10 h-10 bg-white rounded shadow-sm border border-slate-200 flex items-center justify-center mb-4 group-hover:border-blue-300 transition-colors">
                  <Building2 className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="text-base font-bold text-slate-800 mb-1 leading-tight group-hover:text-blue-700 transition-colors">{project.name}</h4>
                <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mt-2">{project.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty callout */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Activity className="w-12 h-12 mx-auto mb-6 text-blue-200" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Specialized in Clean Room Electrical Works</h3>
          <p className="max-w-3xl mx-auto text-lg text-blue-100 font-medium leading-relaxed">
            Unmatched expertise in setting up faultless electrical systems for Operation Theaters (OP), Intensive Care Units (ICU), and Semi-Research Rooms where precision and reliability mean everything.
          </p>
        </div>
      </section>

      {/* Contact Section & Footer */}
      <section id="contact" className="pt-24 pb-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Direct Contact</h2>
              <h3 className="text-3xl font-bold text-blue-900 mb-6">Ready to start your next project?</h3>
              <p className="text-slate-600 mb-8 max-w-md text-base leading-relaxed">
                Reach out to us to discuss your electrical infrastructure requirements. Our engineers are ready to deliver excellence.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white border border-slate-200 rounded flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Phone className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold text-slate-400">Call Us</h4>
                    <a href="tel:+918978617793" className="text-blue-900 hover:text-blue-700 font-bold text-lg transition-colors">
                      +91 89786 17793
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white border border-slate-200 rounded flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Mail className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold text-slate-400">Email Us</h4>
                    <a href="mailto:homijprojects@gmail.com" className="text-slate-700 hover:text-blue-700 font-bold transition-colors break-all">
                      homijprojects@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white border border-slate-200 rounded flex items-center justify-center flex-shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold text-slate-400">Headquarters</h4>
                    <address className="text-sm text-slate-600 leading-relaxed not-italic font-medium border-l-2 border-slate-300 pl-3 mt-1">
                      Shaik Residency, House No: 25<br />
                      Kanaka Nagar 17th Cross<br />
                      RT Nagar Post, Pin: 560032
                    </address>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded shadow-sm border border-slate-200">
              <h3 className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-6">Send an Inquiry</h3>
              <form className="space-y-4" onSubmit={handleEmailSubmit}>
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Full Name</label>
                  <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full px-4 py-3 rounded border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Email Address</label>
                  <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="w-full px-4 py-3 rounded border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Message / Requirements</label>
                  <textarea id="message" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required className="w-full px-4 py-3 rounded border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm" placeholder="Describe your project needs..."></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3.5 rounded transition-colors text-sm uppercase tracking-widest shadow-md shadow-blue-700/20">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          {/* Footer Bottom */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
             <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-700 flex items-center justify-center rounded">
                <span className="text-white font-black italic text-sm">H.j</span>
              </div>
              <span className="font-bold tracking-tight text-blue-900">homi.j projects</span>
            </div>
            
            <div className="flex gap-4">
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                 <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Operating in India</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                 <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Operating in Oman</span>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
