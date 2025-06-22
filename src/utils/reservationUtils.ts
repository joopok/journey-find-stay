
import { toast } from "@/hooks/use-toast";

export const handleReservation = (accommodationName: string, price: string) => {
  // 예약 처리 로직 (실제 구현시에는 API 호출 등이 필요)
  console.log(`예약 요청: ${accommodationName}, 가격: ${price}`);
  
  toast({
    title: "예약 요청 완료",
    description: `${accommodationName} 예약이 요청되었습니다. 확인 후 연락드리겠습니다.`,
  });
};
