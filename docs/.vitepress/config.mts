import { defineConfig } from 'vitepress'

const SITE_ORIGIN = 'https://about.unibooks.app'
const APP_ORIGIN = 'https://unibooks.app'

// This site is the help centre for unibooks.app, not the product. Its titles
// say so, its home pages stay out of the index (see their frontmatter) and
// every page names the app's Organization as publisher, so a search for the
// brand lands on the app rather than here.
function pageUrl(relativePath: string): string {
  const path = relativePath.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')
  return `${SITE_ORIGIN}/${path}`
}

export default defineConfig({
  title: 'UniBooks 說明中心',
  titleTemplate: ':title | UniBooks 說明中心',
  description: 'UniBooks 使用指南、常見問題、服務條款與隱私權聲明',
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  sitemap: {
    hostname: `${SITE_ORIGIN}/`,
    // The home pages are noindex; listing them would contradict that.
    transformItems: (items) => items.filter((item) => item.url !== '' && item.url !== 'en/')
  },

  transformHead({ pageData, title, description }) {
    const url = pageUrl(pageData.relativePath)
    const ldJson = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description,
      url,
      isPartOf: { '@type': 'WebSite', name: 'UniBooks 說明中心', url: `${SITE_ORIGIN}/` },
      publisher: { '@type': 'Organization', '@id': `${APP_ORIGIN}/#organization`, name: 'UniBooks', url: `${APP_ORIGIN}/` },
      about: { '@id': `${APP_ORIGIN}/#organization` }
    }
    return [
      ['link', { rel: 'canonical', href: url }],
      ['script', { type: 'application/ld+json' }, JSON.stringify(ldJson).replace(/</g, '\\u003c')]
    ]
  },

  locales: {
    root: {
      label: '中文 (繁體)',
      lang: 'zh-TW',
      title: 'UniBooks 說明中心',
      titleTemplate: ':title | UniBooks 說明中心',
      description: 'UniBooks 使用指南、常見問題、服務條款與隱私權聲明',
      themeConfig: {
        nav: [
          { text: '首頁', link: '/' },
          {
            text: '使用指南',
            items: [
              { text: '新手上路', link: '/guide/getting-started' },
              { text: '搜尋書籍', link: '/guide/search' },
              { text: '刊登販售', link: '/guide/listing' },
              { text: '交易流程', link: '/guide/transactions' },
              { text: '到貨通知', link: '/guide/waitlist' }
            ]
          },
          {
            text: '關於',
            items: [
              { text: '關於我們', link: '/about/about' },
              { text: '常見問題', link: '/about/faq' },
              { text: '服務條款', link: '/about/terms' },
              { text: '隱私權聲明', link: '/about/privacy' }
            ]
          },
          { text: '前往 UniBooks', link: `${APP_ORIGIN}/` }
        ],

        sidebar: {
          '/guide/': [
            {
              text: '使用指南',
              items: [
                { text: '新手上路', link: '/guide/getting-started' },
                { text: '搜尋書籍', link: '/guide/search' },
                { text: '刊登販售', link: '/guide/listing' },
                { text: '交易流程', link: '/guide/transactions' },
                { text: '到貨通知', link: '/guide/waitlist' }
              ]
            }
          ],
          '/about/': [
            {
              text: '關於',
              items: [
                { text: '關於我們', link: '/about/about' },
                { text: '常見問題', link: '/about/faq' },
                { text: '服務條款', link: '/about/terms' },
                { text: '隱私權聲明', link: '/about/privacy' }
              ]
            }
          ]
        },

        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: '搜尋文件',
                buttonAriaLabel: '搜尋文件'
              },
              modal: {
                displayDetails: '顯示詳細列表',
                resetButtonTitle: '清除搜尋',
                backButtonTitle: '關閉搜尋',
                noResultsText: '無相關結果',
                footer: {
                  selectText: '選擇',
                  navigateText: '切換',
                  closeText: '關閉'
                }
              }
            }
          }
        },

        socialLinks: [
          { icon: 'github', link: 'https://github.com/CycleUni' }
        ],

        footer: {
          message: '© 2026 UniBooks. All rights reserved.<br><a href="/about/privacy">隱私權聲明</a> · <a href="/about/terms">服務條款</a>',
        },

        returnToTopLabel: '回到頂部',
        sidebarMenuLabel: '目錄',
        darkModeSwitchLabel: '外觀',
        lightModeSwitchTitle: '切換至亮色模式',
        darkModeSwitchTitle: '切換至暗色模式'
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'UniBooks Help Center',
      titleTemplate: ':title | UniBooks Help Center',
      description: 'UniBooks user guide, FAQ, terms of service and privacy policy',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          {
            text: 'User Guide',
            items: [
              { text: 'Getting Started', link: '/en/guide/getting-started' },
              { text: 'Search', link: '/en/guide/search' },
              { text: 'Sell Books', link: '/en/guide/listing' },
              { text: 'Transactions', link: '/en/guide/transactions' },
              { text: 'Waitlist', link: '/en/guide/waitlist' }
            ]
          },
          {
            text: 'About',
            items: [
              { text: 'About Us', link: '/en/about/about' },
              { text: 'FAQ', link: '/en/about/faq' },
              { text: 'Terms of Service', link: '/en/about/terms' },
              { text: 'Privacy', link: '/en/about/privacy' }
            ]
          },
          { text: 'Open UniBooks', link: `${APP_ORIGIN}/` }
        ],

        sidebar: {
          '/en/guide/': [
            {
              text: 'User Guide',
              items: [
                { text: 'Getting Started', link: '/en/guide/getting-started' },
                { text: 'Search', link: '/en/guide/search' },
                { text: 'Sell Books', link: '/en/guide/listing' },
                { text: 'Transactions', link: '/en/guide/transactions' },
                { text: 'Waitlist', link: '/en/guide/waitlist' }
              ]
            }
          ],
          '/en/about/': [
            {
              text: 'About',
              items: [
                { text: 'About Us', link: '/en/about/about' },
                { text: 'FAQ', link: '/en/about/faq' },
                { text: 'Terms of Service', link: '/en/about/terms' },
                { text: 'Privacy Policy', link: '/en/about/privacy' }
              ]
            }
          ]
        },

        socialLinks: [
          { icon: 'github', link: 'https://github.com/CycleUni' }
        ],

        footer: {
          message: '© 2026 UniBooks. All rights reserved.<br><a href="/en/about/privacy">Privacy Policy</a> · <a href="/en/about/terms">Terms of Service</a>',
        }
      }
    }
  }
})