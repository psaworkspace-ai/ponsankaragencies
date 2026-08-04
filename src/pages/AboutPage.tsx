import { Seo } from "@/components/common/Seo";

import { AboutHero } from "../components/sections/about/AboutHero";
import { CompanyStory } from "../components/sections/about/CompanyStory";
import { Timeline } from "../components/sections/about/Timeline";
import { VisionMission } from "../components/sections/about/VisionMission";

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Us"
        description="Over three decades of delivering premium piping solutions across Tamil Nadu."
        path="/about"
      />

      <section id="hero" className="scroll-mt-20">
        <AboutHero />
      </section>

      <section id="company-story" className="scroll-mt-20">
        <CompanyStory />
      </section>

      <section id="vision-mission" className="scroll-mt-20">
        <VisionMission />
      </section>

      <section id="timeline" className="scroll-mt-20">
        <Timeline />
      </section>
    </>
  );
}