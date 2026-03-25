import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import CaseStudyImage from "@/components/CaseStudyImage";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Visualskies — Henry Killick",
  description:
    "Brand enhancement and website redesign for a specialist 3D scanning and volumetric capture studio.",
};

export default function VisualskyesPage() {
  return (
    <CaseStudyLayout>
      {/* Hero */}
      <section className="pt-16 pb-10">
        <AnimateIn>
          <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#999999] mb-4">
            Brand · Web · Positioning
          </p>
          <h1 className="text-[44px] md:text-[52px] font-semibold text-[#111111] leading-[1.05] tracking-[-0.02em] mb-4">
            Visualskies
          </h1>
          <p className="text-[17px] text-[#555555] leading-[1.5] max-w-[560px] mb-5">
            Brand enhancement and website redesign for a specialist 3D scanning
            and volumetric capture studio.
          </p>
          <a
            href="https://www.visualskies.co.uk"
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
        src="/images/screenshots/01-VisualSkies-Hero.png"
        alt="Visualskies homepage hero"
        priority
      />

      {/* Snapshot */}
      <AnimateIn>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-10 border-t border-b border-[#e5e5e5] my-4">
          {[
            { label: "Scope", value: "Brand / Web / Positioning" },
            { label: "Sector", value: "Emerging technology · 3D capture" },
            { label: "Focus", value: "Service clarity · Digital presence" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#999999] mb-1">
                {item.label}
              </p>
              <p className="text-[15px] text-[#111111]">{item.value}</p>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Why this mattered */}
      <AnimateIn>
        <section className="py-12 border-b border-[#e5e5e5]">
          <h2 className="text-[22px] font-semibold tracking-[-0.01em] text-[#111111] mb-4">
            Why this mattered
          </h2>
          <p className="text-[15px] text-[#555555] leading-[1.7] max-w-[600px]">
            Specialist technical businesses often lose commercial value when
            their digital presence fails to communicate the sophistication of
            their offer. Visualskies had the capabilities — VFX, virtual
            production, digital twins, advanced capture workflows — but their
            existing platform was not communicating that clearly or confidently
            enough.
          </p>
        </section>
      </AnimateIn>

      {/* The challenge */}
      <AnimateIn>
        <section className="py-12 border-b border-[#e5e5e5]">
          <h2 className="text-[22px] font-semibold tracking-[-0.01em] text-[#111111] mb-6">
            The challenge
          </h2>
          <div className="flex flex-col gap-5">
            {[
              "Advanced services were not being communicated with enough clarity or structure — it was difficult for visitors to understand the full scope of what the studio could offer.",
              "The site needed stronger hierarchy and flow — the relationship between services, case studies and capabilities was not coming through clearly.",
              "The brand presence needed to feel more aligned with the quality and precision of the work — future-facing, credible and technically confident.",
            ].map((point, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-[11px] font-medium text-[#999999] mt-1 flex-shrink-0 w-5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] text-[#555555] leading-[1.7]">{point}</p>
              </div>
            ))}
          </div>
        </section>
      </AnimateIn>

      <CaseStudyImage
        src="/images/screenshots/Visualskies-services-pathway-section.png"
        alt="Visualskies services pathway"
        caption="Services structured into three clear pathways — Capture, Create, Experience"
      />

      {/* My role */}
      <AnimateIn>
        <section className="py-12 border-b border-[#e5e5e5]">
          <h2 className="text-[22px] font-semibold tracking-[-0.01em] text-[#111111] mb-5">
            My role
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Brand refinement",
              "Service communication",
              "Site structure and hierarchy",
              "Content direction",
              "Visual system refinement",
              "Digital presence strategy",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-[#999999] flex-shrink-0" />
                <span className="text-[15px] text-[#555555]">{item}</span>
              </div>
            ))}
          </div>
        </section>
      </AnimateIn>

      {/* Approach */}
      <AnimateIn>
        <section className="py-12 border-b border-[#e5e5e5]">
          <h2 className="text-[22px] font-semibold tracking-[-0.01em] text-[#111111] mb-8">
            Approach
          </h2>
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="text-[17px] font-semibold text-[#111111] mb-3">
                Clarifying the offer
              </h3>
              <p className="text-[15px] text-[#555555] leading-[1.7] max-w-[560px]">
                Services were restructured into three clear pathways — Capture,
                Create, Experience — each with a distinct audience and
                proposition. This made the scope of the studio&apos;s work
                immediately legible without overwhelming visitors with technical
                detail up front.
              </p>
            </div>
            <div>
              <h3 className="text-[17px] font-semibold text-[#111111] mb-3">
                Strengthening the digital experience
              </h3>
              <p className="text-[15px] text-[#555555] leading-[1.7] max-w-[560px]">
                Content hierarchy and user flow were improved to build
                confidence and understanding progressively. The work section was
                rebuilt to lead with visually compelling project examples,
                drawing visitors into the quality of the output before detailing
                the technical process behind it.
              </p>
            </div>
            <div>
              <h3 className="text-[17px] font-semibold text-[#111111] mb-3">
                Elevating perception
              </h3>
              <p className="text-[15px] text-[#555555] leading-[1.7] max-w-[560px]">
                The visual direction was refined to feel more advanced and
                precise — dark, technical, future-facing. Typography, spacing
                and imagery were tightened to communicate the sophistication of
                the studio&apos;s capabilities without relying on explanation alone.
              </p>
            </div>
          </div>
        </section>
      </AnimateIn>

      {/* Image strip */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <CaseStudyImage
          src="/images/screenshots/Visualskies-Our-Work-Grid-section.png"
          alt="Visualskies work grid"
          caption="Work grid — project-led, visually driven"
        />
        <CaseStudyImage
          src="/images/screenshots/Visualskies---Our-work-Project-page.png"
          alt="Visualskies project page"
          caption="Individual project page — cinematic and detailed"
        />
      </div>

      {/* Selected decisions */}
      <AnimateIn>
        <section className="py-12 border-b border-[#e5e5e5]">
          <h2 className="text-[22px] font-semibold tracking-[-0.01em] text-[#111111] mb-6">
            Selected decisions
          </h2>
          <div className="flex flex-col gap-6">
            {[
              {
                decision: "Clearer navigation and information hierarchy",
                detail:
                  "The navigation was restructured to reflect the three core service areas, making it easier for different audiences — VFX supervisors, tech directors, producers — to find relevant information quickly.",
              },
              {
                decision: "Stronger case study framing",
                detail:
                  "Project pages were redesigned to lead with the visual impact of the work first, with production credits and technical details supporting rather than leading the story.",
              },
              {
                decision: "More future-facing visual language",
                detail:
                  "Typographic weight, spacing and image treatment were refined to communicate precision and technical authority — a visual language that matches the quality of the studio&apos;s output.",
              },
            ].map((item) => (
              <div key={item.decision} className="border-l-2 border-[#e5e5e5] pl-5">
                <p className="text-[15px] font-semibold text-[#111111] mb-1">
                  {item.decision}
                </p>
                <p className="text-[15px] text-[#555555] leading-[1.7]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>
      </AnimateIn>

      <CaseStudyImage
        src="/images/screenshots/vs-web-home-Flatlay-delivery.jpg"
        alt="Visualskies full homepage"
        caption="Full homepage composition"
      />

      {/* Mobile + FAQ strip */}
      <div className="grid grid-cols-2 gap-4 my-4">
        <CaseStudyImage
          src="/images/screenshots/vs-web-home-Flatlay_Mobile.jpg"
          alt="Visualskies mobile view"
          caption="Responsive mobile layout"
          aspect="tall"
        />
        <CaseStudyImage
          src="/images/screenshots/12-VisualSkies-CaptureFeatures.png"
          alt="Visualskies capture features"
          caption="Capture service — feature detail"
          aspect="tall"
        />
      </div>

      {/* Outcome */}
      <AnimateIn>
        <section className="py-12 border-b border-[#e5e5e5]">
          <h2 className="text-[22px] font-semibold tracking-[-0.01em] text-[#111111] mb-4">
            Outcome
          </h2>
          <p className="text-[15px] text-[#555555] leading-[1.7] max-w-[580px]">
            The result was a more coherent and commercially useful platform that
            better reflects the sophistication of the studio&apos;s capabilities.
            Specialist services are communicated with greater confidence and
            clarity, the work is presented with the visual weight it deserves,
            and the overall platform better positions Visualskies as a serious
            technical partner for high-end production.
          </p>
        </section>
      </AnimateIn>

      {/* Closing reflection */}
      <AnimateIn>
        <section className="py-12">
          <p className="text-[15px] text-[#555555] leading-[1.7] max-w-[560px]">
            This project sits at the centre of what I do best — helping
            specialist businesses translate complexity into clarity through
            brand and digital structure. The challenge was not just design. It
            was making something technically advanced feel immediately
            understandable and commercially credible.
          </p>
        </section>
      </AnimateIn>

      {/* CTA */}
      <AnimateIn>
        <div className="border-t border-[#e5e5e5] py-12 mb-10">
          <p className="text-[13px] text-[#999999] mb-4">Want to discuss this project or work together?</p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:h.killick@triband.studio"
              className="text-[15px] font-medium text-[#111111] hover:text-[#555555] transition-colors"
            >
              Email →
            </a>
            <a
              href="/cv/henry-killick-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-[#111111] hover:text-[#555555] transition-colors"
            >
              View CV →
            </a>
          </div>
        </div>
      </AnimateIn>
    </CaseStudyLayout>
  );
}
