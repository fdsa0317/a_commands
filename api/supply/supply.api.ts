import { ApiResponseDTO } from "@/types/common/common.type";
import { SupplyDTO, SupplySearchParamsDTO } from "@/types/supply/supply.type";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const searchSupply = async ({ keyward, searchType }: SupplySearchParamsDTO): Promise<SupplyDTO[]> => {
    const params = new URLSearchParams({ keyward, searchType });
    const response = await fetch(`${BACKEND_URL}/search?${params.toString()}`, {
        method: "GET",
        credentials: "include",
    });
    if (!response.ok) {
        throw new Error("searchSupply fetching failed");
    }
    const body: ApiResponseDTO<SupplyDTO[]> = await response.json();
    if (!body.success) {
        throw new Error(body.message);
    }
    return body.data ?? [];
};

export const toggleSupplyBookmark = async (id: number, likeSupplyd: boolean): Promise<void> => {
    const response = await fetch(`${BACKEND_URL}/supply/${id}?likeSupplyd=${likeSupplyd}`, {
        method: "GET",
        credentials: "include",
    });
    if (!response.ok) {
        throw new Error("toggleSupplyBookmark failed");
    }
};
