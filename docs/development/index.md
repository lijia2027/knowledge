---
layout: home
layoutClass: m-development-layout
title: 开发
hero:
  name: 开发
  text: Go、数据层与应用开发
  actions:
    - text: Go 网络与服务通信
      link: /development/go/networking
    - text: Go 并发与线程调度
      link: /development/go/concurrency
      theme: alt
features:
  - title: Go（Golang）
    details: 选型、网络通信、并发调度、构建与性能诊断。
    link: /development/go/
  - title: Redis
    details: 数据结构、缓存更新与过期策略。
    link: /development/redis/
  - title: MQ 消息队列
    details: 确认、重试、幂等和消费积压。
    link: /development/mq/
  - title: Next.js
    details: 页面路由、服务端渲染与预测结果展示。
    link: /development/nextjs/
  - title: Flutter
    details: 移动端组件、状态管理与实时数据。
    link: /development/flutter/
  - title: MySQL
    details: 表结构、索引、查询计划和事务。
    link: /development/mysql/
  - title: PostgreSQL
    details: 关系建模、查询计划与时序结果存储。
    link: /development/postgresql/
---

<style>
.m-development-layout .VPFeature.link {
  transition:
    border-color 0.25s,
    background-color 0.25s,
    box-shadow 0.25s;
}

.m-development-layout .VPFeature.link:hover,
.m-development-layout .VPFeature.link:focus-visible {
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg);
  box-shadow: var(--vp-shadow-2);
}
</style>
