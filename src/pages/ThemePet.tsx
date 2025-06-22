import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Star, MapPin, TreePine, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { handleReservation } from '@/utils/reservationUtils';

const ThemePet = () => {
  const accommodations = [
    {
      id: 1,
      name: "펫프렌들리 글램핑",
      location: "경기도 양평",
      price: "₩160,000",
      rating: 4.9,
      reviews: 87,
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop",
      amenities: ["펫런", "애견샤워실", "사료무료", "산책로"]
    },
    {
      id: 2,
      name: "도그 리조트 제주",
      location: "제주도 성산",
      price: "₩200,000",
      rating: 4.8,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop",
      amenities: ["애견풀", "펫카페", "애견미용", "24시간케어"]
    },
    {
      id: 3,
      name: "반려동물 전용펜션",
      location: "강원도 홍천",
      price: "₩120,000",
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?w=400&h=300&fit=crop",
      amenities: ["울타리마당", "놀이기구", "펫시터", "응급처치"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* 헤더 섹션 */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-12 h-12 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">반려동물 여행</h1>
            </div>
            <p className="text-xl opacity-90">소중한 가족과 함께하는 특별한 여행</p>
          </div>
        </div>

        {/* 필터 섹션 */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="default">전체</Button>
            <Button variant="outline">펫런</Button>
            <Button variant="outline">애견풀</Button>
            <Button variant="outline">펫카페</Button>
            <Button variant="outline">응급처치</Button>
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
                    <span className="text-lg font-bold text-green-600">{accommodation.price}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {accommodation.amenities.map((amenity, index) => (
                      <span key={index} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <Button 
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                    onClick={() => handleReservation(accommodation.name, accommodation.price)}
                  >
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

export default ThemePet;
