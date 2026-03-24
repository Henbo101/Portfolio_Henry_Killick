import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import ProjectCard from "@/components/ProjectCard";
import ThoughtProgression from "@/components/ThoughtProgression";
import WorkExperience from "@/components/WorkExperience";
import About from "@/components/About";
import SelectedCapabilities from "@/components/SelectedCapabilities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <div className="max-w-[820px] mx-auto border-x border-dashed border-[var(--border-dashed)] min-h-screen flex flex-col">
      <Nav />

      <main className="px-6 md:px-10 flex-1">
        <Hero />
        <Divider />

        <ImpactStats />
        <Divider />

        <section>
          <h2 className="text-[18px] font-semibold text-[var(--text-primary)] mb-6">
            Projects
          </h2>
          <div className="flex flex-col gap-5">
            <ProjectCard
              href="/projects/visualskies"
              title="Visualskies"
              description="Brand enhancement and website redesign for a specialist 3D scanning and volumetric capture studio — clearer services, stronger case study framing and a more future-facing visual language."
              tags={["Brand Refinement", "Website Redesign", "Messaging", "Service Positioning", "Content Direction"]}
              imageSrc="/images/screenshots/01-VisualSkies-Hero.png"
              imageAlt="Visualskies website"
            />
            <ProjectCard
              href="/projects/bespoke"
              title="BESPOKE Garden Play"
              description="Rebranding and positioning for a boutique Devon playhouse company — shaping a clearer brand character that expresses craftsmanship and premium quality without losing warmth."
              tags={["Brand Refinement", "Positioning", "Tone of Voice", "Visual System", "Digital Presentation"]}
              imageSrc="/images/screenshots/05-BespokeRebrand-BrandStrategy.png"
              imageAlt="BESPOKE Garden Play brand"
              imagePosition="left"
            />
          </div>
        </section>
        <Divider />

        <ThoughtProgression />
        <Divider />

        <WorkExperience />
        <Divider />

        <About />
        <Divider />

        <SelectedCapabilities />
        <Divider />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
