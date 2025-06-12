export default defineAppConfig({
  // https://ui.nuxt.com/getting-started/theme#design-system
  ui: {
    colors: {
      primary: 'koala',
      secondary: 'sunset',
      accent: 'sunglo',
      neutral: 'wild-sand',
    },
    button: {
      defaultVariants: {
        // Set default button color to neutral
        // color: 'neutral'
      }
    },

    // Card
    card: {
      slots: {
        root: 'rounded-2xl',
        header: 'p-0 sm:px-0',
        body: 'p-4 sm:p-6',
        footer: 'p-4 sm:px-6'
      },
      variants: {
        variant: {
          solid: {
            root: 'bg-inverted text-inverted'
          },
          outline: {
            root: 'bg-default ring ring-default divide-y divide-default'
          },
          soft: {
            root: 'bg-elevated/50 divide-y divide-default'
          },
          subtle: {
            root: 'bg-elevated/50 ring ring-default divide-y divide-default'
          },
          ghost: {
            root: 'bg-transparent',
            header: 'p-0 sm:p-0',
            footer: 'p-0 sm:p-0'
          }
        }
      },
      defaultVariants: {
        variant: 'outline'
      }
    } // Endof Card
  }
})
