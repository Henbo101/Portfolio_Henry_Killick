import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import CaseStudyImage from "@/components/CaseStudyImage";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "BESPOKE Garden Play — Henry Killick",
  description:
    "Rebranding and positioning for a boutique playhouse company in Devon.",
};

export default function BespokePage() {
  return (
    <CaseStudyLayout>
      {/* Hero */}
      <section className="pt-16 pb-10">
        <AnimateIn>
          <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-[var(--text-muted)] mb-4">
            Brand · Positioning · Tone of Voice
          </p>
          <h1 className="text-[44px] md:text-[52px] font-semibold text-[var(--text-primary)] leading-[1.05] tracking-[-0.02em] mb-4">
            BESPOKE Garden Play
          </h1>
          <p className="text-[17px] text-[var(--text-secondary)] leading-[1.5] max-w-[560px] mb-5">
            Rebranding and positioning for a boutique playhouse company in Devon.
          </p>
          <a
            href="https://neon-fox-7983d7.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-[var(--text-primary)] border border-dashed border-[var(--border-dashed)] rounded-lg px-4 py-2 hover:border-[var(--text-muted)] transition-colors"
          >
            Visit project
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M10 2H4.5M10 2V7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </AnimateIn>
      </section>

      <CaseStudyImage
        src="/images/screenshots/05-BespokeRebrand-BrandStrategy.png"
        alt="BESPOKE brand strategy"
        priority
        position="left"
      />

      {/* Snapshot */}
      <AnimateIn>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-10 border-t border-b border-[var(--border-dashed)] my-4">
          {[
            { label: "Scope", value: "Brand / Positioning / Tone of voice" },
            { label: "Sector", value: "Premium consumer · Bespoke build" },
            { label: "Focus", value: "Identity clarity · Communication" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-[11px] font-medium tracking-[0.08em] uppercase text-[var(--text-muted)] mb-1">
                {item.label}
              </p>
              <p className="text-[15px] text-[var(--text-primary)]">{item.value}</p>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* The challenge */}
      <AnimateIn>
        <section className="py-12 border-b border-[var(--border-dashed)]">
          <h2 className="text-[22px] font-semibold tracking-[-0.01em] text-[var(--text-primary)] mb-4">
            The challenge
          </h2>
          <p className="text-[15px] text-[var(--text-secondary)] leading-[1.7] max-w-[580px]">
            BESPOKE required more than a visual refresh. The business needed a
            stronger sense of identity — one that could express craftsmanship,
            imagination and premium quality without losing warmth or
            approachability. The task was not to redesign from scratch but to
            define a clearer brand character and a more consistent way of
            communicating across every touchpoint.
          </p>
        </section>
      </AnimateIn>

      {/* What I worked on */}
      <AnimateIn>
        <section className="py-12 border-b border-[var(--border-dashed)]">
          <h2 className="text-[22px] font-semibold tracking-[-0.01em] text-[var(--text-primary)] mb-5">
            What I worked on
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Brand refinement",
              "Positioning",
              "Tone of voice direction",
              "Visual direction",
              "Guideline thinking",
              "Communication consistency",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-[#999999] flex-shrink-0" />
                <span className="text-[15px] text-[var(--text-secondary)]">{item}</span>
              </div>
            ))}
          </div>
        </section>
      </AnimateIn>

      {/* Approach */}
      <AnimateIn>
        <section className="py-12 border-b border-[var(--border-dashed)]">
          <h2 className="text-[22px] font-semibold tracking-[-0.01em] text-[var(--text-primary)] mb-8">
            Approach
          </h2>
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="text-[17px] font-semibold text-[var(--text-primary)] mb-3">
                Defining the tone
              </h3>
              <p className="text-[15px] text-[var(--text-secondary)] leading-[1.7] max-w-[560px]">
                The core challenge was balancing premium positioning with
                genuine warmth. BESPOKE&apos;s work is craft-led and personal —
                the brand needed to feel considered and quality-conscious without
                becoming cold or corporate. Tone of voice and visual direction
                were developed in tandem to maintain that balance.
              </p>
            </div>
            <div>
              <h3 className="text-[17px] font-semibold text-[var(--text-primary)] mb-3">
                Building coherence
              </h3>
              <p className="text-[15px] text-[var(--text-secondary)] leading-[1.7] max-w-[560px]">
                A more aligned identity was developed across digital and brand
                expression — bringing consistency to how the business presented
                itself across web, messaging and visual application. The colour
                system, typographic approach and graphic language were refined
                into a more cohesive whole.
              </p>
            </div>
            <div>
              <h3 className="text-[17px] font-semibold text-[var(--text-primary)] mb-3">
                Shaping future consistency
              </h3>
              <p className="text-[15px] text-[var(--text-secondary)] leading-[1.7] max-w-[560px]">
                The work was structured to provide a stronger foundation for
                future communication — guidelines and positioning thinking that
                could inform decisions beyond the immediate project, giving the
                business a clearer creative anchor to work from.
              </p>
            </div>
          </div>
        </section>
      </AnimateIn>

      {/* Image strip */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <CaseStudyImage
          src="/images/screenshots/06-BespokeRebrand-Colorway.png"
          alt="BESPOKE colour system"
          caption="Refined colour system"
        />
        <CaseStudyImage
          src="/images/screenshots/07-BespokeRebrand-TreeIcons.png"
          alt="BESPOKE brand icons"
          caption="Brand icon system — tree illustrations"
        />
      </div>

      {/* Outcome */}
      <AnimateIn>
        <section className="py-12 border-b border-[var(--border-dashed)]">
          <h2 className="text-[22px] font-semibold tracking-[-0.01em] text-[var(--text-primary)] mb-4">
            Outcome
          </h2>
          <p className="text-[15px] text-[var(--text-secondary)] leading-[1.7] max-w-[580px]">
            The business gained a clearer, more distinctive and more coherent
            brand foundation — one that better reflects its craft, values and
            premium positioning. The identity work provided a stronger platform
            for future communication and a more confident outward presence
            across web, messaging and visual application.
          </p>
        </section>
      </AnimateIn>

      {/* Closing */}
      <AnimateIn>
        <section className="py-12">
          <p className="text-[15px] text-[var(--text-secondary)] leading-[1.7] max-w-[560px]">
            Projects like this are where identity work becomes genuinely useful
            — when brand and communication are developed together rather than
            separately, the result is something a business can actually build on.
          </p>
        </section>
      </AnimateIn>

      {/* CTA */}
      <AnimateIn>
        <div className="border-t border-[var(--border-dashed)] py-12 mb-10">
          <p className="text-[13px] text-[var(--text-muted)] mb-4">Want to discuss this project or work together?</p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:h.killick@triband.studio"
              className="text-[15px] font-medium text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors"
            >
              Email →
            </a>
            <a
              href="/cv/henry-killick-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors"
            >
              View CV →
            </a>
          </div>
        </div>
      </AnimateIn>
    </CaseStudyLayout>
  );
}
