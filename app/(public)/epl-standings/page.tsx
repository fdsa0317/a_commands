import type { Metadata } from "next";
import { getEplStandings } from "@/api/epl/epl.api";
import EplStandingsLegend from "./_components/EplStandingsLegend";
import EplStandingsTable from "./_components/EplStandingsTable";

export const metadata: Metadata = {
    title: "해외축구 프리미어리그 팀 순위 | StartFit",
};

export default async function EplStandingsPage() {
    const standings = await getEplStandings();

    return (
        <main className="mx-auto max-w-7xl px-4 pb-16 pt-10 md:pt-14">
                <p className="text-sm text-gray-500">홈 › 해외축구 › 프리미어리그</p>
                <h1 className="mt-3 text-[30px] font-extrabold tracking-tight text-gray-900 md:text-[40px]">해외축구</h1>
                <p className="mt-2 text-lg font-semibold text-gray-700">프리미어리그 (EPL)</p>
                <p className="mt-1 text-sm text-gray-500">전체 {standings.length}개 팀</p>
                <EplStandingsTable standings={standings} />
                <EplStandingsLegend />
                <p className="mt-6 text-xs text-gray-400">
                    출처: 네이버 스포츠 프리미어리그 팀 순위 (수집 데이터, 실제 경기 상황과 차이가 있을 수 있음)
                </p>
        </main>
    );
}
