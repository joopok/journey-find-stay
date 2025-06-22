
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-xl font-bold">TravelHub</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your ultimate travel companion for discovering amazing accommodations, 
              activities, and experiences across Korea and beyond.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Accommodations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Activities</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Restaurants</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Reviews</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Coupons</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Partner Inquiry</a></li>
            </ul>
          </div>

          {/* Contact & Apps */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">+82 2-1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">support@travelhub.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">Seoul, South Korea</span>
              </div>
            </div>
            
            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-2">Download Our App</h4>
              <div className="flex space-x-2">
                <div className="bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg cursor-pointer transition-colors">
                  <span className="text-xs">iOS App</span>
                </div>
                <div className="bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg cursor-pointer transition-colors">
                  <span className="text-xs">Android</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 TravelHub. All rights reserved. Made with ❤️ for travelers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
