/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./assets/**/*.css",
    "./components/**/*.{js,vue,ts}",
    "./composables/*.{ts,js}",
    "./composables/**/*.{ts,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  safelist: [
    "btn-primary",
    "btn-warning",
    "btn-secondary",
    "btn-accent",
    "btn-info",
    "btn-success",
    "btn-error",
    "bg-info",
    "bg-success",
    "bg-error",
  ],
  theme: {
    aspectRatio: {
      40: "40",
      21: "21",
    },
    extend: {
      typography: {
        xs: {
          css: {
            fontSize: "0.8125rem",
          },
        },
        "2xs": {
          css: {
            fontSize: "0.75rem",
          },
        },
      },
      screens: {
        xs: "320px",
        "3xl": "1600px",
      },
    },
  },
  variants: {
    extend: {
      margin: ["first", "last"],
      padding: ["first", "last"],
      backgroundColor: ["hover"],
      borderColor: ["checked"],
      opacity: ["disabled", "hover"],
      ringWidth: ["hover"],
      borderRadius: ["first", "last"],
      scale: ["group-hover"],
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
  daisyui: {
    styled: true,
    themes: [
      "cupcake",
      // 'dark', // and some pre-defined theme
    ],
    base: false,
    utils: false,
    logs: false,
    rtl: true,
  },
};
