export type StandingZone = "ucl" | "uel" | "relegation";

/** 페이지 범례 기준: 1~4위 UEFA 챔피언스리그, 5위 UEFA 유로파리그, 18~20위 리그 강등 */
export const getStandingZone = (rank: number): StandingZone | null => {
    if (rank <= 4) return "ucl";
    if (rank === 5) return "uel";
    if (rank >= 18) return "relegation";
    return null;
};
