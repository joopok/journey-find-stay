
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Crown, Star, MapPin, Wine, Car, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThemeLuxury = () => {
  const accommodations = [
    {
      id: 1,
      name: "시그니엘 서울",
      location: "서울 잠실",
      price: "₩800,000",
      rating: 4.9,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      amenities: ["미슐랭레스토랑", "스파", "컨시어지", "발렛파킹"]
    },
    {
      id: 2,
      name: "파크하이어트 부산",
      location: "부산 해운대",
      price: "₩650,000",
      rating: 4.8,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      amenities: ["오션뷰", "인피니티풀", "버틀러서비스", "프라이빗다이닝"]
    },
    {
      id: 3,
      name: "제주신라호텔",
      location: "제주도 중문",
      price: "₩750,000",
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=300&fit=crop",
      amenities: ["골프장", "카지노", "스파", "헬리패드"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* 헤더 섹션 */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <Crown className="w-12 h-12 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">럭셔리 리조트</h1>
            </div>
            <p className="text-xl opacity-90">최고의 서비스와 프리미엄 경험</p>
          </div>
        </div>

        {/* 필터 섹션 */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="default">전체</Button>
            <Button variant="outline">5성급</Button>
            <Button variant="outline">스파</Button>
            <Button variant="outline">미슐랭</Button>
            <Button variant="outline">골프장</Button>
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
                    <span className="text-lg font-bold text-purple-600">{accommodation.price}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {accommodation.amenities.map((amenity, index) => (
                      <span key={index} className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600">
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

export default ThemeLuxury;
