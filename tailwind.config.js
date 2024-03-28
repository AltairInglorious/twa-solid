/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "tg-bg": "var(--tg-theme-bg-color, #ffffff)",
        "tg-text": "var(--tg-theme-text-color, #222222)",
        "tg-hint": "var(--tg-theme-hint-color, #a8a8a8)",
        "tg-link": "var(--tg-theme-link-color, #2678b6)",
        "tg-button": "var(--tg-theme-button-color, #50a8eb)",
        "tg-button-text": "var(--tg-theme-button-text-color, #ffffff)",
        "tg-secondary-bg": "var(--tg-theme-secondary-bg-color, #f0f0f0)",
        "tg-header-bg": "var(--tg-theme-header-bg-color, #527da3)",
        "tg-accent-text": "var(--tg-theme-accent-text-color, #1c93e3)",
        "tg-section-bg": "var(--tg-theme-section-bg-color, #ffffff)",
        "tg-section-header-text": "var(--tg-theme-section-header-text-color, #3a95d5)",
        "tg-subtitle-text": "var(--tg-theme-subtitle-text-color, #82868a)",
        "tg-destructive-text": "var(--tg-theme-destructive-text-color, #cc2929)",
      }
    },
  },
  plugins: [],
}
