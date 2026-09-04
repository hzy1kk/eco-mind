/** Approximate bounding box for Brazil. */
export function isInBrazil(lat: number, lng: number): boolean {
  return lat >= -33.75 && lat <= 5.27 && lng >= -74.0 && lng <= -34.0;
}

export const BRAZIL_CENTER: [number, number] = [-14.235, -51.9253];
export const BRAZIL_DEFAULT_ZOOM = 4;
