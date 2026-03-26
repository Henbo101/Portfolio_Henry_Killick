interface SectionEyebrowProps {
  label: string;
}

export default function SectionEyebrow({ label }: SectionEyebrowProps) {
  return (
    <div className="flex items-center gap-2 mb-10">
      <span className="block w-4 h-px bg-[var(--text-secondary)]" />
      <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-[var(--text-secondary)]">
        {label}
      </span>
    </div>
  );
}
