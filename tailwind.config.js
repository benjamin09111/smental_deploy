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
        "primary-custom": "",
        "secondary-custom": "#fc4a1a",
        "third-custom": "#f7b733",
        "fourth-custom": "#dfdce3",
      },

    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
}

