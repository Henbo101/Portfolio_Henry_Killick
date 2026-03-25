import AnimateIn from "./AnimateIn";
import HeroIcon from "./HeroIcon";

export default function Hero() {
  return (
    <section className="pt-16 pb-14">
      <HeroIcon />

      <AnimateIn delay={0.05}>
        <h1 className="text-[46px] md:text-[54px] font-bold text-[var(--text-primary)] leading-[1.05] tracking-[-0.025em] mb-5">
          Hello, I&apos;m Henry Killick.
        </h1>
      </AnimateIn>

      <AnimateIn delay={0.1}>
        <p className="text-[18px] text-[var(--text-secondary)] leading-[1.65] max-w-[540px]">
          Graphic designer working across brand, web and digital storytelling.
          I help studios, agencies and ambitious businesses turn complex ideas
          into clear, usable and commercially sharp digital experiences.
        </p>
      </AnimateIn>
    </section>
  );
}
