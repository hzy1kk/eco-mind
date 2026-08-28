import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Baixar app — EcoMind",
  description:
    "Instale a EcoMind no celular ou use no navegador — calculadora, quiz e mapa de queimadas.",
};

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
              className="h-16 w-16 rounded-2xl"
            />
            <div>
              <h1 className="font-display text-3xl font-semibold text-forest">
                Baixe a EcoMind
              </h1>
              <p className="text-ash">Consciência ambiental + tecnologia</p>
            </div>
          </div>

          <div className="mt-10 space-y-6">
            <section className="rounded-xl border border-forest/15 bg-white/80 p-6">
              <h2 className="font-display text-xl font-semibold text-forest">
                Instalar no celular (recomendado)
              </h2>
              <ul className="mt-4 space-y-3 text-base text-ash">
                <li>
                  <strong className="text-ink">Android (Chrome):</strong> abra o
                  site → menu ⋮ → &quot;Instalar app&quot; ou &quot;Adicionar à
                  tela inicial&quot;
                </li>
                <li>
                  <strong className="text-ink">iPhone (Safari):</strong>{" "}
                  Compartilhar → &quot;Adicionar à Tela de Início&quot;
                </li>
              </ul>
              <Link
                href="/"
                className="mt-5 inline-flex rounded-md bg-forest px-5 py-3 text-sm font-semibold text-mist hover:bg-forest-mid"
              >
                Abrir o app no navegador
              </Link>
            </section>

            <section className="rounded-xl border border-forest/15 bg-white/80 p-6">
              <h2 className="font-display text-xl font-semibold text-forest">
                O que inclui
              </h2>
              <ul className="mt-4 space-y-2 text-ash">
                <li>— Calculadora de pegada de carbono</li>
                <li>— Quiz ambiental com dados reais</li>
                <li>— Mapa de queimadas (INPE)</li>
                <li>— Reporte comunitário de focos</li>
              </ul>
            </section>

            <section className="rounded-xl border border-dashed border-forest/25 bg-mist-soft/50 p-6">
              <h2 className="font-display text-xl font-semibold text-forest">
                Download Android (APK)
              </h2>
              <p className="mt-2 text-sm text-ash">
                Em breve: arquivo APK para instalar fora da Play Store. Por
                enquanto, use a instalação PWA acima.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
