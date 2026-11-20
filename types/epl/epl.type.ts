export type MatchResult = "W" | "D" | "L";

export interface EPLTeamStanding {
    rank: number;
    teamName: string;
    points: number;
    played: number;
    wins: number;
    draws: number;
    losses: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
    lastFiveMatches: MatchResult[] | null;
}
