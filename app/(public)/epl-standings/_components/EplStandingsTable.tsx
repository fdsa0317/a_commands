import { cn } from "@/lib/utils";
import { EPLTeamStanding } from "@/types/epl/epl.type";
import EplStandingsRow from "./EplStandingsRow";

interface EplStandingsTableProps {
    standings: EPLTeamStanding[];
}

const COLUMN_LABELS = ["순위", "팀명", "승점", "경기", "승", "무", "패", "득점", "실점", "득실", "최근 5경기"];

export default function EplStandingsTable({ standings }: EplStandingsTableProps) {
    return (
        <div className="mt-8 overflow-x-auto border-t-2 border-gray-900">
            <table className="w-full min-w-[760px] border-collapse">
                <caption className="sr-only">프리미어리그 팀 순위 목록</caption>
                <thead>
                    <tr className="border-b border-gray-300 text-center text-sm text-gray-900">
                        {COLUMN_LABELS.map((label) => (
                            <th
                                key={label}
                                scope="col"
                                className={cn(
                                    "whitespace-nowrap px-2 py-3 font-bold",
                                    label === "팀명" && "text-left",
                                )}
                            >
                                {label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {standings.map((standing) => (
                        <EplStandingsRow key={standing.teamName} standing={standing} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
