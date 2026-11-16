import type { DefaultTheme } from 'vitepress'

export const developmentOverview = { text: '开发总览', link: '/development/' }

export const developmentGroups = [
  {
    text: 'Go（Golang）',
    items: [
      { text: 'Go 总览与选型', link: '/development/go/' },
      { text: '网络与服务通信', link: '/development/go/networking' },
      { text: '并发与线程调度', link: '/development/go/concurrency' },
      { text: '构建、测试与性能', link: '/development/go/tooling' },
    ],
  },
  {
    text: '缓存与消息',
    items: [
      { text: 'Redis', link: '/development/redis/' },
      { text: 'MQ 消息队列', link: '/development/mq/' },
    ],
  },
  {
    text: 'Web 与移动端',
    items: [
      { text: 'Next.js', link: '/development/nextjs/' },
      { text: 'Flutter', link: '/development/flutter/' },
    ],
  },
  {
    text: '关系数据库',
    items: [
      { text: 'MySQL', link: '/development/mysql/' },
      { text: 'PostgreSQL', link: '/development/postgresql/' },
    ],
  },
] satisfies DefaultTheme.NavItemChildren[]
