
import React from 'react';
import { Star, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturedStays = () => {
  const stays = [
    {
      id: 1,
      name: "Luxury Ocean Resort",
      location: "Jeju Island",
      price: "₩180,000",
      rating: 4.9,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
      tags: ["🔥 Last-minute deals", "⭐ Verified"],
      type: "Resort"
    },
    {
      id: 2,
      name: "Cozy Mountain Pension",
      location: "Gangwon-do",
      price: "₩95,000",
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
      tags: ["🏔️ Mountain View", "🔥 Trending"],
      type: "Pension"
    },
    {
      id: 3,
      name: "Modern City Hotel",
      location: "Seoul, Gangnam",
      price: "₩220,000",
      rating: 4.8,
      reviews: 892,
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop",
      tags: ["🏙️ City Center", "⭐ Editor's Pick"],
      type: "Hotel"
    },
    {
      id: 4,
      name: "Seaside Camping Ground",
      location: "Busan",
      price: "₩45,000",
      rating: 4.5,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=400&h=300&fit=crop",
      tags: ["🏕️ Pet-Friendly", "🌊 Beach Access"],
      type: "Camping"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Stays
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover handpicked accommodations that offer exceptional experiences
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-white rounded-lg p-1 shadow-sm">
            <Button variant="default" size="sm" className="rounded-md">Trending</Button>
            <Button variant="ghost" size="sm" className="rounded-md">New</Button>
            <Button variant="ghost" size="sm" className="rounded-md">Editor's Pick</Button>
            <Button variant="ghost" size="sm" className="rounded-md">All</Button>
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
                    <div className="text-sm text-gray-500">per night</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {stay.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" className="px-8">
            View All Accommodations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStays;
