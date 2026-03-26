import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import CaseStudyImage from "@/components/CaseStudyImage";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Cleary Energy — Henry Killick",
  description:
    "Making a complex energy outlook more navigable, authoritative and engaging.",
};

export default function ClearyEnergyPage() {
  return (
    <CaseStudyLayout>
      {/* Hero */}
      <section className="pt-16 pb-10">
        <AnimateIn>
          <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-[var(--text-muted)] mb-4">
            Editorial · Strategy · Information Design
          </p>
          <h1 className="text-[44px] md:text-[52px] font-semibold text-[var(--text-primary)] leading-[1.05] tracking-[-0.02em] mb-4">
            Cleary Energy
          </h1>
          <p className="text-[17px] text-[var(--text-secondary)] leading-[1.5] max-w-[560px] mb-5">
            Making a complex energy outlook more navigable, authoritative and
            engaging.
          </p>
          <a
            href="https://content.clearygottlieb.com/energy/energy-update/eu-energy-outlook-key-developments-and-challenges-in-the-2024-energy-landscape/index.html"
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
        src="/images/screenshots/03-ClearyEnergy-EUEnergyOutlook.png"
        alt="Cleary Energy EU outlook"
        priority
      />

      {/* Context */}
      <AnimateIn>
        <section className="py-12 border-b border-[var(--border-dashed)]">
          <h2 className="text-[33px] font-semibold tracking-[-0.01em] text-[var(--text-primary)] mb-4">
            Context
          </h2>
          <p className="text-[15px] text-[var(--text-secondary)] leading-[1.7] max-w-[580px]">
            Cleary Gottlieb&apos;s energy practice produces longform analysis on
            key regulatory and market developments across the European energy
            landscape. This piece covered complex legislative and policy
            material — the kind of content that is genuinely important but
            easily loses its audience through density and structure.
          </p>
        </section>
      </AnimateIn>

      {/* The challenge */}
      <AnimateIn>
        <section className="py-12 border-b border-[var(--border-dashed)]">
          <h2 className="text-[33px] font-semibold tracking-[-0.01em] text-[var(--text-primary)] mb-4">
            The challenge
          </h2>
          <p className="text-[15px] text-[var(--text-secondary)] leading-[1.7] max-w-[580px]">
            Legal and policy-led content often loses readability through density,
            despite its importance. The work required a careful balance: making
            the material more navigable and accessible without compromising the
            authority and precision that its specialist audience expected.
          </p>
        </section>
      </AnimateIn>

      {/* My role */}
      <AnimateIn>
        <section className="py-12 border-b border-[var(--border-dashed)]">
          <h2 className="text-[33px] font-semibold tracking-[-0.01em] text-[var(--text-primary)] mb-5">
            My role
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Narrative segmentation",
              "Information hierarchy",
              "Pacing and editorial flow",
              "Digital editorial presentation",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-[var(--text-secondary)] flex-shrink-0" />
                <span className="text-[14px] text-[var(--text-secondary)]">{item}</span>
              </div>
            ))}
          </div>
        </section>
      </AnimateIn>

      {/* Approach */}
      <AnimateIn>
        <section className="py-12 border-b border-[var(--border-dashed)]">
          <h2 className="text-[33px] font-semibold tracking-[-0.01em] text-[var(--text-primary)] mb-8">
            Approach
          </h2>
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="text-[17px] font-semibold text-[var(--text-primary)] mb-3">
                Breaking the topic into clear chapters
              </h3>
              <p className="text-[15px] text-[var(--text-secondary)] leading-[1.7] max-w-[560px]">
                The content was segmented into distinct thematic stages,
                allowing readers to move through a complex regulatory landscape
                in manageable steps rather than confronting it as a single
                undifferentiated body of information.
              </p>
            </div>
            <div>
              <h3 className="text-[17px] font-semibold text-[var(--text-primary)] mb-3">
                Improving information hierarchy
              </h3>
              <p className="text-[15px] text-[var(--text-secondary)] leading-[1.7] max-w-[560px]">
                Key developments were surfaced more clearly through typographic
                treatment and structural emphasis — making it easier for readers
                to identify what mattered and follow the argument without having
                to work through everything at the same level of detail.
              </p>
            </div>
            <div>
              <h3 className="text-[17px] font-semibold text-[var(--text-primary)] mb-3">
                Supporting authority through structure
              </h3>
              <p className="text-[15px] text-[var(--text-secondary)] leading-[1.7] max-w-[560px]">
                The approach was deliberately restrained — clarity and
                accessibility were introduced through structure and pacing
                rather than graphic treatment, keeping the piece serious and
                credible while reducing the friction involved in reading it.
              </p>
            </div>
          </div>
        </section>
      </AnimateIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <CaseStudyImage
          src="/images/screenshots/18-ClearyEnergy-MethaneRegulation.png"
          alt="Cleary Energy methane regulation"
          caption="Methane regulation — structured for clarity"
        />
        <CaseStudyImage
          src="/images/screenshots/19-ClearyEnergy-MuchWorkAhead.png"
          alt="Cleary Energy much work ahead"
          caption="Section structure and editorial pacing"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <CaseStudyImage
          src="/images/screenshots/03-ClearyEnergy-EUEnergyOutlook-Design-Direction.png"
          alt="Cleary Energy design direction"
          caption="Design direction and visual hierarchy"
        />
        <CaseStudyImage
          src="/images/screenshots/03-ClearyEnergy-EUEnergyOutlook-DataArray.png"
          alt="Cleary Energy data array"
          caption="Data presentation — authoritative and accessible"
        />
      </div>

      {/* Outcome */}
      <AnimateIn>
        <section className="py-12 border-b border-[var(--border-dashed)]">
          <h2 className="text-[33px] font-semibold tracking-[-0.01em] text-[var(--text-primary)] mb-4">
            Outcome
          </h2>
          <p className="text-[15px] text-[var(--text-secondary)] leading-[1.7] max-w-[580px]">
            The result was a more coherent, accessible and authoritative reading
            experience — one that allowed readers to engage with complex energy
            analysis at their own pace, with a clear sense of where they were in
            the argument and where it was heading.
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
