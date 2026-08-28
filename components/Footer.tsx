import Image from "next/image";

const links = [
  { href: "/#problema", label: "O problema" },
  { href: "/#ideia", label: "A ideia" },
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#escola", label: "Na escola" },
  { href: "/#equipe", label: "Equipe" },
  { href: "/alerta-queimadas", label: "Alerta de queimadas" },
  { href: "/#juntar", label: "Participar" },
];

export function Footer() {
  return (
    <footer className="border-t border-forest/10 bg-ink py-12 text-mist/85">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 md:flex-row md:items-start md:justify-between md:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <Image
              src="/brand/icon-ecomind.png"
              alt=""
              width={512}
              height={512}
              className="h-9 w-9 rounded-full"
            />
            <span className="font-display text-xl font-semibold text-mist">
              EcoMind
            </span>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-mist/70">
            Consciência ambiental + tecnologia. Projeto escolar para educar sobre
            desmatamento e queimadas e cultivar ações concretas.
          </p>
        </div>

        <nav aria-label="Rodapé">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-sprout">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 px-5 pt-6 text-xs text-mist/55 md:px-8">
        <p>
          EcoMind · Projeto desenvolvido por alunos · Colégio Paulo de Tarso
        </p>
      </div>
    </footer>
  );
}
