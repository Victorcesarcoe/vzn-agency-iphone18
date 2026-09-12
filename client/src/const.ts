export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

// TODO: replace with the store's real WhatsApp number (digits only, with country + area code, e.g. "5522999999999")
// when this base is closed with a client.
export const WHATSAPP_NUMBER = "5500000000000";
export const WHATSAPP_MESSAGE =
  "Olá! Quero garantir meu iPhone 18 na pré-venda 🚀";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};
