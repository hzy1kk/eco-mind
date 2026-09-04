import { AlertsPreview } from "@/components/AlertsPreview";
import { CarbonPreview } from "@/components/CarbonPreview";
import {
  ClimateReality,
  ImpactStats,
} from "@/components/ClimateSections";
import { CtaBanner } from "@/components/CtaBanner";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Idea } from "@/components/Idea";
import { JoinForm } from "@/components/JoinForm";
import { Problem } from "@/components/Problem";
import { QuizPreview } from "@/components/QuizPreview";
import { School } from "@/components/School";
import { Team } from "@/components/Team";
import { TrustStrip } from "@/components/TrustStrip";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <FeaturesGrid />
        <ImpactStats />
        <Problem />
        <Idea />
        <HowItWorks />
        <CarbonPreview />
        <ClimateReality />
        <QuizPreview />
        <AlertsPreview />
        <School />
        <Team />
        <CtaBanner />
        <JoinForm />
      </main>
      <Footer />
    </>
  );
}
