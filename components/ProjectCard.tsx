import Link from "next/link";
import Image from "next/image";
import AnimateIn from "./AnimateIn";

interface ProjectCardProps {
  href: string;
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "top" | "center" | "bottom" | "left";
}

export default function ProjectCard({
  href,
  title,
  description,
  tags,
  imageSrc,
  imageAlt,
  imagePosition = "top",
}: ProjectCardProps) {
  const objectPosition =
    imagePosition === "center"
      ? "object-center"
      : imagePosition === "bottom"
      ? "object-bottom"
      : imagePosition === "left"
      ? "object-left object-contain"
      : "object-top";

  return (
    <AnimateIn>
      <Link href={href} className="group block">
        <div className="rounded-2xl overflow-hidden border border-dashed border-[var(--border-dashed)] bg-[#151515] transition-opacity duration-300 group-hover:opacity-75">
          {/* Text block — centred */}
          <div className="px-6 pt-7 pb-0 flex flex-col items-center text-center border-b border-dashed border-[var(--border-dashed)]">
            <h3 className="text-[34px] font-semibold text-[var(--text-primary)] leading-[1.15] mb-2">
              {title}
            </h3>
            <p className="text-[13px] text-[var(--text-secondary)] leading-[1.6] max-w-[480px] mb-6">
              {description}
            </p>
            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-medium tracking-[0.07em] uppercase text-[var(--text-muted)] border border-dashed border-[var(--border-dashed)] rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Image — flush bottom */}
          <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#1a1a1a]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className={`object-cover ${objectPosition}`}
              sizes="(max-width: 820px) 100vw, 820px"
            />
          </div>
        </div>
      </Link>
    </AnimateIn>
  );
}
