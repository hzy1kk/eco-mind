import { NextResponse } from "next/server";
import { isInBrazil } from "@/lib/alerts/geo";
import { isAlertLevel } from "@/lib/alerts/levels";
import { addAlert, readAlerts } from "@/lib/alerts/storage";
import type { CreateFireAlertInput } from "@/lib/alerts/types";

export async function GET() {
  const alerts = readAlerts();
  return NextResponse.json(alerts);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Corpo inválido." }, { status: 400 });
  }

  const { lat, lng, level, description } = body as CreateFireAlertInput;

  if (typeof lat !== "number" || typeof lng !== "number" || !isAlertLevel(level)) {
    return NextResponse.json(
      { error: "Informe lat, lng e nível válidos." },
      { status: 400 },
    );
  }

  if (!isInBrazil(lat, lng)) {
    return NextResponse.json(
      { error: "A localização deve estar dentro do Brasil." },
      { status: 400 },
    );
  }

  if (description !== undefined && typeof description !== "string") {
    return NextResponse.json({ error: "Descrição inválida." }, { status: 400 });
  }

  if (description && description.trim().length > 500) {
    return NextResponse.json(
      { error: "Descrição muito longa (máx. 500 caracteres)." },
      { status: 400 },
    );
  }

  try {
    const alert = addAlert({
      lat,
      lng,
      level,
      description: description?.trim(),
    });
    return NextResponse.json(alert, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Não foi possível salvar o alerta." },
      { status: 500 },
    );
  }
}
