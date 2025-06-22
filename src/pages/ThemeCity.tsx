
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Star, Building, Wifi, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThemeCity = () => {
  const accommodations = [
    {
      id: 1,
      name: "명동 시티 호텔",
      location: "서울 명동",
      price: "₩120,000",
      rating: 4.7,
      reviews: 345,
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop",
      amenities: ["지하철역 도보1분", "쇼핑몰", "24시간 프런트", "무료WiFi"]
    },
    {
      id: 2,
      name: "해운대 비치 호텔",
      location: "부산 해운대",
      price: "₩180,000",
      rating: 4.8,
      reviews: 267,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      amenities: ["해변 도보3분", "루프탑바", "피트니스", "발렛파킹"]
    },
    {
      id: 3,
      name: "대구 중심가 호텔",
      location: "대구 동성로",
      price: "₩90,000",
      rating: 4.6,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop",
      amenities: ["번화가 중심", "레스토랑", "회의실", "무료주차"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* 헤더 섹션 */}
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <Building className="w-12 h-12 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">도심 여행</h1>
            </div>
            <p className="text-xl opacity-90">도시의 활기와 편리함을 만끽하세요</p>
          </div>
        </div>

        {/* 필터 섹션 */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="default">전체</Button>
            <Button variant="outline">지하철 근처</Button>
            <Button variant="outline">쇼핑몰</Button>
            <Button variant="outline">비즈니스</Button>
            <Button variant="outline">관광명소</Button>
          </div>

          {/* 숙소 목록 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accommodations.map((accommodation) => (
              <div key={accommodation.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={accommodation.image}
                  alt={accommodation.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{accommodation.name}</h3>
                  
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{accommodation.location}</span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium ml-1">{accommodation.rating}</span>
                      <span className="text-sm text-gray-500 ml-1">({accommodation.reviews})</span>
                    </div>
                    <span className="text-lg font-bold text-orange-600">{accommodation.price}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {accommodation.amenities.map((amenity, index) => (
                      <span key={index} className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
                    예약하기
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThemeCity;
