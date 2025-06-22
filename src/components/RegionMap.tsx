
import React, { useState } from 'react';
import { MapPin, TrendingUp } from 'lucide-react';

const RegionMap = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const regions = [
    { id: 1, name: "서울", stays: 1250, trending: true, x: "45%", y: "35%" },
    { id: 2, name: "부산", stays: 680, trending: false, x: "75%", y: "80%" },
    { id: 3, name: "제주", stays: 420, trending: true, x: "40%", y: "95%" },
    { id: 4, name: "강원", stays: 340, trending: false, x: "65%", y: "25%" },
    { id: 5, name: "경주", stays: 280, trending: true, x: "70%", y: "60%" },
    { id: 6, name: "인천", stays: 190, trending: false, x: "35%", y: "40%" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            대한민국 여행지
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            지역을 클릭하여 멋진 숙박시설과 현지 경험을 탐색해보세요
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 overflow-hidden">
            {/* Korea Map Outline */}
            <div className="relative w-full h-96 mx-auto bg-gradient-to-b from-gray-100 to-gray-200 rounded-xl">
              {/* Simplified Korea shape using CSS */}
              <div className="absolute inset-4 bg-gradient-to-br from-green-200 via-blue-200 to-purple-200 rounded-lg opacity-60"></div>
              
              {/* Region Markers */}
              {regions.map((region) => (
                <div
                  key={region.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{ left: region.x, top: region.y }}
                  onClick={() => setSelectedRegion(region)}
                >
                  <div className="relative">
                    {/* Marker Pin */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-125 ${
                      region.trending 
                        ? 'bg-gradient-to-r from-pink-500 to-red-500 shadow-lg shadow-pink-500/30' 
                        : 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/30'
                    }`}>
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    
                    {/* Trending Badge */}
                    {region.trending && (
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                        <TrendingUp className="w-2 h-2 text-white" />
                      </div>
                    )}
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">
                        <div className="font-semibold">{region.name}</div>
                        <div className="text-gray-300">{region.stays}개 숙소</div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Region Stats */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {regions.map((region) => (
                <div
                  key={region.id}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                    selectedRegion?.id === region.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedRegion(region)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{region.name}</h3>
                    {region.trending && (
                      <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">인기</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{region.stays}개 숙소</p>
                </div>
              ))}
            </div>

            {/* Selected Region Details */}
            {selectedRegion && (
              <div className="mt-6 p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white animate-fade-in">
                <h3 className="text-xl font-bold mb-2">{selectedRegion.name} 탐색하기</h3>
                <p className="mb-4">
                  {selectedRegion.name}에서 {selectedRegion.stays}개의 멋진 숙박시설을 만나보세요. 
                  럭셔리 호텔부터 아늑한 게스트하우스까지, 완벽한 숙소를 찾아보세요.
                </p>
                <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  {selectedRegion.name} 모든 숙소 보기
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionMap;
