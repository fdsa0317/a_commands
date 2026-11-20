import Link from "next/link";

export default function SiteFooter() {
    return (
        <footer className="bg-footer px-4 pb-10 pt-16 text-[#C7CED9]">
            <div className="mx-auto max-w-7xl overflow-hidden">
                <div className="flex flex-col justify-between gap-10 border-b border-[#1F2B40] pb-12 md:flex-row">
                    <div>
                        <p className="text-2xl font-extrabold text-white">StartFit</p>
                        <p className="mt-3 text-base">창업, 데이터로 먼저 확인하세요.</p>
                    </div>
                    <div className="flex flex-wrap gap-10 md:gap-24">
                        <div className="flex flex-col gap-3.5 text-base">
                            <h2 className="mb-1 text-sm font-bold text-[#5EEAD4]">서비스</h2>
                            <Link href="#">분석도구</Link>
                            <Link href="/supply">지원사업</Link>
                            <Link href="#">기획서 AI 분석</Link>
                            <Link href="#">게시판</Link>
                        </div>
                        <div className="flex flex-col gap-3.5 text-base">
                            <h2 className="mb-1 text-sm font-bold text-[#5EEAD4]">데이터 출처</h2>
                            <Link href="#">소상공인시장진흥공단</Link>
                            <Link href="#">서울시 상권분석서비스</Link>
                            <Link href="#">한국부동산원</Link>
                        </div>
                        <div className="flex flex-col gap-3.5 text-base">
                            <h2 className="mb-1 text-sm font-bold text-[#5EEAD4]">안내</h2>
                            <Link href="#">화면 속 수치는 예시예요</Link>
                            <Link href="#">데이터 기준일 2026.10</Link>
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" className="my-16 whitespace-nowrap text-[84px] font-extrabold leading-none tracking-[-3px] md:text-[180px] md:tracking-[-6px]">
                    <span className="text-[#3A4456]">Start</span>
                    <span className="text-[#1E4A4D]">Fit</span>
                </div>
                <div className="flex justify-between border-t border-[#1F2B40] pt-6 text-sm">
                    <p>© 2026 StartFit</p>
                    <Link href="#" className="font-bold text-white">맨 위로 ↑</Link>
                </div>
            </div>
        </footer>
    );
}
