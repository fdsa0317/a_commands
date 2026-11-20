export default function EplStandingsLegend() {
    return (
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
                <span className="h-3.5 w-1 bg-blue-600" />
                UEFA 챔피언스리그 진출 (1~4위)
            </span>
            <span className="flex items-center gap-1.5">
                <span className="h-3.5 w-1 bg-sub" />
                UEFA 유로파리그 진출 (5위)
            </span>
            <span className="flex items-center gap-1.5">
                <span className="h-3.5 w-1 bg-primary" />
                리그 강등 (18~20위)
            </span>
            <span className="flex items-center gap-1.5">
                <span className="flex size-4 items-center justify-center rounded-full bg-emerald-600 text-[9px] font-bold text-white">W</span>
                승
            </span>
            <span className="flex items-center gap-1.5">
                <span className="flex size-4 items-center justify-center rounded-full bg-gray-400 text-[9px] font-bold text-white">D</span>
                무
            </span>
            <span className="flex items-center gap-1.5">
                <span className="flex size-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-white">L</span>
                패
            </span>
        </div>
    );
}
