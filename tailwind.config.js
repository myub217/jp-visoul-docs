// tailwind.config.js
const {
  colors,
  fonts,
  spacings,
  borderRadius,
  shadows
} = require('./src/ui/DesignSystem');

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        accent: colors.accent,
        neutral: colors.neutral,
        dark: colors.dark,
        white: colors.white,
      },
      fontFamily: {
        heading: fonts.heading,
        body: fonts.body,
      },
      spacing: {
        xs: spacings.xs,
        sm: spacings.sm,
        md: spacings.md,
        lg: spacings.lg,
        xl: spacings.xl,
        xxl: spacings.xxl,
      },
      borderRadius: {
        sm: borderRadius.sm,
        md: borderRadius.md,
        lg: borderRadius.lg,
        xl: borderRadius.xl,
      },
      boxShadow: {
        sm: shadows.sm,
        md: shadows.md,
        lg: shadows.lg,
      },
    },
  },
  plugins: [],
};