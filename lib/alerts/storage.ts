import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import path from "path";
import type { CreateFireAlertInput, FireAlert } from "./types";

/**
 * On Vercel/serverless the project filesystem is read-only.
 * Persist community alerts under /tmp so POST works in production.
 */
function dataDir(): string {
  if (process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME) {
    return path.join("/tmp", "ecomind-data");
  }
  return path.join(process.cwd(), "data");
}

function alertsFile(): string {
  return path.join(dataDir(), "alerts.json");
}

const SEED_FILE = path.join(process.cwd(), "data", "alerts.seed.json");

function ensureAlertsFile(): void {
  const dir = dataDir();
  const file = alertsFile();
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  if (!existsSync(file)) {
    if (existsSync(SEED_FILE)) {
      copyFileSync(SEED_FILE, file);
    } else {
      writeFileSync(file, "[]", "utf-8");
    }
  }
}

export function readAlerts(): FireAlert[] {
  ensureAlertsFile();
  const raw = readFileSync(alertsFile(), "utf-8");
  return JSON.parse(raw) as FireAlert[];
}

export function addAlert(input: CreateFireAlertInput): FireAlert {
  const alerts = readAlerts();
  const alert: FireAlert = {
    id: `user-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    lat: input.lat,
    lng: input.lng,
    level: input.level,
    description: input.description?.trim() || undefined,
    reportedAt: new Date().toISOString(),
    source: "user",
  };
  alerts.push(alert);
  writeFileSync(alertsFile(), JSON.stringify(alerts, null, 2), "utf-8");
  return alert;
}
