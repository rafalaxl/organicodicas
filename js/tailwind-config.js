tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        tertiary: 'var(--color-bg-tertiary)',
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
        },
        energy: { 500: 'var(--energy-500)' },
        border: 'var(--color-border)',
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        muted: 'var(--color-text-muted)',
        inverse: 'var(--color-text-inverse)',
        accent: 'var(--color-accent)',
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        body: ['Source Sans 3', 'system-ui', 'sans-serif'],
      },
      transitionDuration: {
        normal: 'var(--duration-normal)',
      }
    }
  }
}
