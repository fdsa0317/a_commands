import { cn } from "@/lib/utils";
import { getStandingZone, StandingZone } from "@/lib/epl/epl.util";
import { EPLTeamStanding } from "@/types/epl/epl.type";
import EplFormCell from "./EplFormCell";

interface EplStandingsRowProps {
    standing: EPLTeamStanding;
}

const ZONE_BAR_CLASS: Record<StandingZone, string> = {
    ucl: "bg-blue-600",
    uel: "bg-sub",
    relegation: "bg-primary",
};

const formatGoalDifference = (value: number) => (value > 0 ? `+${value}` : String(value));

export default function EplStandingsRow({ standing }: EplStandingsRowProps) {
    const zone = getStandingZone(standing.rank);

    return (
        <tr className="border-b border-gray-200 text-center text-sm text-gray-800 transition-colors hover:bg-gray-50">
            <td className="relative px-2 py-3 font-bold text-gray-900">
                {zone && <span className={cn("absolute inset-y-0 left-0 w-1", ZONE_BAR_CLASS[zone])} />}
                {standing.rank}
            </td>
            <td className="px-3 py-3 text-left font-semibold text-gray-900">{standing.teamName}</td>
            <td className="px-2 py-3 text-base font-extrabold text-brand">{standing.points}</td>
            <td className="px-2 py-3">{standing.played}</td>
            <td className="px-2 py-3">{standing.wins}</td>
            <td className="px-2 py-3">{standing.draws}</td>
            <td className="px-2 py-3">{standing.losses}</td>
            <td className="px-2 py-3">{standing.goalsFor}</td>
            <td className="px-2 py-3">{standing.goalsAgainst}</td>
            <td
                className={cn(
                    "px-2 py-3",
                    standing.goalDifference > 0 && "text-emerald-600",
                    standing.goalDifference < 0 && "text-primary",
                )}
            >
                {formatGoalDifference(standing.goalDifference)}
            </td>
            <td className="px-3 py-3">
                <EplFormCell matches={standing.lastFiveMatches} />
            </td>
        </tr>
    );
}
