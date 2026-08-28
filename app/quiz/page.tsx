import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Quiz } from "@/components/Quiz";

export const metadata: Metadata = {
  title: "Quiz ambiental — EcoMind",
  description:
    "Teste seu conhecimento sobre clima, Amazônia e pegada de carbono.",
};

export default function QuizPage() {
  return (
    <>
      <Header solid />
      <main className="min-h-screen bg-atmosphere pt-24 pb-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-forest-mid">
            Teste seu conhecimento
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold text-forest md:text-5xl">
            Quanto você sabe sobre o seu planeta?
          </h1>
          <div className="mt-12">
            <Quiz />
          </div>
        </div>
      </main>
    </>
  );
}
