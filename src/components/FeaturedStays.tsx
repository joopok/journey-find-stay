import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturedStays = () => {
  const stays = [
    {
      id: 1,
      name: "럭셔리 오션 리조트",
      location: "제주도",
      price: "₩180,000",
      rating: 4.9,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
      tags: ["🔥 막바지 특가", "⭐ 인증완료"],
      type: "리조트"
    },
    {
      id: 2,
      name: "아늑한 산속 펜션",
      location: "강원도",
      price: "₩95,000",
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
      tags: ["🏔️ 산전망", "🔥 인기급상승"],
      type: "펜션"
    },
    {
      id: 3,
      name: "모던 시티 호텔",
      location: "서울 강남",
      price: "₩220,000",
      rating: 4.8,
      reviews: 892,
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop",
      tags: ["🏙️ 도심 중심가", "⭐ 에디터 추천"],
      type: "호텔"
    },
    {
      id: 4,
      name: "바닷가 캠핑장",
      location: "부산",
      price: "₩45,000",
      rating: 4.5,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=400&h=300&fit=crop",
      tags: ["🏕️ 펫프렌들리", "🌊 해변 바로앞"],
      type: "캠핑"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            추천 숙소
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            특별한 경험을 선사하는 엄선된 숙박시설을 만나보세요
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-white rounded-lg p-1 shadow-sm">
            <Button variant="default" size="sm" className="rounded-md">인기</Button>
            <Button variant="ghost" size="sm" className="rounded-md">신규</Button>
            <Button variant="ghost" size="sm" className="rounded-md">에디터 추천</Button>
            <Button variant="ghost" size="sm" className="rounded-md">전체</Button>
          </div>
        </div>

        {/* Stays Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stays.map((stay) => (
            <div key={stay.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover-scale group">
              <div className="relative">
                <img
                  src={stay.image}
                  alt={stay.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                  <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                </button>
                <div className="absolute bottom-3 left-3">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {stay.type}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {stay.name}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{stay.location}</span>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium ml-1">{stay.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({stay.reviews})</span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-600">{stay.price}</div>
                    <div className="text-sm text-gray-500">1박 기준</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {stay.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link to={`/accommodation/${stay.id}`}>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    상세보기
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" className="px-8">
            모든 숙박시설 보기
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStays;
