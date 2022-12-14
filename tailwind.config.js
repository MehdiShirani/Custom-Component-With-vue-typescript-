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
    skeletonScreen: {
      DEFAULT: {
        baseColor: "#c7c7c7",
        movingColor:
          "linear-gradient(to right, transparent 0%, #E8E8E8 50%, transparent 100%)",
        duration: "1s",
        timing: "cubic-bezier(0.4, 0.0, 0.2, 1)",
      },
      blue: {
        baseColor: "blue",
        movingColor:
          "linear-gradient(to right, transparent 0%, lightblue 50%, transparent 100%)",
        duration: "2s",
        timing: "ease",
      },
      red: {
        baseColor: "red",
        movingColor:
          "linear-gradient(to right, transparent 0%, pink 50%, transparent 100%)",
        duration: "3s",
        timing: "linear",
      },
    },
    extend: {
      // typography: {
      //   xs: {
      //     css: {
      //       fontSize: "0.8125rem",
      //     },
      //   },
      //   "2xs": {
      //     css: {
      //       fontSize: "0.75rem",
      //     },
      //   },
      // },
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
    // require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("@gradin/tailwindcss-skeleton-screen"),
  ],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          /* your theme name */ primary: "#1e9b61" /* Primary color */,
          "primary-focus": "#198754" /* Primary color - focused */,
          "primary-content":
            "#ffffff" /* Foreground content color to use on primary color */,

          secondary: "#8f018f" /* Secondary color */,
          "secondary-focus": "#800080" /* Secondary color - focused */,
          "secondary-content":
            "#ffffff" /* Foreground content color to use on secondary color */,

          accent: "#ffffff" /* Accent color */,
          "accent-focus": "#ffffff" /* Accent color - focused */,
          "accent-content":
            "#323232" /* Foreground content color to use on accent color */,

          neutral: "#3d4451" /* Neutral color */,
          "neutral-focus": "#2a2e37" /* Neutral color - focused */,
          "neutral-content":
            "#ffffff" /* Foreground content color to use on neutral color */,

          "base-100":
            "#ffffff" /* Base color of page, used for blank backgrounds */,
          "base-200": "#f9fafb" /* Base color, a little darker */,
          "base-300": "#d1d5db" /* Base color, even more darker */,
          "base-content":
            "#1f2937" /* Foreground content color to use on base color */,

          info: "#2094f3" /* Info */,
          success: "#02850c" /* Success */,
          warning: "#ff9900" /* Warning */,
          error: "#ff5724" /* Error */,

          "--rounded-box":
            "1rem" /* border-radius for cards and other big elements */,
          "--rounded-btn":
            "0.85rem" /* border-radius for buttons and similar elements */,
          "--rounded-badge":
            "1.9rem" /* border-radius for badge and other small elements */,

          "--animation-btn": "0.25s" /* bounce animation time for button */,
          "--animation-input":
            ".2s" /* bounce animation time for checkbox, toggle, etc */,

          "--padding-card": "1rem" /* default card-body padding */,

          "--btn-text-case": "uppercase" /* default text case for buttons */,
          "--navbar-padding": ".5rem" /* default padding for navbar */,
          "--border-btn": "1px" /* default border size for button */,
          "--focus-ring": "2px" /* focus ring size for button and inputs */,
          "--focus-ring-offset": "2px",
        },
      },
    ],
    base: false,
    utils: false,
    logs: false,
    rtl: true,
  },
};
