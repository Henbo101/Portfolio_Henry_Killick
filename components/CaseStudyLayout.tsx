import Link from "next/link";
import Footer from "./Footer";

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[820px] mx-auto border-x border-dashed border-[var(--border-dashed)] min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-dashed border-[var(--border-dashed)]">
        <div className="px-6 md:px-10 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 12L4 7L9 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Henry Killick
          </Link>
          <a href="/cv/henry-killick-cv.pdf" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
            CV
          </a>
        </div>
      </header>
      <main className="px-6 md:px-10 flex-1">{children}</main>
      <Footer />
    </div>
  );
}
