import type { DefaultTheme } from 'vitepress'
import { developmentGroups, developmentOverview } from './development'
import { forecastOverview, forecastSections } from './sidebar'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '时序预测',
    items: [
      forecastOverview,
      ...forecastSections.map(({ text }) => ({
        text,
        link: `${forecastOverview.link}#${text}`,
      })),
    ],
    activeMatch: '^/forecasting/',
  },
  {
    text: '开发',
    items: [developmentOverview, ...developmentGroups],
    activeMatch: '^/development/',
  },
]
