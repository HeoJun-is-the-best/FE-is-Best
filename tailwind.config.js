/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    backgroundImage: {
      defaultProfileImg: "url('./src/assets/DefaultProfileImg.png')",
      cardBackground: "url('./src/assets/CardBackground.png')",
    },
    extend: {},
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      gray: {
        50: "#FAFAFA",
        100: "#F4F4F5",
        200: "#E4E4E7",
        300: "#D4D4D8",
        400: "#A1A1AA",
        500: "#71717A",
        600: "#52525B",
        700: "#3F3F46",
        800: "#27272A",
        900: "#181818",
        950: "#09090B",
      },
      green: {
        50: "#E8F5E9",
        100: "#C8E6C9",
        200: "#A5D6A7",
        300: "#81C784",
        400: "#66BB6A",
        500: "#4CAF50",
        600: "#43A047",
        700: "#388E3C",
        800: "#2E7D32",
        900: "#1B5E20",
        black: "#00E676",
      },
      red: {
        50: "#F5E8E6",
        100: "#F5CBC4",
        200: "#F5A093",
        300: "#F57662",
        400: "#F54B31",
        500: "#F5290A",
        600: "#CC2208",
        700: "#991A06",
        800: "#661104",
        900: "#330902",
      },
    },
    fontSize: {
      regular12: [
        "12px",
        {
          fontWeight: 400,
          lineHeight: "14px",
        },
      ],
      medium12: [
        "12px",
        {
          fontWeight: 500,
          lineHeight: "14px",
        },
      ],
      regular14: [
        "14px",
        {
          fontWeight: 400,
          lineHeight: "18px",
        },
      ],
      medium14: [
        "14px",
        {
          fontWeight: 500,
          lineHeight: "18px",
        },
      ],
      semibold14: [
        "14px",
        {
          fontWeight: 600,
          lineHeight: "18px",
        },
      ],
      regular16: [
        "16px",
        {
          fontWeight: 400,
          lineHeight: "20px",
        },
      ],
      medium16: [
        "16px",
        {
          fontWeight: 500,
          lineHeight: "20px",
        },
      ],
      semibold16: [
        "16px",
        {
          fontWeight: 600,
          lineHeight: "20px",
        },
      ],
      regular18: [
        "18px",
        {
          fontWeight: 400,
          lineHeight: "22px",
        },
      ],
      medium18: [
        "18px",
        {
          fontWeight: 500,
          lineHeight: "22px",
        },
      ],
      semibold18: [
        "18px",
        {
          fontWeight: 600,
          lineHeight: "22px",
        },
      ],
      bold18: [
        "18px",
        {
          fontWeight: 700,
          lineHeight: "22px",
        },
      ],
      medium20: [
        "20px",
        {
          fontWeight: 500,
          lineHeight: "24px",
        },
      ],
      bold20: [
        "20px",
        {
          fontWeight: 700,
          lineHeight: "24px",
        },
      ],
      medium24: [
        "24px",
        {
          fontWeight: 500,
          lineHeight: "36px",
        },
      ],
      semibold24: [
        "24px",
        {
          fontWeight: 600,
          lineHeight: "36px",
        },
      ],
      semibold32: [
        "32px",
        {
          fontWeight: 600,
          lineHeight: "44px",
        },
      ],
      semibold36: [
        "36px",
        {
          fontWeight: 600,
          lineHeight: "48px",
        },
      ],
      semibold32: [
        "40px",
        {
          fontWeight: 600,
          lineHeight: "52px",
        },
      ],
    },
  },
  plugins: [],
};
