
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tent, Star, MapPin, TreePine, Flame, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThemeCamping = () => {
  const accommodations = [
    {
      id: 1,
      name: "강변 오토캠핑장",
      location: "경기도 가평",
      price: "₩80,000",
      rating: 4.8,
      reviews: 267,
      image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=400&h=300&fit=crop",
      amenities: ["강변뷰", "바베큐시설", "화장실", "개수대"]
    },
    {
      id: 2,
      name: "제주 글램핑장",
      location: "제주도 한림",
      price: "₩150,000",
      rating: 4.9,
      reviews: 198,
      image: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=400&h=300&fit=crop",
      amenities: ["글램핑텐트", "프라이빗 데크", "침구제공", "에어컨"]
    },
    {
      id: 3,
      name: "설악산 캠핑장",
      location: "강원도 속초",
      price: "₩60,000",
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?w=400&h=300&fit=crop",
      amenities: ["산 전망", "등산로", "매점", "샤워실"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* 헤더 섹션 */}
        <div className="bg-gradient-to-r from-teal-500 to-green-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <Tent className="w-12 h-12 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">캠핑장</h1>
            </div>
            <p className="text-xl opacity-90">자연 속에서 힐링하는 특별한 시간</p>
          </div>
        </div>

        {/* 필터 섹션 */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="default">전체</Button>
            <Button variant="outline">오토캠핑</Button>
            <Button variant="outline">글램핑</Button>
            <Button variant="outline">강변</Button>
            <Button variant="outline">산 전망</Button>
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
                    <span className="text-lg font-bold text-teal-600">{accommodation.price}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {accommodation.amenities.map((amenity, index) => (
                      <span key={index} className="px-2 py-1 bg-teal-100 text-teal-800 text-xs rounded-full">
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <Button className="w-full bg-gradient-to-r from-teal-500 to-green-600 hover:from-teal-600 hover:to-green-700">
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

export default ThemeCamping;
