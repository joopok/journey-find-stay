
import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const HeroSection = () => {
  const [searchData, setSearchData] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: '2'
  });

  const handleSearch = () => {
    console.log('검색 데이터:', searchData);
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            제주도 여름 여행을 떠나세요
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in">
            프리미엄 숙박시설 최대 40% 할인
          </p>

          {/* Search Widget */}
          <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto animate-scale-in">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="어디로 떠나세요?"
                  className="pl-10 h-12 border-gray-200 focus:border-blue-500"
                  value={searchData.destination}
                  onChange={(e) => setSearchData({...searchData, destination: e.target.value})}
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <Input
                  type="date"
                  placeholder="체크인"
                  className="pl-10 h-12 border-gray-200 focus:border-blue-500"
                  value={searchData.checkIn}
                  onChange={(e) => setSearchData({...searchData, checkIn: e.target.value})}
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <Input
                  type="date"
                  placeholder="체크아웃"
                  className="pl-10 h-12 border-gray-200 focus:border-blue-500"
                  value={searchData.checkOut}
                  onChange={(e) => setSearchData({...searchData, checkOut: e.target.value})}
                />
              </div>
              <div className="relative">
                <Users className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <select
                  className="w-full pl-10 h-12 border border-gray-200 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
                  value={searchData.guests}
                  onChange={(e) => setSearchData({...searchData, guests: e.target.value})}
                >
                  <option value="1">1명</option>
                  <option value="2">2명</option>
                  <option value="3">3명</option>
                  <option value="4">4명</option>
                  <option value="5+">5명 이상</option>
                </select>
              </div>
            </div>
            <Button
              onClick={handleSearch}
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Search className="w-5 h-5" />
              <span>멋진 숙소 찾기</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
