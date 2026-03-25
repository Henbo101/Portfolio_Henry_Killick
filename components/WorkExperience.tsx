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
    logoBg: "bg-[#f0f0f0]",
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
    logoBg: "bg-[#f0f0f0]",
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
    logoBg: "bg-[#f0f0f0]",
    logoContain: false,
  },
];

export default function WorkExperience() {
  return (
    <section>
      <h2 className="text-[22px] font-semibold text-[var(--text-primary)] tracking-[-0.01em] mb-6">
        Work Experience
      </h2>
      <div className="flex flex-col divide-y divide-dashed divide-[var(--border-dashed)]">
        {roles.map((role, i) => (
          <AnimateIn key={role.company} delay={i * 0.07}>
            <div className="flex gap-5 items-center pt-6 pb-3 first:pt-0">
              {/* Logo */}
              <div
                className={`w-11 h-11 rounded-full overflow-hidden flex-shrink-0 ${role.logoBg} flex items-center justify-center`}
              >
                {role.logo ? (
                  <Image
                    src={role.logo}
                    alt={role.company}
                    width={44}
                    height={44}
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
              <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div className="min-w-0">
                  <p className="text-[14px] font-semibold text-[var(--text-primary)] leading-snug truncate">
                    {role.role}
                    <span className="font-normal text-[var(--text-secondary)]">
                      {" "}· {role.company}
                    </span>
                  </p>
                  <p className="text-[13px] text-[var(--text-secondary)] leading-[1.6] mt-1 line-clamp-2">
                    {role.description}
                  </p>
                </div>
                <span className="text-[12px] text-[var(--text-muted)] flex-shrink-0 sm:pl-6">
                  {role.dates}
                </span>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
