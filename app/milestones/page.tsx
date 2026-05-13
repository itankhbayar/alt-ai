import { MilestonesHero } from "@/components/milestones/milestones-hero";
import { MilestonesTimeline } from "@/components/milestones/milestones-timeline";
import { MilestonesPrinciples } from "@/components/milestones/milestones-principles";
import { CtaSection } from "@/components/home/cta-section";

export default function MilestonesPage() {
  return (
    <>
      <MilestonesHero />
      <MilestonesTimeline />
      <MilestonesPrinciples />
      <CtaSection />
    </>
  );
}
