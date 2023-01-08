/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },

  //<Daisy UI Theme>
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0064df",
          "secondary": "#67e8f9",
          "accent": "#f86e72",
          "neutral": "#4b5565",
          "base-100": "#fcfcfd",
          "info": "#269EF7",
          "success": "#4ade80",
          "warning": "#f79009",
          "error": "#d92d20",
        },
      },
    ],
  },
  //</Daisy UI Theme>
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
