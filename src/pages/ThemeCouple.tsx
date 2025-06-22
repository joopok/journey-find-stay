
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Star, MapPin, Wifi, Car, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThemeCouple = () => {
  const accommodations = [
    {
      id: 1,
      name: "로맨틱 오션뷰 펜션",
      location: "부산 해운대",
      price: "₩180,000",
      rating: 4.9,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      amenities: ["오션뷰", "스파", "룸서비스", "무료WiFi"]
    },
    {
      id: 2,
      name: "힐링 스파 리조트",
      location: "제주도 서귀포",
      price: "₩220,000",
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=300&fit=crop",
      amenities: ["커플스파", "프라이빗풀", "바베큐", "무료주차"]
    },
    {
      id: 3,
      name: "서울 프리미엄 호텔",
      location: "서울 강남",
      price: "₩350,000",
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      amenities: ["시티뷰", "레스토랑", "컨시어지", "발렛파킹"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* 헤더 섹션 */}
        <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-12 h-12 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">커플 여행</h1>
            </div>
            <p className="text-xl opacity-90">로맨틱한 둘만의 시간을 위한 특별한 공간</p>
          </div>
        </div>

        {/* 필터 섹션 */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="default">전체</Button>
            <Button variant="outline">오션뷰</Button>
            <Button variant="outline">스파/온천</Button>
            <Button variant="outline">프라이빗풀</Button>
            <Button variant="outline">럭셔리</Button>
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
                    <span className="text-lg font-bold text-pink-600">{accommodation.price}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {accommodation.amenities.map((amenity, index) => (
                      <span key={index} className="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded-full">
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <Button className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600">
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

export default ThemeCouple;
