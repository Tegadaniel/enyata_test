/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, minmax(0, 1fr))",

        // Complex site-specific column configuration
        // footer: "200px minmax(900px, 1fr) 100px",
      },
    },
    boxShadow: {
      projects: " 0px 4px 4px 0px #00000040",
      header: "0px 2px 6px 0px #E5E5E54D",
    },
  },
  plugins: [],
};
