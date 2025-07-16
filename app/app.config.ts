export default defineAppConfig({

    title: 'nuxt-content3-cms',

    socials: {
        github: 'annebrown',
    },

    ui: {
        colors: {
            primary:    'sky',
            secondary:  'gray',
            tertiary:   'amber',
            success:    'green',
            warning:    'yellow',
            error:      'red',
            gray:       'cool',
            neutral:    'zinc'
        },
        link: {
            slots: {
              base: 'no-underline',
            }
          }
    },
    nuxtIcon: {
        aliases: {
        'dark-mode': 'ph:moon-bold',
        'light-mode': 'ph:sun-bold',
        'go-back': 'ph:arrow-left',
        }
    },

})