import type { DefaultTheme } from 'vitepress'

const appId = process.env.ALGOLIA_APP_ID
const apiKey = process.env.ALGOLIA_SEARCH_API_KEY
const indexName = process.env.ALGOLIA_INDEX_NAME

export const search: DefaultTheme.Config['search'] =
  appId && apiKey && indexName
    ? { provider: 'algolia', options: { appId, apiKey, indexName } }
    : {
        provider: 'local',
        options: {
          translations: {
            button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
            modal: {
              noResultsText: '未找到相关内容',
              resetButtonTitle: '清除搜索内容',
              backButtonTitle: '关闭搜索',
            },
          },
        },
      }
