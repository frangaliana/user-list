export const theme = {
  typography: {
    fontFamily: `"'Montserrat', sans-serif"`,
  },
  palette: {
    background: '#E6E9EF',
    text: '#4A4A4A',
    highlighted: '#5C72E8',
    success: '#70E8BD',
    error: '#FF7272',
  },
  spacing: (factor: number): number => factor * 8,
  breakpoints: {
    mobile: '600px',
    tablet: '960px',
    desktop: '1280px',
  },
}

export type Theme = typeof theme
