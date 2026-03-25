import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-[#0d0d0d]/90 backdrop-blur-md border-b border-dashed border-[var(--border-dashed)]">
      <div className="px-6 md:px-10 h-14 flex items-center justify-between">
        {/* Left: name + CV */}
        <div className="flex items-center">
          <Link
            href="/"
            className="text-[14px] font-semibold text-[var(--text-primary)] hover:opacity-60 transition-opacity"
          >
            Henry Killick
          </Link>
          <span className="mx-2 text-[var(--border)] select-none">|</span>
          <a
            href="/cv/henry-killick-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            CV
          </a>
        </div>

        {/* Right: icon buttons */}
        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/henry-killick/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-8 h-8 flex items-center justify-center rounded-md border border-dashed border-[var(--border-dashed)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-muted)] transition-colors"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M1.5 4.5H3.5V11.5H1.5V4.5ZM2.5 1.5C1.95 1.5 1.5 1.95 1.5 2.5C1.5 3.05 1.95 3.5 2.5 3.5C3.05 3.5 3.5 3.05 3.5 2.5C3.5 1.95 3.05 1.5 2.5 1.5ZM11.5 11.5H9.5V7.75C9.5 6.785 8.715 6 7.75 6C6.785 6 6 6.785 6 7.75V11.5H4V4.5H6V5.39C6.54 4.805 7.35 4.5 8 4.5C9.93 4.5 11.5 6.07 11.5 8V11.5Z" fill="currentColor" />
            </svg>
          </a>
          <a
            href="mailto:h.killick@triband.studio"
            aria-label="Email"
            className="w-8 h-8 flex items-center justify-center rounded-md border border-dashed border-[var(--border-dashed)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-muted)] transition-colors"
          >
            <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
              <rect x="0.5" y="0.5" width="13" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.1" />
              <path d="M1 1L7 6.5L13 1" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
