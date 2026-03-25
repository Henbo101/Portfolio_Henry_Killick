import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import CaseStudyImage from "@/components/CaseStudyImage";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Campaign WPI — Henry Killick",
  description:
    "Structuring insight-led content into a clearer and more engaging editorial experience.",
};

export default function CampaignWPIPage() {
  return (
    <CaseStudyLayout>
      {/* Hero */}
      <section className="pt-16 pb-10">
        <AnimateIn>
          <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-[var(--text-muted)] mb-4">
            Editorial · Digital Experience · Content Design
          </p>
          <h1 className="text-[44px] md:text-[52px] font-semibold text-[var(--text-primary)] leading-[1.05] tracking-[-0.02em] mb-4">
            Campaign WPI
          </h1>
          <p className="text-[17px] text-[var(--text-secondary)] leading-[1.5] max-w-[560px] mb-5">
            Structuring insight-led content into a digital editorial experience
            designed to carry information with more pace and visual impact.
          </p>
          <a
            href="https://www.campaignlive.co.uk/2025-worlds-top-independent-agencies"
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
        src="/images/screenshots/20-WPI-ArmoreGroup-Hero.png"
        alt="Campaign WPI hero"
        priority
      />

      {/* Context */}
      <AnimateIn>
        <section className="py-12 border-b border-[var(--border-dashed)]">
          <h2 className="text-[22px] font-semibold tracking-[-0.01em] text-[var(--text-primary)] mb-4">
            Context
          </h2>
          <p className="text-[15px] text-[var(--text-secondary)] leading-[1.7] max-w-[580px]">
            Campaign WPI produces industry insight content for specialist
            audiences. The work centred on how that content was structured,
            presented and experienced digitally — moving from static information
            delivery towards something with more flow, hierarchy and editorial
            momentum.
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
            Information alone does not create engagement. It needs rhythm,
            hierarchy and narrative movement. The challenge was to make
            insight-led material feel worth reading — not just worth filing —
            by applying editorial thinking to how the content was arranged and
            experienced.
          </p>
        </section>
      </AnimateIn>

      {/* What I focused on */}
      <AnimateIn>
        <section className="py-12 border-b border-[var(--border-dashed)]">
          <h2 className="text-[22px] font-semibold tracking-[-0.01em] text-[var(--text-primary)] mb-8">
            What I focused on
          </h2>
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="text-[17px] font-semibold text-[var(--text-primary)] mb-3">
                Story flow
              </h3>
              <p className="text-[15px] text-[var(--text-secondary)] leading-[1.7] max-w-[560px]">
                A clearer path through the content was established — one with
                a logical sequence that built understanding progressively rather
                than presenting everything at the same weight. Each section was
                given a role in moving the argument forward.
              </p>
            </div>
            <div>
              <h3 className="text-[17px] font-semibold text-[var(--text-primary)] mb-3">
                Visual rhythm
              </h3>
              <p className="text-[15px] text-[var(--text-secondary)] leading-[1.7] max-w-[560px]">
                Spacing, hierarchy and layout were used to control pacing —
                giving readers places to pause, scan and re-engage rather than
                confronting them with an undifferentiated wall of content.
              </p>
            </div>
            <div>
              <h3 className="text-[17px] font-semibold text-[var(--text-primary)] mb-3">
                Readability
              </h3>
              <p className="text-[15px] text-[var(--text-secondary)] leading-[1.7] max-w-[560px]">
                Typography and content block structure were refined to make the
                material easier to scan and absorb — particularly important for
                audiences engaging with specialist industry content in a
                professional context.
              </p>
            </div>
          </div>
        </section>
      </AnimateIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <CaseStudyImage
          src="/images/screenshots/21-WPI-ArmoreGroup-Tagline.png"
          alt="Campaign WPI tagline section"
          caption="Tagline and positioning statement"
        />
        <CaseStudyImage
          src="/images/screenshots/22-WPI-ArmoreGroup-Description.png"
          alt="Campaign WPI description section"
          caption="Content body and supporting copy"
        />
      </div>

      <CaseStudyImage
        src="/images/screenshots/21-WPI-ArmoreGroup-Tagline-Flip-Cards.png"
        alt="Campaign WPI flip cards"
        caption="Structured content presented with editorial rhythm"
      />

      {/* Outcome */}
      <AnimateIn>
        <section className="py-12 border-b border-[var(--border-dashed)]">
          <h2 className="text-[22px] font-semibold tracking-[-0.01em] text-[var(--text-primary)] mb-4">
            Outcome
          </h2>
          <p className="text-[15px] text-[var(--text-secondary)] leading-[1.7] max-w-[580px]">
            The result was a stronger and more momentum-driven reading
            experience — one where the insight felt easier to access and the
            content felt worth engaging with rather than simply referencing.
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
