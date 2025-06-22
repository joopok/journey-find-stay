
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tag, Clock, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Coupons = () => {
  const coupons = [
    {
      id: 1,
      title: "신규 회원 특가",
      discount: "30% 할인",
      description: "첫 숙박 예약 시 최대 30% 할인",
      code: "WELCOME30",
      expiry: "2024.02.29까지",
      minAmount: "₩100,000 이상",
      category: "숙박",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "액티비티 얼리버드",
      discount: "₩20,000 할인",
      description: "모든 액티비티 예약 시 2만원 할인",
      code: "ACTIVITY20",
      expiry: "2024.01.31까지",
      minAmount: "₩50,000 이상",
      category: "액티비티",
      color: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "맛집 탐방 쿠폰",
      discount: "15% 할인",
      description: "제휴 맛집에서 사용 가능한 할인 쿠폰",
      code: "FOOD15",
      expiry: "2024.03.15까지",
      minAmount: "₩30,000 이상",
      category: "맛집",
      color: "from-orange-500 to-red-600"
    },
    {
      id: 4,
      title: "주말 특가 패키지",
      discount: "25% 할인",
      description: "주말 숙박 + 액티비티 패키지 할인",
      code: "WEEKEND25",
      expiry: "2024.02.15까지",
      minAmount: "₩150,000 이상",
      category: "패키지",
      color: "from-pink-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* 헤더 섹션 */}
        <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">쿠폰</h1>
            <p className="text-xl opacity-90">특별한 할인 혜택을 놓치지 마세요</p>
          </div>
        </div>

        {/* 쿠폰 목록 */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {coupons.map((coupon) => (
              <div key={coupon.id} className="relative overflow-hidden">
                {/* 쿠폰 카드 */}
                <div className={`bg-gradient-to-r ${coupon.color} p-6 rounded-l-xl text-white relative`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-sm bg-white/20 px-2 py-1 rounded-full">
                        {coupon.category}
                      </span>
                      <h3 className="text-xl font-bold mt-2">{coupon.title}</h3>
                    </div>
                    <Gift className="w-8 h-8 opacity-80" />
                  </div>
                  
                  <div className="mb-3">
                    <span className="text-3xl font-bold">{coupon.discount}</span>
                  </div>
                  
                  <p className="text-white/90 text-sm mb-4">{coupon.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Tag className="w-4 h-4 mr-2" />
                      <span>코드: {coupon.code}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{coupon.expiry}</span>
                    </div>
                    <div className="text-xs opacity-80">
                      최소 주문금액: {coupon.minAmount}
                    </div>
                  </div>

                  {/* 쿠폰 구멍 효과 */}
                  <div className="absolute top-1/2 -right-3 w-6 h-6 bg-white rounded-full transform -translate-y-1/2"></div>
                  <div className="absolute top-1/2 -left-3 w-6 h-6 bg-gray-50 rounded-full transform -translate-y-1/2"></div>
                </div>

                {/* 쿠폰 사용 섹션 */}
                <div className="bg-white border border-l-0 rounded-r-xl p-6 flex flex-col justify-center min-h-[200px]">
                  <div className="text-center">
                    <div className="mb-4">
                      <div className="text-lg font-bold text-gray-900 mb-2">쿠폰 코드</div>
                      <div className="bg-gray-100 px-4 py-2 rounded-lg font-mono text-lg font-bold text-blue-600">
                        {coupon.code}
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      쿠폰 받기
                    </Button>
                    <p className="text-xs text-gray-500 mt-2">
                      클릭하여 쿠폰함에 저장하세요
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 쿠폰 사용 안내 */}
          <div className="max-w-4xl mx-auto mt-12 bg-gray-50 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">쿠폰 사용 안내</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• 쿠폰은 예약 시 결제 페이지에서 사용하실 수 있습니다.</li>
              <li>• 하나의 예약 건당 하나의 쿠폰만 사용 가능합니다.</li>
              <li>• 최소 주문금액을 확인해 주세요.</li>
              <li>• 쿠폰 유효기간을 꼭 확인해 주세요.</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Coupons;
