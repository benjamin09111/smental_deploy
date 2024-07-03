const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-custom": "#035569",
        "secondary-custom": "#C1E8FF",
        "third-custom": "#4B88A5",
        "fourth-custom": "#0A6888",
      },

    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
}

