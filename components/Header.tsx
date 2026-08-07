"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#problema", label: "O problema" },
  { href: "#ideia", label: "A ideia" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#escola", label: "Na escola" },
  { href: "#equipe", label: "Equipe" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-forest/10 bg-mist/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <a href="#topo" className="flex items-center gap-2.5">
          <Image
            src="/brand/icon-ecomind.svg"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10"
            priority
          />
          <span
            className={`font-display text-xl font-semibold tracking-tight transition-colors ${
              scrolled || open ? "text-forest" : "text-mist"
            }`}
          >
            EcoMind
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:opacity-80 ${
                scrolled ? "text-ink/80" : "text-mist/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#juntar"
            className="rounded-md bg-sprout px-4 py-2 text-sm font-semibold text-forest transition hover:bg-white"
          >
            Quero participar
          </a>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className={`rounded-md px-3 py-2 text-sm font-semibold lg:hidden ${
            scrolled || open
              ? "bg-forest/10 text-forest"
              : "bg-white/15 text-mist"
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-forest/10 bg-mist px-5 py-4 lg:hidden">
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-1 text-base font-medium text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#juntar"
                className="mt-1 inline-flex rounded-md bg-forest px-4 py-2.5 text-sm font-semibold text-mist"
                onClick={() => setOpen(false)}
              >
                Quero participar
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
