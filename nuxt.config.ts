  export default defineNuxtConfig({
    
    compatibilityDate: '2025-05-15',
    telemetry: false,
    srcDir: 'app/',
    css: ['~/assets/css/ship.css'],
    modules: [
      '@nuxt/content',
      '@nuxt/eslint',
      '@nuxt/fonts',
      '@nuxt/icon',
      '@nuxt/image',
      '@nuxt/ui'
    ],
    content: {
        build: {
            markdown: {
                highlight: {
                    theme: {
                        default: 'github-light',
                        dark: 'github-dark'
                    },
                    langs: [
                        'console',
                        'css',
                        'diff',
                        'properties',
                        'go',
                        'html',
                        'ini',
                        'java',
                        'json',
                        'js',
                        'log',
                        'md',
                        'mdc',
                        'mermaid',
                        'perl',
                        'regexp',
                        'shell',
                        'ts',
                        'tsx',
                        'vue',
                        'yaml'
                    ]
                }, // highlight
                toc: {
                    depth: 3,
                }
            } // markdown
        } // build
    },
    
    colorMode: {
        classSuffix: '',
        preference: 'dark',
    },

    app: {
        head: {
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
        }
    },

    ui: {
        theme: {
            colors: ['primary', 'secondary', 'tertiary', 'neutral', 'tertiary', 'success', 'warning', 'error']
        }
    },

    googleFonts: {
        families: {
            'Roboto': [400, 500, 700],
            'Material Icons': true,
        },
        display: 'swap',
        preconnect: true,
    },
    devtools: { enabled: true },
  })