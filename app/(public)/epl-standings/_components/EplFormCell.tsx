import { cn } from "@/lib/utils";
import { MatchResult } from "@/types/epl/epl.type";

interface EplFormCellProps {
    matches: MatchResult[] | null;
}

const RESULT_CLASS: Record<MatchResult, string> = {
    W: "bg-emerald-600",
    D: "bg-gray-400",
    L: "bg-primary",
};

const RESULT_LABEL: Record<MatchResult, string> = {
    W: "승",
    D: "무",
    L: "패",
};

export default function EplFormCell({ matches }: EplFormCellProps) {
    if (!matches || matches.length === 0) {
        return <span className="text-gray-400">-</span>;
    }

    return (
        <div className="flex justify-center gap-1">
            {matches.map((result, index) => (
                <span
                    key={`${result}-${index}`}
                    aria-label={RESULT_LABEL[result]}
                    className={cn(
                        "flex size-6 items-center justify-center rounded-full text-[11px] font-bold text-white",
                        RESULT_CLASS[result],
                    )}
                >
                    {result}
                </span>
            ))}
        </div>
    );
}
