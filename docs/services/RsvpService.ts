import { Bibi, error, headers, timeout } from "@jalvin/runtime";
import { RsvpPayload } from "src/models/WeddingData";

export const FIREBASE_RTDB_BASE_URL = "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com";

export const FIREBASE_DB_AUTH_TOKEN = "";

export function firebaseConfigured() {
  return !FIREBASE_RTDB_BASE_URL.contains("YOUR_PROJECT_ID");
}

export function isEmailLikelyValid(email) {
  return (email.contains("@") && email.contains("."));
}

export async function submitRsvp(payload) {
  if (!firebaseConfigured()) {
    error("Firebase is not configured in src/services/RsvpService.jalvin");
  }
  const client = new Bibi(FIREBASE_RTDB_BASE_URL, (it) => { timeout(8000); headers((it) => "Content-Type".to("application/json")); });
  const authQuery = ((FIREBASE_DB_AUTH_TOKEN.length > 0) ? `?auth=${FIREBASE_DB_AUTH_TOKEN}` : "");
  client.post(`/rsvps.json${authQuery}`, payload);
}

