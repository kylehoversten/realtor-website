import { Link } from "wouter";
import { Mail, Phone, MapPin, Linkedin, Instagram, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-2xl font-bold tracking-wider">KYLE HOVERSTEN</h3>
              <p className="text-secondary text-sm font-bold tracking-[0.2em] uppercase mt-1">Real Estate & Investing</p>
            </div>
            <p className="text-gray-300 leading-relaxed font-light">
              Providing professional, results-driven real estate services in Shakopee, MN and surrounding areas.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://www.linkedin.com/in/kyle-hoversten-907a956" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://www.instagram.com/kylehoverstenrealestate/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/story" className="text-gray-300 hover:text-secondary transition-colors flex items-center group cursor-pointer">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all duration-300" />
                  My Story
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-secondary transition-colors flex items-center group cursor-pointer">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all duration-300" />
                  Market Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-secondary transition-colors flex items-center group cursor-pointer">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all duration-300" />
                  Contact
                </Link>
              </li>
              <li>
                <a href="https://www.remax.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-secondary transition-colors flex items-center group">
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all duration-300" />
                  ReMax Listings
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-secondary w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Shakopee, Minnesota</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-secondary w-5 h-5 mr-3 flex-shrink-0" />
                <a href="tel:612-210-7777" className="text-gray-300 hover:text-white transition-colors">
                  (612) 210-7777
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="text-secondary w-5 h-5 mr-3 flex-shrink-0" />
                <a href="mailto:khoversten@comcast.net" className="text-gray-300 hover:text-white transition-colors">
                  khoversten@comcast.net
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="bg-primary-foreground/5 p-6 rounded-lg border border-white/10">
            <h4 className="font-display text-lg font-bold mb-3">Ready to Move?</h4>
            <p className="text-gray-300 text-sm mb-4">
              Let's discuss your real estate goals today.
            </p>
            <Link href="/contact">
              <button className="w-full bg-secondary text-primary font-bold py-3 rounded hover:bg-white transition-colors duration-300">
                Book Consultation
              </button>
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Kyle Hoversten. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
             <span className="text-gray-600 text-xs uppercase tracking-widest font-bold">ReMax Advantage Plus</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
