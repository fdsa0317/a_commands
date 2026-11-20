export type SupplySearchType = "both" | "title" | "content";

export interface SupplySearchParamsDTO {
    keyward: string;
    searchType: SupplySearchType;
}

export interface SupplyDTO {
    id: number;
    category: string;
    title: string;
    organization: string;
    receiptStart: string;
    receiptEnd: string;
    dday: number;
    isBookmarked: boolean;
    url: string;
}
