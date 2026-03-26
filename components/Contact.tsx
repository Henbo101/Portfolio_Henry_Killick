import AnimateIn from "./AnimateIn";

export default function Contact() {
  return (
    <section>
      <AnimateIn>
        <h2 className="text-[33px] font-semibold text-[var(--text-primary)] tracking-[-0.01em] mb-2">
          Connect with me
        </h2>
        <p className="text-[15px] text-[var(--text-secondary)] leading-[1.7] max-w-[420px] mb-7">
          Looking for a designer who can bring structure, clarity and narrative
          to your digital presence? Let&apos;s talk.
        </p>
      </AnimateIn>

      <AnimateIn delay={0.08}>
        <div className="flex flex-col gap-3">
          <a
            href="mailto:h.killick@triband.studio"
            className="flex items-center gap-3 w-fit group"
          >
            <span className="w-8 h-8 rounded-md border border-dashed border-[var(--border-dashed)] flex items-center justify-center text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:border-[var(--text-muted)] transition-colors">
              <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                <rect x="0.5" y="0.5" width="13" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.1" />
                <path d="M1 1L7 6.5L13 1" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
              </svg>
            </span>
            <span className="text-[14px] text-[var(--text-primary)] group-hover:text-[var(--text-secondary)] transition-colors">
              h.killick@triband.studio
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/henry-killick/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 w-fit group"
          >
            <span className="w-8 h-8 rounded-md border border-dashed border-[var(--border-dashed)] flex items-center justify-center text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:border-[var(--text-muted)] transition-colors">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path
                  d="M1.5 4.5H3.5V11.5H1.5V4.5ZM2.5 1.5C1.95 1.5 1.5 1.95 1.5 2.5C1.5 3.05 1.95 3.5 2.5 3.5C3.05 3.5 3.5 3.05 3.5 2.5C3.5 1.95 3.05 1.5 2.5 1.5ZM11.5 11.5H9.5V7.75C9.5 6.785 8.715 6 7.75 6C6.785 6 6 6.785 6 7.75V11.5H4V4.5H6V5.39C6.54 4.805 7.35 4.5 8 4.5C9.93 4.5 11.5 6.07 11.5 8V11.5Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="text-[14px] text-[var(--text-primary)] group-hover:text-[var(--text-secondary)] transition-colors">
              LinkedIn
            </span>
          </a>
        </div>
      </AnimateIn>

      <AnimateIn delay={0.14}>
        <p className="text-[12px] text-[var(--text-muted)] mt-7 leading-[1.6]">
          Available for freelance and contract opportunities across branding,
          digital design, web and narrative-led content.
        </p>
      </AnimateIn>
    </section>
  );
}
