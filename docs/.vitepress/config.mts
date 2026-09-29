import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'UniBooks',
  description: '台灣大專院校二手教科書搜尋與媒合平台',
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  locales: {
    root: {
      label: '中文 (繁體)',
      lang: 'zh-TW',
      title: 'UniBooks',
      description: '台灣大專院校二手教科書搜尋與媒合平台',
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
          }
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
          message: '© 2026 UniBooks. All rights reserved.',
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
      title: 'UniBooks',
      description: 'Taiwan university second-hand textbook search and matching platform',
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
          }
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
          message: '© 2026 UniBooks. All rights reserved.',
        }
      }
    }
  }
})