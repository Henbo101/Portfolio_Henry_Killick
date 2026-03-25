import AnimateIn from "./AnimateIn";

const ACCENTS = [
  { text: "#0077b6", bg: "#dff0fa" },
  { text: "#c1440e", bg: "#fde8e0" },
  { text: "#1a6b4a", bg: "#e0f2ec" },
];

const items = [
  {
    label: "Brand",
    bold: "Specialist businesses",
    rest: " defined more clearly — sharper positioning, greater confidence, more coherent presence.",
  },
  {
    label: "Digital",
    bold: "Websites and digital experiences",
    rest: " that do more than look good — they explain, persuade and support growth.",
  },
  {
    label: "Narrative",
    bold: "Research and technical material",
    rest: " turned into stories that build authority and keep people engaged.",
  },
  {
    label: "Thinking",
    bold: "Brand, web, content and communication",
    rest: " treated as one discipline, not four separate jobs.",
  },
  {
    label: "Clarity",
    bold: "Specialist services and emerging technology",
    rest: " communicated with precision and commercial confidence.",
  },
  {
    label: "Support",
    bold: "One-off projects, retained work",
    rest: " and embedded creative support for teams that need design thinking with range.",
  },
];

export default function ImpactStats() {
  return (
    <section>
      <h2 className="text-[22px] font-semibold text-[var(--text-primary)] tracking-[-0.01em] mb-8">
        Impact at a Glance
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-7">
        {items.map((item, i) => {
          const accent = ACCENTS[i % 3];
          return (
            <AnimateIn key={item.label} delay={i * 0.06}>
              <div>
                <span
                  className="inline-block text-[11px] font-bold tracking-[0.08em] uppercase rounded-full px-2.5 py-1 mb-3"
                  style={{ color: accent.text, backgroundColor: accent.bg }}
                >
                  {item.label}
                </span>
                <p className="text-[15px] text-[var(--text-secondary)] leading-[1.7]">
                  <strong className="font-semibold text-[var(--text-primary)]">
                    {item.bold}
                  </strong>
                  {item.rest}
                </p>
              </div>
            </AnimateIn>
          );
        })}
      </div>
    </section>
  );
}
