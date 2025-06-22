
import React, { useState } from 'react';
import { Search, Menu, User, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');

  const languages = ['EN', 'KR', 'JP', 'CN'];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TravelHub
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Accommodations</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Activities</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Restaurants</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Reviews</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Coupons</a>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(languages[(languages.indexOf(language) + 1) % languages.length])}
                className="flex items-center space-x-1"
              >
                <Globe className="w-4 h-4" />
                <span className="font-medium">{language}</span>
              </Button>
            </div>

            {/* Login/Signup */}
            <Button variant="ghost" size="sm" className="hidden md:flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Login</span>
            </Button>

            {/* Mobile Menu */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Accommodations</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Activities</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Restaurants</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Reviews</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Coupons</a>
              <Button variant="ghost" size="sm" className="flex items-center space-x-2 w-fit">
                <User className="w-4 h-4" />
                <span>Login</span>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
