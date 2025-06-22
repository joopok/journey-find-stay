
import React from 'react';
import { Heart, Users, Zap, Crown, MapPin, Tent } from 'lucide-react';

const ThemedAreas = () => {
  const themes = [
    {
      id: 1,
      title: "Couple Trips",
      icon: Heart,
      description: "Romantic getaways for two",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=300&h=200&fit=crop",
      color: "from-pink-500 to-red-500",
      count: "120+ places"
    },
    {
      id: 2,
      title: "Family Vacations",
      icon: Users,
      description: "Fun for the whole family",
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=300&h=200&fit=crop",
      color: "from-blue-500 to-cyan-500",
      count: "200+ places"
    },
    {
      id: 3,
      title: "Pet-Friendly",
      icon: Zap,
      description: "Bring your furry friends",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=300&h=200&fit=crop",
      color: "from-green-500 to-emerald-500",
      count: "80+ places"
    },
    {
      id: 4,
      title: "Luxury Resorts",
      icon: Crown,
      description: "Premium comfort & service",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=300&h=200&fit=crop",
      color: "from-purple-500 to-indigo-500",
      count: "50+ places"
    },
    {
      id: 5,
      title: "City Escapes",
      icon: MapPin,
      description: "Urban adventures await",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=300&h=200&fit=crop",
      color: "from-orange-500 to-yellow-500",
      count: "150+ places"
    },
    {
      id: 6,
      title: "Camping Spots",
      icon: Tent,
      description: "Connect with nature",
      image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=300&h=200&fit=crop",
      color: "from-teal-500 to-green-600",
      count: "90+ places"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore by Theme
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the perfect stay that matches your travel style and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme) => {
            const IconComponent = theme.icon;
            return (
              <div
                key={theme.id}
                className="group relative overflow-hidden rounded-2xl cursor-pointer hover-scale transition-all duration-300"
              >
                {/* Background Image */}
                <div className="relative h-64">
                  <img
                    src={theme.image}
                    alt={theme.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${theme.color} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div className="transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                    <div className="flex items-center mb-2">
                      <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg mr-3">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-medium opacity-90">{theme.count}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{theme.title}</h3>
                    <p className="text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {theme.description}
                    </p>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 rounded-2xl transition-colors duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ThemedAreas;
