# Go 并发与线程调度

## Goroutine 与操作系统线程

先区分并发任务、实际并行执行和操作系统线程。再用 G、M、P 理解运行时调度，记录网络等待、阻塞系统调用和 CPU 密集任务对调度的影响。[Go 运行时调度说明](https://go.dev/src/runtime/HACKING#hdr-Scheduler_structures)

## 任务之间的通信

用 channel 和 select 练习等待、分发和取消，用 context 管理任务生命周期。共享状态用 Mutex 或 atomic 按需同步，完成等待用 WaitGroup。[Effective Go 并发章节](https://go.dev/doc/effective_go#concurrency)

## 有界并发与排查

用 worker pool 练习限制并发量、处理积压和优雅退出。记录数据竞态、goroutine 泄漏及阻塞问题的复现条件和测量结果。[竞态检测器](https://go.dev/doc/articles/race_detector)
