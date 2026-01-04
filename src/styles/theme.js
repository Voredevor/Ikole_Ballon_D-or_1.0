export const theme = {
  layout: {
    base: 'min-h-screen font-sans',
    light: 'bg-white text-dark',
    dark: 'bg-dark text-white',
  },

  section: {
    base: 'max-w-7xl mx-auto px-4',
    spacing: 'py-24',
  },

  card: {
    base: 'bg-white rounded-xl shadow-lg',
    hover: 'transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl',
  },

  heading: {
    primary: 'text-4xl md:text-5xl font-semibold tracking-tight',
    secondary: 'text-xl font-medium',
  },

  text: {
    muted: 'text-muted',
    smallCaps: 'uppercase text-xs tracking-widest text-gold',
  },

  button: {
    primary: 'inline-flex items-center justify-center px-8 py-3 rounded-full bg-dark text-white hover:bg-gold hover:text-dark transition',

    outline: 'inline-flex items-center justify-center px-8 py-3 rounded-full border border-dark text-dark hover:border-gold hover:text-gold transition',
  },
}
