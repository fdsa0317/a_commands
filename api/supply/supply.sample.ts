import { SupplyDTO } from "@/types/supply/supply.type";

// 검색어가 없을 때 보여줄 샘플 공고 (백엔드 목록 API가 정해지면 교체한다)
const SUPPLY_SAMPLE_LIST: SupplyDTO[] = [
    {
        id: 1,
        category: "창업교육",
        title: "[로컬창업트랙 2기] 기억되는 브랜드가 되는 법",
        organization: "관악구청",
        receiptStart: "2026.10.19",
        receiptEnd: "11.12",
        dday: 1,
        isBookmarked: false,
        url: "#",
    },
    {
        id: 2,
        category: "시설 · 공간",
        title: "(하반기) 2026년 서울창업허브 M+ 입주기업 모집",
        organization: "서울경제진흥원",
        receiptStart: "2026.11.02",
        receiptEnd: "11.13",
        dday: 2,
        isBookmarked: true,
        url: "#",
    },
    {
        id: 3,
        category: "시설 · 공간",
        title: "2027년 서울시 청년 쿡 비즈니스 센터 참여 스타트업 모집",
        organization: "서울특별시 · 청년쿡비즈니스센터",
        receiptStart: "2026.11.02",
        receiptEnd: "11.20",
        dday: 9,
        isBookmarked: false,
        url: "#",
    },
    {
        id: 4,
        category: "시설 · 공간",
        title: "2026년 키친인큐베이터 개별 · 공유주방 25기 및 제조주방 13기 모집",
        organization: "서울경제진흥원",
        receiptStart: "2026.11.02",
        receiptEnd: "11.26",
        dday: 15,
        isBookmarked: true,
        url: "#",
    },
];

export const getSupplySampleList = async (): Promise<SupplyDTO[]> => SUPPLY_SAMPLE_LIST;
