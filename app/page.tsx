import { AlertsPreview } from "@/components/AlertsPreview";
import { CarbonPreview } from "@/components/CarbonPreview";
import {
  ClimateReality,
  ImpactStats,
} from "@/components/ClimateSections";
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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
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
        <JoinForm />
      </main>
      <Footer />
    </>
  );
}
