import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, Phone, Linkedin, Instagram, Facebook } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/story", label: "My Story" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="group cursor-pointer">
              <div className="flex items-center gap-3">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQH7FQWo6WVY5w/profile-displayphoto-shrink_200_200/B56ZXYEFSZHEAY-/0/1743086704344?e=2147483647&v=beta&t=NnY9ExVm3sZhfO6PVfUsDesYenmVnFc3-awryVi8RRg"
                  alt="Kyle Hoversten"
                  className="w-10 h-10 rounded-full object-cover border border-gray-100 shadow-sm"
                />
                <div className="flex flex-col">
                  <span className="font-display text-2xl font-bold text-primary tracking-wide">
                    KYLE HOVERSTEN
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold group-hover:text-primary transition-colors">
                    Real Estate & Investing
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={cn(
                    "text-sm font-medium tracking-wide uppercase cursor-pointer hover:text-secondary transition-colors duration-200",
                    location === link.href ? "text-primary font-bold" : "text-gray-600"
                  )}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            
            <div className="h-6 w-px bg-gray-200 mx-4" />
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.linkedin.com/in/kyle-hoversten-907a956" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0077b5] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.instagram.com/kylehoverstenrealestate/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#E1306C] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/kyle.hoversten/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#1877F2] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <Button 
                variant="outline" 
                className="ml-2 border-primary text-primary hover:bg-primary hover:text-white transition-all rounded-full px-6"
                onClick={() => window.location.href = "tel:612-210-7777"}
              >
                <Phone className="w-4 h-4 mr-2" />
                (612) 210-7777
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top-5 duration-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={cn(
                    "block px-3 py-4 rounded-md text-base font-medium uppercase cursor-pointer transition-colors",
                    location === link.href
                      ? "text-primary bg-blue-50"
                      : "text-gray-600 hover:text-primary hover:bg-gray-50"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <div className="flex items-center space-x-6 px-3 py-4 border-t border-gray-100 mt-2">
              <a href="https://www.linkedin.com/in/kyle-hoversten-907a956" target="_blank" rel="noopener noreferrer">
                <Linkedin className="text-gray-400 hover:text-[#0077b5]" />
              </a>
              <a href="https://www.instagram.com/kylehoverstenrealestate/" target="_blank" rel="noopener noreferrer">
                <Instagram className="text-gray-400 hover:text-[#E1306C]" />
              </a>
              <a href="https://www.facebook.com/kylehoversten" target="_blank" rel="noopener noreferrer">
                <Facebook className="text-gray-400 hover:text-[#1877F2]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
