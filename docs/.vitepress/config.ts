import { basename } from 'node:path'
import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'

import { head, nav, search, sidebar } from './configs'

const basePath = basename(process.env.APP_BASE_PATH || '')
const base = basePath ? `/${basePath}/` : '/'
const siteUrl = process.env.SITE_URL?.replace(
  /^http:\/\/lijia2027\.com\//,
  'https://lijia2027.com/',
)

export default defineConfig({
  outDir: '../dist',
  base,

  lang: 'zh-CN',
  title: 'LIJIA2027',
  description: '时序预测方法、实验记录，以及风电、负荷与电池方向的项目实践。',
  head: [
    ...head,
    ['link', { rel: 'icon', href: `${base}favicon.ico` }],
    ['link', { rel: 'apple-touch-icon', href: `${base}logo.png` }],
  ],

  lastUpdated: true,
  cleanUrls: true,

  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
  },

  themeConfig: {
    i18nRouting: false,
    logo: '/logo.png',
    nav,
    sidebar,
    search,

    footer: {
      copyright: 'Copyright © 2026 LIJIA',
    },

    outline: {
      level: 'deep',
      label: '目录',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },

  sitemap: siteUrl ? { hostname: siteUrl } : undefined,

  vite: {
    plugins: [MarkdownPreview()],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },
})
