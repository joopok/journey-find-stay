
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Star, MapPin, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Activities = () => {
  const activities = [
    {
      id: 1,
      name: "제주 한라산 등반 투어",
      location: "제주도",
      price: "₩45,000",
      rating: 4.8,
      reviews: 156,
      duration: "6시간",
      groupSize: "최대 12명",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "부산 해안 카약 체험",
      location: "부산",
      price: "₩35,000",
      rating: 4.7,
      reviews: 89,
      duration: "3시간",
      groupSize: "최대 8명",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "경주 역사 문화 투어",
      location: "경주",
      price: "₩25,000",
      rating: 4.6,
      reviews: 203,
      duration: "4시간",
      groupSize: "최대 15명",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* 헤더 섹션 */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">액티비티</h1>
            <p className="text-xl opacity-90">특별한 경험과 모험을 찾아보세요</p>
          </div>
        </div>

        {/* 필터 섹션 */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="default">전체</Button>
            <Button variant="outline">야외 활동</Button>
            <Button variant="outline">문화 체험</Button>
            <Button variant="outline">수상 스포츠</Button>
            <Button variant="outline">등반/트레킹</Button>
          </div>

          {/* 액티비티 목록 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity) => (
              <div key={activity.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={activity.image}
                  alt={activity.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{activity.name}</h3>
                  
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{activity.location}</span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium ml-1">{activity.rating}</span>
                      <span className="text-sm text-gray-500 ml-1">({activity.reviews})</span>
                    </div>
                    <span className="text-lg font-bold text-green-600">{activity.price}</span>
                  </div>

                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{activity.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{activity.groupSize}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700">
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

export default Activities;
