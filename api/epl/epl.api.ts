import { readFile } from "node:fs/promises";
import path from "node:path";
import { cacheLife } from "next/cache";
import { EPLTeamStanding } from "@/types/epl/epl.type";

const STANDINGS_PATH = path.join(process.cwd(), "public", "assets", "epl", "epl_team_standings.json");

export const getEplStandings = async (): Promise<EPLTeamStanding[]> => {
    "use cache";
    cacheLife("hours");

    const raw = await readFile(STANDINGS_PATH, "utf-8");
    const standings = JSON.parse(raw) as EPLTeamStanding[];

    return [...standings].sort((a, b) => a.rank - b.rank);
};
