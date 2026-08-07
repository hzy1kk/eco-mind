import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Idea } from "@/components/Idea";
import { JoinForm } from "@/components/JoinForm";
import { Problem } from "@/components/Problem";
import { School } from "@/components/School";
import { Team } from "@/components/Team";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Idea />
        <HowItWorks />
        <School />
        <Team />
        <JoinForm />
      </main>
      <Footer />
    </>
  );
}
