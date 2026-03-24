export default function Footer() {
  return (
    <footer className="border-t border-dashed border-[var(--border-dashed)] mt-16">
      <div className="px-6 md:px-10 py-7 flex flex-wrap items-center justify-between gap-4">
        <span className="text-[13px] text-[var(--text-muted)]">Henry Killick</span>
        <div className="flex items-center gap-5">
          <a href="mailto:h.killick@triband.studio" className="text-[12px] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">Email</a>
          <a href="https://www.linkedin.com/in/henry-killick/" target="_blank" rel="noopener noreferrer" className="text-[12px] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">LinkedIn</a>
          <a href="/cv/henry-killick-cv.pdf" target="_blank" rel="noopener noreferrer" className="text-[12px] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">CV</a>
        </div>
      </div>
    </footer>
  );
}
