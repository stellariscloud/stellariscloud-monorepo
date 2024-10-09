import { palette } from './palette'

export const baseTheme = {
  light: {
    background: palette.neutral[50],
    foreground: palette.neutral[950],
    card: palette.neutral[50],
    cardForeground: palette.neutral[950],
    popover: palette.neutral[50],
    popoverForeground: palette.neutral[950],
    primary: palette.neutral[950],
    primaryForeground: palette.neutral[50],
    secondary: palette.neutral[100],
    secondaryForeground: palette.neutral[900],
    muted: palette.neutral[100],
    mutedForeground: palette.neutral[500],
    accent: palette.neutral[100],
    accentForeground: palette.neutral[950],
    destructive: palette.red[500],
    destructiveForeground: palette.red[50],
    border: palette.neutral[300],
    input: palette.neutral[300],
    ring: palette.neutral[950],
    radius: '0.5rem',
    chart1: palette.amber[50],
    chart2: palette.amber[100],
    chart3: palette.amber[200],
    chart4: palette.amber[300],
    chart5: palette.amber[400],
  },
  dark: {
    background: palette.neutral[950],
    foreground: palette.neutral[50],
    card: palette.neutral[950],
    cardForeground: palette.neutral[50],
    popover: palette.neutral[950],
    popoverForeground: palette.neutral[50],
    primary: palette.neutral[50],
    primaryForeground: palette.neutral[950],
    secondary: palette.neutral[50],
    secondaryForeground: palette.neutral[950],
    muted: palette.neutral[800],
    mutedForeground: palette.neutral[400],
    accent: palette.neutral[800],
    accentForeground: palette.neutral[50],
    destructive: palette.red[900],
    destructiveForeground: palette.red[50],
    border: palette.neutral[800],
    input: palette.neutral[800],
    ring: palette.neutral[50],
    chart1: palette.amber[50],
    chart2: palette.amber[100],
    chart3: palette.amber[200],
    chart4: palette.amber[300],
    chart5: palette.amber[400],
  },
}
