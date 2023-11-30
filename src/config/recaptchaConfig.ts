export const recaptcha = {
  clientId: String(import.meta.env.VITE_RECAPTCHA_CLIENT_ID),
  siteKey: String(import.meta.env.VITE_RECAPTCHA_SITE_KEY),
  url: String(import.meta.env.VITE_RECAPTCHA_BACKEND_URL),
}
