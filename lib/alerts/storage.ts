import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import path from "path";
import type { CreateFireAlertInput, FireAlert } from "./types";

const DATA_DIR = path.join(process.cwd(), "data");
const ALERTS_FILE = path.join(DATA_DIR, "alerts.json");
const SEED_FILE = path.join(DATA_DIR, "alerts.seed.json");

function ensureAlertsFile(): void {
  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!existsSync(ALERTS_FILE)) {
    copyFileSync(SEED_FILE, ALERTS_FILE);
  }
}

export function readAlerts(): FireAlert[] {
  ensureAlertsFile();
  const raw = readFileSync(ALERTS_FILE, "utf-8");
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
  writeFileSync(ALERTS_FILE, JSON.stringify(alerts, null, 2), "utf-8");
  return alert;
}
