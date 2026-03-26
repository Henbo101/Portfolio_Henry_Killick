import Link from "next/link";
import Image from "next/image";
import AnimateIn from "./AnimateIn";

const items = [
  {
    href: "/projects/akin-biomethane",
    title: "Akin Biomethane",
    description:
      "Technical sector research shaped into a stronger thought-leadership story.",
    imageSrc: "/images/screenshots/04-AkinBiomethane-Hero.png",
    imageAlt: "Akin Biomethane",
  },
  {
    href: "/projects/campaign-wpi",
    title: "Campaign WPI",
    description:
      "Industry insight structured into a clearer and more engaging editorial format.",
    imageSrc: "/images/screenshots/20-WPI-ArmoreGroup-Hero.png",
    imageAlt: "Campaign WPI",
  },
  {
    href: "/projects/cleary-energy",
    title: "Cleary Energy",
    description:
      "Complex energy developments translated into a more navigable narrative experience.",
    imageSrc: "/images/screenshots/03-ClearyEnergy-EUEnergyOutlook.png",
    imageAlt: "Cleary Energy",
  },
];

export default function ThoughtProgression() {
  return (
    <section>
      <h2 className="text-[33px] font-semibold text-[var(--text-primary)] tracking-[-0.01em] mb-2">
        Thought Progression
      </h2>
      <p className="text-[15px] text-[var(--text-muted)] leading-[1.7] mb-8 max-w-[480px]">
        Building research and data into narrative-led stories that establish
        authority and make specialist subjects more engaging.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <AnimateIn key={item.title} delay={i * 0.08}>
            <Link href={item.href} className="group block h-full">
              <div className="rounded-xl overflow-hidden flex flex-col h-full border border-dashed border-[var(--border-dashed)] bg-[#151515] transition-opacity duration-300 group-hover:opacity-75">
                <div className="relative w-full aspect-[3/2] overflow-hidden flex-shrink-0 bg-[#1a1a1a] border-b border-dashed border-[var(--border-dashed)]">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 260px"
                  />
                </div>
                <div className="p-4 flex flex-col gap-1 flex-1">
                  <h3 className="text-[15px] font-semibold text-[var(--text-primary)] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-[var(--text-secondary)] leading-[1.6]">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
