import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, PlayCircle, Mail, Phone, Camera } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Camera className="w-8 h-8 text-gold" />
              <span className="text-xl font-display font-semibold text-cream">
                [Buseness name]
              </span>
            </Link>
            <p className="text-gray-300 font-serif leading-relaxed max-w-md">
              Crafting cinematic wedding films that capture the essence of your love story. 
              Every moment, every emotion, preserved forever with artistic vision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-display font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/portfolio" className="block text-gray-300 hover:text-cream font-serif transition-all duration-300 hover:translate-x-1">
                Portfolio
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-cream font-serif transition-all duration-300 hover:translate-x-1">
                About
              </Link>
              <Link to="/investment" className="block text-gray-300 hover:text-cream font-serif transition-all duration-300 hover:translate-x-1">
                Investment
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-cream font-serif transition-all duration-300 hover:translate-x-1">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-gold font-display font-semibold mb-4">Connect</h3>
            <div className="space-y-3">
              <a href="mailto:hello@businessname.com" className="flex items-center space-x-2 text-gray-300 hover:text-cream transition-all duration-300 hover:translate-x-1">
                <Mail className="w-4 h-4" />
                <span className="font-serif">hello@businessname.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center space-x-2 text-gray-300 hover:text-cream transition-all duration-300 hover:translate-x-1">
                <Phone className="w-4 h-4" />
                <span className="font-serif">+1 (234) 567-8900</span>
              </a>
              <div className="flex space-x-4 pt-2">
                <a href="https://instagram.com" className="text-gray-300 hover:text-gold transition-all duration-300 hover:scale-110">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://vimeo.com" className="text-gray-300 hover:text-gold transition-all duration-300 hover:scale-110">
                  <PlayCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 font-serif">
            © {currentYear} [safloot]. All rights reserved. | Crafted with love for love stories.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;