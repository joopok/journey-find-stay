
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Star, MapPin, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Restaurants = () => {
  const restaurants = [
    {
      id: 1,
      name: "바다뷰 해산물 레스토랑",
      location: "제주도 서귀포",
      rating: 4.8,
      reviews: 342,
      cuisine: "해산물",
      priceRange: "₩₩₩",
      hours: "11:00 - 22:00",
      phone: "064-123-4567",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "한옥 전통 한정식",
      location: "서울 종로구",
      rating: 4.9,
      reviews: 156,
      cuisine: "한정식",
      priceRange: "₩₩₩₩",
      hours: "12:00 - 21:30",
      phone: "02-123-4567",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "부산 자갈치 해물탕",
      location: "부산 중구",
      rating: 4.6,
      reviews: 289,
      cuisine: "해물탕",
      priceRange: "₩₩",
      hours: "10:00 - 23:00",
      phone: "051-123-4567",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* 헤더 섹션 */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">맛집</h1>
            <p className="text-xl opacity-90">전국 최고의 맛집을 발견하세요</p>
          </div>
        </div>

        {/* 필터 섹션 */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="default">전체</Button>
            <Button variant="outline">한식</Button>
            <Button variant="outline">해산물</Button>
            <Button variant="outline">일식</Button>
            <Button variant="outline">중식</Button>
            <Button variant="outline">양식</Button>
          </div>

          {/* 맛집 목록 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((restaurant) => (
              <div key={restaurant.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{restaurant.name}</h3>
                    <span className="text-sm bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                      {restaurant.cuisine}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{restaurant.location}</span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium ml-1">{restaurant.rating}</span>
                      <span className="text-sm text-gray-500 ml-1">({restaurant.reviews})</span>
                    </div>
                    <span className="font-bold text-orange-600">{restaurant.priceRange}</span>
                  </div>

                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{restaurant.hours}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      <span>{restaurant.phone}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                    상세보기
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

export default Restaurants;
