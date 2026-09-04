"use client";

import { FormEvent, useState } from "react";
import { Reveal } from "./Reveal";

type Status = "idle" | "error" | "success";

export function JoinForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  function validate(): string | null {
    if (name.trim().length < 2) {
      return "Informe seu nome completo.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return "Informe um e-mail válido.";
    }
    if (reason.trim().length < 10) {
      return "Conte um pouco mais sobre por que quer participar (mín. 10 caracteres).";
    }
    return null;
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const error = validate();
    if (error) {
      setStatus("error");
      setMessage(error);
      return;
    }

    // Sem backend nesta etapa: confirma adesão localmente.
    setStatus("success");
    setMessage(
      `Obrigado, ${name.trim().split(" ")[0]}! Sua intenção de participar foi registrada. Em breve a equipe EcoMind entra em contato.`,
    );
    setName("");
    setEmail("");
    setReason("");
  }

  return (
    <section
      id="juntar"
      className="relative border-t border-forest/10 bg-mist-soft/80 py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-forest-mid">
            Junte-se a nós
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-forest md:text-5xl">
            Plante conhecimento. Cultive consciência.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ash">
            Estamos recrutando alunos e pessoas da comunidade que queiram
            conscientizar, testar missões e ajudar a levar a EcoMind para a
            escola. Se a causa faz sentido para você, participe.
          </p>
          <ul className="mt-6 space-y-2 text-base text-ash">
            <li>— Compartilhar ideias e feedback</li>
            <li>— Validar conteúdo educativo com a turma</li>
            <li>— Ajudar a espalhar a conscientização</li>
          </ul>
        </Reveal>

        <Reveal delayMs={100}>
          {status === "success" ? (
            <div
              role="status"
              className="animate-fade-up rounded-lg border border-forest-mid/25 bg-white/80 p-8 shadow-[0_1px_0_rgba(27,94,59,0.06)]"
            >
              <p className="font-display text-2xl font-semibold text-forest">
                Bem-vindo à causa
              </p>
              <p className="mt-3 text-base leading-relaxed text-ash">{message}</p>
              <button
                type="button"
                className="mt-6 text-sm font-semibold text-forest-mid underline-offset-4 hover:underline"
                onClick={() => {
                  setStatus("idle");
                  setMessage("");
                }}
              >
                Enviar outra resposta
              </button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              className="space-y-5 rounded-lg border border-forest/10 bg-white/70 p-6 md:p-8"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-ink">
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5 w-full rounded-md border border-forest/20 bg-mist px-3.5 py-2.5 text-ink outline-none transition focus:border-forest-mid focus:ring-2 focus:ring-sprout/60"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-ink">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1.5 w-full rounded-md border border-forest/20 bg-mist px-3.5 py-2.5 text-ink outline-none transition focus:border-forest-mid focus:ring-2 focus:ring-sprout/60"
                  required
                />
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-semibold text-ink">
                  Por que quer participar?
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  rows={4}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="mt-1.5 w-full resize-y rounded-md border border-forest/20 bg-mist px-3.5 py-2.5 text-ink outline-none transition focus:border-forest-mid focus:ring-2 focus:ring-sprout/60"
                  required
                />
              </div>

              {status === "error" ? (
                <p role="alert" className="text-sm font-medium text-burn">
                  {message}
                </p>
              ) : null}

              <button
                type="submit"
                className="w-full rounded-md bg-forest px-5 py-3.5 text-base font-semibold text-mist transition hover:bg-forest-mid"
              >
                Quero fazer parte
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
