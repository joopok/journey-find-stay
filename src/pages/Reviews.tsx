
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Star, MapPin, ThumbsUp, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      userName: "김**",
      userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
      placeName: "럭셔리 오션 리조트",
      location: "제주도",
      rating: 5,
      date: "2024년 1월 15일",
      content: "정말 멋진 리조트였습니다! 바다 전망이 환상적이고 직원분들도 매우 친절하세요. 조식도 맛있고 시설도 깨끗해요. 다음에 또 오고 싶습니다.",
      images: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=200&h=150&fit=crop",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=200&h=150&fit=crop"
      ],
      likes: 24,
      comments: 3
    },
    {
      id: 2,
      userName: "이**",
      userAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
      placeName: "바다뷰 해산물 레스토랑",
      location: "제주도 서귀포",
      rating: 4,
      date: "2024년 1월 12일",
      content: "신선한 해산물과 멋진 바다 전망이 인상적이었어요. 가격은 조금 비싸지만 그만한 가치가 있습니다.",
      images: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&h=150&fit=crop"
      ],
      likes: 18,
      comments: 1
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* 헤더 섹션 */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">리뷰</h1>
            <p className="text-xl opacity-90">실제 이용자들의 생생한 후기를 확인하세요</p>
          </div>
        </div>

        {/* 리뷰 작성 버튼 */}
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3">
              리뷰 작성하기
            </Button>
          </div>

          {/* 리뷰 목록 */}
          <div className="max-w-4xl mx-auto space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-xl shadow-lg p-6">
                {/* 리뷰 헤더 */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={review.userAvatar}
                      alt={review.userName}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{review.placeName}</h3>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{review.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                </div>

                {/* 리뷰 내용 */}
                <p className="text-gray-700 mb-4 leading-relaxed">{review.content}</p>

                {/* 리뷰 이미지 */}
                {review.images && review.images.length > 0 && (
                  <div className="flex space-x-2 mb-4">
                    {review.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`리뷰 이미지 ${index + 1}`}
                        className="w-32 h-24 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                )}

                {/* 리뷰 작성자 */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-600">작성자: {review.userName}</span>
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
                      <ThumbsUp className="w-4 h-4" />
                      <span className="text-sm">{review.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">{review.comments}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 더 보기 버튼 */}
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              더 많은 리뷰 보기
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Reviews;
