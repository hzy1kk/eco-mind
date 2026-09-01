import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { QrInstall } from "@/components/shell/QrInstall";

export const metadata: Metadata = {
  title: "Baixar app",
  description:
    "Instale a EcoMind no celular — calculadora, quiz e mapa de queimadas com dados do INPE.",
};

const features = [
  { icon: "◎", text: "Calculadora de pegada de carbono" },
  { icon: "?", text: "Quiz ambiental com dados reais" },
  { icon: "⊕", text: "Mapa de queimadas (INPE)" },
  { icon: "+", text: "Reporte comunitário de focos" },
];

export default function BaixarPage() {
  return (
    <>
      <Header solid />
      <main className="min-h-screen bg-atmosphere pt-24 pb-16">
        <div className="mx-auto max-w-2xl px-5 md:px-8">
          <div className="flex items-center gap-4">
            <Image
              src="/brand/icon-ecomind.png"
              alt=""
              width={64}
              height={64}
              className="h-16 w-16 rounded-2xl shadow-md ring-2 ring-sprout/30"
            />
            <div>
              <h1 className="font-display text-3xl font-semibold text-forest">
                Baixe a EcoMind
              </h1>
              <p className="text-ash">Consciência ambiental + tecnologia</p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-[1fr_auto]">
            <div className="space-y-6">
              <section className="glass-panel rounded-2xl p-6 shadow-sm">
                <h2 className="font-display text-xl font-semibold text-forest">
                  Instalar no celular
                </h2>
                <ul className="mt-4 space-y-3 text-base text-ash">
                  <li>
                    <strong className="text-ink">Android:</strong> Chrome → menu
                    ⋮ → Instalar app
                  </li>
                  <li>
                    <strong className="text-ink">iPhone:</strong> Safari →
                    Compartilhar → Adicionar à Tela de Início
                  </li>
                </ul>
                <Link
                  href="/"
                  className="btn-primary mt-5 inline-flex rounded-md bg-forest px-5 py-3 text-sm font-semibold text-mist"
                >
                  Abrir no navegador
                </Link>
              </section>

              <section className="glass-panel rounded-2xl p-6 shadow-sm">
                <h2 className="font-display text-xl font-semibold text-forest">
                  O que inclui
                </h2>
                <ul className="mt-4 space-y-3">
                  {features.map((f) => (
                    <li key={f.text} className="flex items-center gap-3 text-ash">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sprout/30 text-sm text-forest">
                        {f.icon}
                      </span>
                      {f.text}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <section className="glass-panel flex flex-col items-center rounded-2xl p-6 shadow-sm">
              <h2 className="font-display text-lg font-semibold text-forest">
                QR Code
              </h2>
              <div className="mt-4">
                <QrInstall />
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
