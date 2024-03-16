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
        "primary-custom": "#40C6E5",
        "secondary-custom": "#9F99F5",
        "third-custom": "#12151b",
        "fourth-custom": "#2d3d45",
      },

    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
}

