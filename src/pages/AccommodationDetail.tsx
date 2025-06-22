import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Star, MapPin, Wifi, Car, Coffee, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { handleReservation } from '@/utils/reservationUtils';

const AccommodationDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* 이미지 갤러리 */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop"
                alt="메인 이미지"
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=300&h=200&fit=crop"
                alt="객실 이미지 1"
                className="w-full h-44 object-cover rounded-xl"
              />
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop"
                alt="객실 이미지 2"
                className="w-full h-44 object-cover rounded-xl"
              />
              <img
                src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=300&h=200&fit=crop"
                alt="시설 이미지 1"
                className="w-full h-44 object-cover rounded-xl"
              />
              <img
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=300&h=200&fit=crop"
                alt="시설 이미지 2"
                className="w-full h-44 object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 메인 정보 */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-900">럭셔리 오션 리조트</h1>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-semibold">4.9</span>
                  <span className="ml-1 text-gray-600">(234개 리뷰)</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>제주도 서귀포시</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">숙소 정보</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  제주도의 아름다운 해안가에 위치한 럭셔리 리조트입니다. 
                  모든 객실에서 바다 전망을 즐길 수 있으며, 최고급 시설과 서비스를 제공합니다.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center">
                    <Wifi className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm">무료 Wi-Fi</span>
                  </div>
                  <div className="flex items-center">
                    <Car className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm">주차 가능</span>
                  </div>
                  <div className="flex items-center">
                    <Coffee className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm">조식 포함</span>
                  </div>
                </div>
              </div>

              {/* 리뷰 섹션 */}
              <div className="bg-white rounded-xl border p-6">
                <h2 className="text-xl font-semibold mb-4">최근 리뷰</h2>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">김***</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm">5.0</span>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">
                      정말 멋진 리조트였습니다! 직원분들도 친절하고 시설도 깨끗해요.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 예약 카드 */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border shadow-lg p-6 sticky top-24">
                <div className="mb-4">
                  <span className="text-3xl font-bold text-blue-600">₩180,000</span>
                  <span className="text-gray-600 ml-2">/ 박</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">체크인</label>
                    <input type="date" className="w-full border rounded-lg px-3 py-2" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">체크아웃</label>
                    <input type="date" className="w-full border rounded-lg px-3 py-2" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">인원</label>
                    <select className="w-full border rounded-lg px-3 py-2">
                      <option>2명</option>
                      <option>3명</option>
                      <option>4명</option>
                    </select>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white mb-4"
                  onClick={() => handleReservation("럭셔리 오션 리조트", "₩180,000")}
                >
                  예약하기
                </Button>

                <div className="text-center text-sm text-gray-600">
                  예약 확정 전까지는 요금이 청구되지 않습니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AccommodationDetail;
