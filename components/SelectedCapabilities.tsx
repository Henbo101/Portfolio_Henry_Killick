import AnimateIn from "./AnimateIn";

const capabilities = [
  {
    title: "Brand Positioning",
    description:
      "Sharpening how businesses describe themselves, their offer and their value.",
  },
  {
    title: "Digital Design",
    description:
      "Designing websites and digital experiences that balance clarity, style and usability.",
  },
  {
    title: "Narrative-led Communication",
    description:
      "Turning research, technical material and strategic thinking into more engaging stories.",
  },
];

export default function SelectedCapabilities() {
  return (
    <section>
      <h2 className="text-[33px] font-semibold text-[var(--text-primary)] tracking-[-0.01em] mb-8">
        Selected Capabilities
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-7">
        {capabilities.map((cap, i) => (
          <AnimateIn key={cap.title} delay={i * 0.07}>
            <div className="border border-dashed border-[var(--border-dashed)] rounded-xl p-5">
              <h3 className="text-[15px] font-semibold text-[var(--text-primary)] mb-1.5">
                {cap.title}
              </h3>
              <p className="text-[13px] text-[var(--text-secondary)] leading-[1.6]">
                {cap.description}
              </p>
            </div>
          </AnimateIn>
        ))}
      </div>
      <AnimateIn delay={0.2}>
        <p className="text-[12px] text-[var(--text-muted)] leading-[1.6] max-w-[480px]">
          Written recommendations are being gathered from recent clients and
          collaborators. In the meantime, the work above is the clearest
          reflection of how I think, write and build.
        </p>
      </AnimateIn>
    </section>
  );
}
