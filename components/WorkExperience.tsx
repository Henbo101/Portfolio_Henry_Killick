import Image from "next/image";
import AnimateIn from "./AnimateIn";

const roles = [
  {
    company: "Self-employed",
    role: "Digital Designer",
    dates: "Jul 2024 – Present",
    description:
      "Freelance practice spanning brand development, websites, narrative-led editorial design and digital communication for studios, agencies and growing businesses.",
    logo: null,
    initial: "HK",
    logoBg: "bg-[#1e1e1e]",
    logoContain: false,
  },
  {
    company: "Visualskies Ltd",
    role: "Digital Designer & Marketing Manager",
    dates: "Mar 2025 – Mar 2026",
    description:
      "Led design and marketing output across brand presence, website development, content direction and ongoing digital communication for a specialist 3D scanning studio.",
    logo: "/images/logos/01_Visualskies-Logo_2020_071020_D_Minor-Logo-White-3.png",
    initial: "VS",
    logoBg: "bg-black",
    logoContain: true,
  },
  {
    company: "Rostrum",
    role: "Graphic Designer",
    dates: "Oct 2022 – Jul 2024",
    description:
      "Worked across client-facing design output in a full-time agency environment, developing strong commercial instincts across brand, layout and communication.",
    logo: "/images/logos/rostrum_communications_logo.jpeg",
    initial: "R",
    logoBg: "bg-[#1e1e1e]",
    logoContain: false,
  },
  {
    company: "Millwall Community Trust",
    role: "Lead Graphic Designer",
    dates: "Feb 2022 – Oct 2022",
    description:
      "Managed creative delivery across community-facing design work, producing clear and effective communications for a wide public audience.",
    logo: "/images/logos/MCT-logo.png",
    initial: "MCT",
    logoBg: "bg-[#1e1e1e]",
    logoContain: false,
  },
];

export default function WorkExperience() {
  return (
    <section>
      <h2 className="text-[24px] md:text-[33px] font-semibold text-[var(--text-primary)] tracking-[-0.01em] mb-6">
        Work Experience
      </h2>
      <div className="rounded-2xl border border-dashed border-[var(--border-dashed)] overflow-hidden">
        {roles.map((role, i) => (
          <AnimateIn key={role.company} delay={i * 0.07}>
            <div className={`flex items-start gap-4 px-5 py-4 md:px-6 md:py-5 ${i > 0 ? "border-t border-dashed border-[var(--border-dashed)]" : ""}`}>
              {/* Logo — top-aligned with small offset to sit beside role title */}
              <div
                className={`w-10 h-10 md:w-12 md:h-12 mt-0.5 rounded-full overflow-hidden flex-shrink-0 ${role.logoBg} flex items-center justify-center`}
              >
                {role.logo ? (
                  <Image
                    src={role.logo}
                    alt={role.company}
                    width={48}
                    height={48}
                    className={
                      role.logoContain
                        ? "object-contain w-3/5 h-3/5"
                        : "object-cover w-full h-full"
                    }
                  />
                ) : (
                  <span className="text-[10px] font-semibold text-[var(--text-muted)]">
                    {role.initial}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                {/* Role + date row: stacked on mobile, side-by-side on desktop */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div className="min-w-0">
                    <p className="text-[15px] font-semibold text-[var(--text-primary)] leading-snug">
                      {role.role}
                    </p>
                    <p className="text-[13px] text-[var(--text-secondary)] leading-snug mt-0.5">
                      {role.company}
                    </p>
                  </div>
                  <span className="text-[12px] text-[var(--text-muted)] flex-shrink-0 mt-1 sm:text-right">
                    {role.dates}
                  </span>
                </div>
                <p className="text-[13px] text-[var(--text-muted)] leading-[1.5] mt-2">
                  {role.description}
                </p>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
