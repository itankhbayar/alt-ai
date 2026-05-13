import { AboutHero } from "@/components/about/about-hero";
import { AboutVisionMissionStory } from "@/components/about/about-vision-mission-story";
import { AboutValues } from "@/components/about/about-values";
import { AboutLeadership } from "@/components/about/about-leadership";
import { AboutStats } from "@/components/about/about-stats";
import { AboutCta } from "@/components/about/about-cta";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutVisionMissionStory />
      <AboutValues />
      <AboutLeadership />
      <AboutStats />
      <AboutCta />
    </>
  );
}
