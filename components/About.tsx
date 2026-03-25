import Image from "next/image";
import AnimateIn from "./AnimateIn";

export default function About() {
  return (
    <section>
      <h2 className="text-[22px] font-semibold text-[var(--text-primary)] tracking-[-0.01em] mb-6">
        About
      </h2>
      <AnimateIn>
        <div className="rounded-2xl border border-dashed border-[var(--border-dashed)] p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h3 className="text-[17px] font-semibold text-[var(--text-primary)] mb-4">
                Behind the Work
              </h3>
              <div className="flex flex-col gap-3 text-[15px] text-[var(--text-secondary)] leading-[1.7]">
                <p>I work at the point where design, narrative and commercial clarity meet.</p>
                <p>
                  My practice is centred on helping organisations explain themselves
                  better — whether that means refining a brand, building a website,
                  or shaping research and technical information into something more
                  engaging and legible.
                </p>
                <p>
                  I am particularly interested in projects that sit between
                  complexity and communication: specialist services, dense subject
                  matter, emerging technology, editorial storytelling and businesses
                  that need a sharper digital presence.
                </p>
                <p>
                  Narrative development through brand storytelling, harnessing data
                  and establishing a digital presence sits at the core of how I
                  work — helping studios, agencies and brands better articulate what
                  makes their work matter.
                </p>
              </div>
              <a
                href="/cv/henry-killick-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-6 px-4 py-2 text-[13px] font-medium bg-[var(--text-primary)] text-white rounded-lg hover:opacity-75 transition-opacity"
              >
                View CV
              </a>
            </div>

            <div className="w-full md:w-[200px] flex-shrink-0">
              <div className="rounded-xl overflow-hidden bg-[#f0f0f0] aspect-square">
                <Image
                  src="/images/headshot.jpg"
                  alt="Henry Killick"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
