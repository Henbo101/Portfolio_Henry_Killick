import Image from "next/image";

interface CaseStudyImageProps {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  aspect?: "wide" | "standard" | "tall";
  position?: "top" | "center" | "left" | "right";
}

export default function CaseStudyImage({
  src,
  alt,
  caption,
  priority = false,
  aspect = "wide",
  position = "top",
}: CaseStudyImageProps) {
  const aspectClass =
    aspect === "wide"
      ? "aspect-[16/9]"
      : aspect === "tall"
      ? "aspect-[4/5]"
      : "aspect-[4/3]";

  const positionClass =
    position === "left"
      ? "object-left"
      : position === "right"
      ? "object-right"
      : position === "center"
      ? "object-center"
      : "object-top";

  return (
    <figure className="my-8">
      <div className={`relative w-full ${aspectClass} rounded-xl overflow-hidden bg-[#f5f5f5]`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={`object-cover ${positionClass}`}
          sizes="(max-width: 840px) 100vw, 840px"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-[12px] text-[#999999] text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
