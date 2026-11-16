import type { DefaultTheme } from 'vitepress'
import { developmentGroups, developmentOverview } from './development'

export const forecastOverview = { text: '时序预测总览', link: '/forecasting/' }

export const forecastSections = [
  {
    text: '基础与数据',
    collapsed: true,
    items: [
      { text: '问题定义与预测窗口', link: '/forecasting/foundations/problem-definition' },
      { text: '数据准备与特征工程', link: '/forecasting/foundations/data-and-features' },
    ],
  },
  {
    text: '预测模型',
    collapsed: true,
    items: [
      { text: '预测基线与统计模型', link: '/forecasting/models/baselines' },
      { text: '机器学习预测', link: '/forecasting/models/modeling' },
      { text: '深度学习预测', link: '/forecasting/models/deep-learning' },
      { text: '时序基础模型', link: '/forecasting/models/foundation-models' },
    ],
  },
  {
    text: '时序专题方法',
    collapsed: true,
    items: [
      { text: '多步、多变量与分层预测', link: '/forecasting/topics/forecast-structure' },
      { text: '概率预测与不确定性', link: '/forecasting/topics/probabilistic-forecasting' },
    ],
  },
  {
    text: '交叉方法',
    collapsed: true,
    items: [
      { text: '生成式时序建模', link: '/forecasting/interdisciplinary/generative' },
      { text: '大语言模型与多模态时序', link: '/forecasting/interdisciplinary/llm-multimodal' },
      { text: '图学习与因果时序', link: '/forecasting/interdisciplinary/graph-causal' },
      { text: '物理信息与数据驱动融合', link: '/forecasting/interdisciplinary/physics-informed' },
      { text: '迁移学习与少样本预测', link: '/forecasting/interdisciplinary/transfer-learning' },
    ],
  },
  {
    text: '实验与工程',
    collapsed: true,
    items: [
      { text: '滚动回测与误差分析', link: '/forecasting/evaluation/backtesting' },
      { text: '数据集与实验记录', link: '/forecasting/operations/experiments' },
      { text: '预测服务与结果入库', link: '/forecasting/operations/forecast-service' },
      { text: '部署、监控与复盘', link: '/forecasting/operations/monitoring' },
    ],
  },
  {
    text: '能源与电池应用',
    collapsed: true,
    items: [
      {
        text: '新能源功率',
        collapsed: true,
        items: [
          { text: '风电功率预测', link: '/forecasting/applications/wind-power' },
          { text: '光伏功率预测', link: '/forecasting/applications/solar-power' },
          { text: '区域新能源出力预测', link: '/forecasting/applications/regional-renewables' },
        ],
      },
      {
        text: '电力负荷与市场',
        collapsed: true,
        items: [
          { text: '电力负荷预测', link: '/forecasting/applications/load' },
          { text: '电力市场与价格预测', link: '/forecasting/applications/electricity-market' },
        ],
      },
      {
        text: '储能与电池健康',
        collapsed: true,
        items: [
          { text: 'SOC、温度与可用容量', link: '/forecasting/applications/battery-operation' },
          { text: '电池 SOH 健康状态估计与预测', link: '/forecasting/applications/battery-soh' },
          { text: '电池 SOL 寿命状态预测', link: '/forecasting/applications/battery-sol' },
          { text: '电池 RUL 剩余寿命预测', link: '/forecasting/applications/battery-rul' },
        ],
      },
      {
        text: '设备运行与调度',
        collapsed: true,
        items: [
          { text: '设备健康与预测性维护', link: '/forecasting/applications/asset-health' },
          { text: '预测与优化调度', link: '/forecasting/applications/dispatch' },
        ],
      },
      { text: '能源预测工业落地', link: '/forecasting/applications/industrial-delivery' },
    ],
  },
  {
    text: '项目案例',
    collapsed: true,
    items: [{ text: '案例索引与验收重点', link: '/forecasting/projects/' }],
  },
] satisfies DefaultTheme.SidebarItem[]

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/forecasting/': [forecastOverview, ...forecastSections],
  '/development/': [
    developmentOverview,
    ...developmentGroups.map((group) => ({ ...group, collapsed: true })),
  ],
}
