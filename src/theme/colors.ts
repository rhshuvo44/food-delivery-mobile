export const Colors = {
  light: {
    primary: "#FF2B85",
    primaryLight: "#FFE5F1",

    secondary: "#4CAF50",

    background: "#FFFFFF",

    surface: "#F8F8F8",

    border: "#ECECEC",

    text: "#1F2937",

    textSecondary: "#6B7280",

    success: "#16A34A",

    warning: "#F59E0B",

    danger: "#EF4444",
  },

  dark: {
    primary: "#FF2B85",

    primaryLight: "#5A1032",

    background: "#121212",

    surface: "#1F1F1F",

    border: "#323232",

    text: "#FFFFFF",

    textSecondary: "#A1A1AA",

    success: "#22C55E",

    warning: "#FBBF24",

    danger: "#F87171",
  },
};

export type AppTheme = keyof typeof Colors;