import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Star, MapPin, Gamepad2, Waves, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThemeFamily = () => {
  const accommodations = [
    {
      id: 1,
      name: "패밀리 리조트 아쿠아랜드",
      location: "경기도 가평",
      price: "₩280,000",
      rating: 4.8,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=400&h=300&fit=crop",
      amenities: ["키즈풀", "놀이방", "바베큐장", "무료주차"]
    },
    {
      id: 2,
      name: "제주 키즈 펜션",
      location: "제주도 애월",
      price: "₩150,000",
      rating: 4.7,
      reviews: 167,
      image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=400&h=300&fit=crop",
      amenities: ["놀이터", "체험농장", "레고룸", "안전시설"]
    },
    {
      id: 3,
      name: "강원도 패밀리 캠핑장",
      location: "강원도 춘천",
      price: "₩120,000",
      rating: 4.6,
      reviews: 134,
      image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=400&h=300&fit=crop",
      amenities: ["캠핑카", "트램폴린", "족욕탕", "편의점"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* 헤더 섹션 */}
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-12 h-12 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">가족 여행</h1>
            </div>
            <p className="text-xl opacity-90">온 가족이 함께 즐기는 행복한 시간</p>
          </div>
        </div>

        {/* 필터 섹션 */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="default">전체</Button>
            <Button variant="outline">키즈풀</Button>
            <Button variant="outline">놀이시설</Button>
            <Button variant="outline">체험프로그램</Button>
            <Button variant="outline">안전시설</Button>
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
                    <span className="text-lg font-bold text-blue-600">{accommodation.price}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {accommodation.amenities.map((amenity, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
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

export default ThemeFamily;
