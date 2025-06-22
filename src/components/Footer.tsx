
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
                <span className="text-white font-bold text-sm">여</span>
              </div>
              <span className="text-xl font-bold">여행허브</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              한국과 전세계의 멋진 숙박시설, 액티비티, 그리고 특별한 경험을 
              발견할 수 있는 최고의 여행 파트너입니다.
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
            <h3 className="text-lg font-semibold">빠른 링크</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">숙박시설</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">액티비티</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">맛집</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">리뷰</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">쿠폰</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">고객지원</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">도움말 센터</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">문의하기</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">개인정보처리방침</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">이용약관</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">파트너 문의</a></li>
            </ul>
          </div>

          {/* Contact & Apps */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">연락처</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">02-1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">support@travelhub.co.kr</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">서울특별시, 대한민국</span>
              </div>
            </div>
            
            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-2">앱 다운로드</h4>
              <div className="flex space-x-2">
                <div className="bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg cursor-pointer transition-colors">
                  <span className="text-xs">iOS 앱</span>
                </div>
                <div className="bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg cursor-pointer transition-colors">
                  <span className="text-xs">안드로이드</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 여행허브. 모든 권리 보유. 전세계 여행자들의 사랑으로 만들어졌습니다. ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
