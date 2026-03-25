import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import CaseStudyImage from "@/components/CaseStudyImage";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Akin Biomethane — Henry Killick",
  description:
    "Transforming a technical energy topic into a clearer thought-leadership narrative.",
};

export default function AkinBiomethanePage() {
  return (
    <CaseStudyLayout>
      {/* Hero */}
      <section className="pt-16 pb-10">
        <AnimateIn>
          <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-[var(--text-muted)] mb-4">
            Editorial · Thought Leadership · Narrative
          </p>
          <h1 className="text-[44px] md:text-[52px] font-semibold text-[var(--text-primary)] leading-[1.05] tracking-[-0.02em] mb-4">
            Akin Biomethane
          </h1>
          <p className="text-[17px] text-[var(--text-secondary)] leading-[1.5] max-w-[560px] mb-5">
            Transforming technical sector research into a thought-leadership
            story with greater clarity, momentum and commercial relevance.
          </p>
          <a
            href="https://www.akingump.com/en/insights/articles/untapped-potential-the-opportunity-in-biomethane-production"
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
        src="/images/screenshots/04-AkinBiomethane-Hero.png"
        alt="Akin Biomethane hero"
        priority
      />

      {/* Context */}
      <AnimateIn>
        <section className="py-12 border-b border-[var(--border-dashed)]">
          <h2 className="text-[22px] font-semibold tracking-[-0.01em] text-[var(--text-primary)] mb-4">
            Context
          </h2>
          <p className="text-[15px] text-[var(--text-secondary)] leading-[1.7] max-w-[580px]">
            Akin&apos;s work in biomethane production sits within a technically
            demanding sector where credibility is everything. The piece focused
            on communicating the opportunity in biomethane through stronger
            framing and clearer digital presentation — making a complex subject
            accessible without losing the depth and authority it required.
          </p>
        </section>
      </AnimateIn>

      {/* The challenge */}
      <AnimateIn>
        <section className="py-12 border-b border-[var(--border-dashed)]">
          <h2 className="text-[22px] font-semibold tracking-[-0.01em] text-[var(--text-primary)] mb-4">
            The challenge
          </h2>
          <p className="text-[15px] text-[var(--text-secondary)] leading-[1.7] max-w-[580px]">
            Specialist sector writing can quickly become dense unless hierarchy,
            pacing and narrative framing are handled carefully. The challenge
            was to make the material feel driven and readable — giving readers
            a clear reason to keep going without diluting the substance of what
            was being communicated.
          </p>
        </section>
      </AnimateIn>

      <CaseStudyImage
        src="/images/screenshots/08-AkinBiomethane-CaseStudy.png"
        alt="Akin Biomethane case study layout"
        caption="Content structure and narrative hierarchy"
      />

      {/* Narrative approach */}
      <AnimateIn>
        <section className="py-12 border-b border-[var(--border-dashed)]">
          <h2 className="text-[22px] font-semibold tracking-[-0.01em] text-[var(--text-primary)] mb-8">
            Narrative approach
          </h2>
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="text-[17px] font-semibold text-[var(--text-primary)] mb-3">
                Framing the story
              </h3>
              <p className="text-[15px] text-[var(--text-secondary)] leading-[1.7] max-w-[560px]">
                A stronger lead and a clearer opening argument were developed to
                give the piece more momentum from the start. The goal was to
                establish why this subject mattered before asking readers to
                engage with technical detail.
              </p>
            </div>
            <div>
              <h3 className="text-[17px] font-semibold text-[var(--text-primary)] mb-3">
                Structuring complexity
              </h3>
              <p className="text-[15px] text-[var(--text-secondary)] leading-[1.7] max-w-[560px]">
                Technical material was broken into more digestible narrative
                steps — each section given a clear role in the overall
                argument, with transitions that carried the reader forward
                rather than leaving them to navigate dense information alone.
              </p>
            </div>
            <div>
              <h3 className="text-[17px] font-semibold text-[var(--text-primary)] mb-3">
                Supporting authority
              </h3>
              <p className="text-[15px] text-[var(--text-secondary)] leading-[1.7] max-w-[560px]">
                Data visualisation and structured content blocks were used to
                keep the piece credible while making it more accessible — the
                numbers and research were presented in a way that reinforced the
                argument rather than interrupting it.
              </p>
            </div>
          </div>
        </section>
      </AnimateIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <CaseStudyImage
          src="/images/screenshots/09-AkinBiomethane-DataChart.png"
          alt="Akin Biomethane data chart"
          caption="Data visualisation — making numbers legible"
        />
        <CaseStudyImage
          src="/images/screenshots/10-AkinBiomethane-PageContent.png"
          alt="Akin Biomethane page content"
          caption="Page content structure and hierarchy"
        />
      </div>

      {/* Outcome */}
      <AnimateIn>
        <section className="py-12 border-b border-[var(--border-dashed)]">
          <h2 className="text-[22px] font-semibold tracking-[-0.01em] text-[var(--text-primary)] mb-4">
            Outcome
          </h2>
          <p className="text-[15px] text-[var(--text-secondary)] leading-[1.7] max-w-[580px]">
            The result was a clearer, more engaging and more commercially useful
            thought-leadership piece — one that communicated the opportunity in
            biomethane with greater authority, without losing the depth the
            subject required.
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
