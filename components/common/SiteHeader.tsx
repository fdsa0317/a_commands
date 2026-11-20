import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
    return (
        <header className="sticky top-0 z-10 bg-white shadow-[0_2px_8px_rgba(17,24,39,0.08)]">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-[76px]">
                <Link href="/" className="flex items-center gap-2.5">
                    <Image src="/assets/icons/logo.svg" alt="" width={36} height={36} />
                    <span className="text-2xl font-extrabold tracking-tight text-[#1E3A5F]">StartFit</span>
                </Link>
                <nav className="hidden gap-10 md:flex">
                    <Link href="#" className="text-base font-semibold text-gray-700">서비스 소개</Link>
                    <Link href="#" className="text-base font-semibold text-gray-700">분석도구</Link>
                    <Link href="/supply" className="text-base font-semibold text-brand">지원사업</Link>
                    <Link href="#" className="text-base font-semibold text-gray-700">게시판</Link>
                    <Link href="#" className="text-base font-semibold text-gray-700">기획서 AI 분석</Link>
                </nav>
                <div aria-label="내 계정" className="flex size-9 items-center justify-center rounded-full bg-[#1F7F7A] text-sm font-bold text-white">
                    희
                </div>
            </div>
        </header>
    );
}
