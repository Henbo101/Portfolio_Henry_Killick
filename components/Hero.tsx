import AnimateIn from "./AnimateIn";
import HeroIcon from "./HeroIcon";

export default function Hero() {
  return (
    <section className="pt-16 pb-14">
      <HeroIcon />

      <AnimateIn delay={0.05}>
        <h1 className="text-[38px] md:text-[44px] font-bold text-[var(--text-primary)] leading-[1.12] tracking-[-0.02em] mb-4">
          Hello, I&apos;m Henry Killick.
        </h1>
      </AnimateIn>

      <AnimateIn delay={0.1}>
        <p className="text-[16px] md:text-[17px] text-[var(--text-secondary)] leading-[1.7] max-w-[520px]">
          Graphic designer working across brand, web and digital storytelling.
          I help studios, agencies and ambitious businesses turn complex ideas
          into clear, usable and commercially sharp digital experiences.
        </p>
      </AnimateIn>

      <AnimateIn delay={0.15}>
        <p className="text-[15px] text-[var(--text-muted)] leading-[1.7] max-w-[500px] mt-3">
          I build narrative through brand positioning, structured design systems
          and web-led communication — translating technical, editorial or
          data-heavy subject matter into work that people can actually
          understand and act on.
        </p>
      </AnimateIn>
    </section>
  );
}
