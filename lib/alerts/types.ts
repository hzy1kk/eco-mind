export type AlertLevel = "critico" | "alto" | "medio" | "baixo";

export type AlertSource = "seed" | "user";

export interface FireAlert {
  id: string;
  lat: number;
  lng: number;
  level: AlertLevel;
  description?: string;
  reportedAt: string;
  source: AlertSource;
}

export interface CreateFireAlertInput {
  lat: number;
  lng: number;
  level: AlertLevel;
  description?: string;
}
