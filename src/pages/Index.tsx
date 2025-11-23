import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { TruthSection } from "@/components/TruthSection";
import { ObjectionsSection } from "@/components/ObjectionsSection";
import { DifferentialSection } from "@/components/DifferentialSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { LearningsSection } from "@/components/LearningsSection";
import { TargetAudienceSection } from "@/components/TargetAudienceSection";
import { PriceSection } from "@/components/PriceSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TruthSection />
      <ObjectionsSection />
      <DifferentialSection />
      <TestimonialSection />
      <LearningsSection />
      <TargetAudienceSection />
      <PriceSection />
    </div>
  );
};

export default Index;
