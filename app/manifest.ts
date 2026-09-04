import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "EcoMind — Consciência ambiental",
    short_name: "EcoMind",
    description:
      "Calculadora de pegada, quiz ambiental e mapa de queimadas com dados do INPE.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7fcf8",
    theme_color: "#1b5e3b",
    lang: "pt-BR",
    icons: [
      {
        src: "/brand/icon-ecomind.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/brand/icon-ecomind.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      { name: "Calculadora", url: "/calculadora", description: "Calcule sua pegada" },
      {
        name: "Mapa de queimadas",
        url: "/alerta-queimadas",
        description: "Focos INPE em tempo real",
      },
      { name: "Quiz", url: "/quiz", description: "Teste seu conhecimento" },
    ],
  };
}
