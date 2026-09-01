import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-atmosphere px-5 text-center">
      <p className="text-6xl">🌿</p>
      <h1 className="mt-4 font-display text-3xl font-semibold text-forest">
        Página não encontrada
      </h1>
      <p className="mt-2 max-w-md text-ash">
        Essa trilha não existe na floresta digital. Volte ao início e continue
        explorando o EcoMind.
      </p>
      <Link
        href="/"
        className="btn-primary mt-8 inline-flex rounded-md bg-forest px-6 py-3 text-sm font-semibold text-mist"
      >
        Voltar ao início
      </Link>
    </main>
  );
}
