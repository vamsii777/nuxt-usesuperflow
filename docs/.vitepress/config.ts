import { defineConfig } from 'vitepress'
import { version } from '../../package.json'

export default defineConfig({
  title: 'Nuxt UseSuperflow',
  description: 'Nuxt module for Usesuperflow - Documentation',
  base: '/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/superflow-logo.svg' }],
    ['meta', { name: 'theme-color', content: '#00DC82' }],
    ['meta', { property: 'og:image', content: '/superflow-logo.svg' }],
    ['meta', { property: 'og:title', content: 'Nuxt UseSuperflow' }],
    ['meta', { property: 'og:description', content: 'Nuxt module for Usesuperflow - Documentation' }]
  ],
  themeConfig: {
    logo: {
      light: '/superflow-logo.svg',
      dark: '/superflow-logo.svg'
    },
    siteTitle: false,
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Config', link: '/config/introduction' },
      { text: 'API', link: '/api/reference' },
      {
        text: `v${version}`,
        items: [
          {
            text: 'Changelog',
            link: 'https://github.com/vamsii777/nuxt-usesuperflow/blob/master/CHANGELOG.md'
          },
          {
            text: 'Contributing',
            link: 'https://github.com/vamsii777/nuxt-usesuperflow/blob/master/.github/CONTRIBUTING.md'
          }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/vamsii777/nuxt-usesuperflow' }
    ],
    search: {
      provider: 'local',
      options: {
        detailedView: true,
        translations: {
          button: {
            buttonText: 'Search docs',
            buttonAriaLabel: 'Search docs'
          },
          modal: {
            noResultsText: 'No results for',
            resetButtonTitle: 'Reset search',
            footer: {
              selectText: 'to select',
              navigateText: 'to navigate'
            }
          }
        }
      }
    },
    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Usage', link: '/guide/usage' }
          ]
        }
      ],
      '/config/': [
        {
          text: 'Configuration',
          items: [
            { text: 'Introduction', link: '/config/introduction' },
            { text: 'Options', link: '/config/options' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Reference', link: '/api/reference' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vamsii777/nuxt-usesuperflow' }
    ],
    footer: {
      message: 'Superflow™ and the Superflow logo are trademarks of Velt™. Nuxt.js is a trademark of NuxtJS Developers.',
      copyright: `Developed by <a href="https://dewonderstruck.com" target="_blank" rel="noopener noreferrer">De Wonderstruck</a>. Released under the MIT License.`
    },
    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    }
  }
}) 