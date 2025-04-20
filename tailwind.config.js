module.exports = {
  content: [
    "./*.html", // Adjust the file path if your HTML files are in other folders
    "./**/*.html",
    // If you are using any other frameworks (React, Vue, etc.), include those paths too
  ],
  theme: {
    extend: {
      colors: {
        first: "#012a36",
        second: "#003437",
        third: "#deebec",
        fourth: "#bed9dd",
        fifth: "#aecfd0",
        sixth: "#73b3b2",
        seventh: "#3c979f",
        eight: "#2c7c83",
        ninth: "#0c586e",
        buttonBg: "#092457",
        buttonBgHover: "#1959d0",
      },
    },
  },
  plugins: [
    require("daisyui"), // If you are using daisyUI
  ],
};
