# Go 总览与选型

- [网络与服务通信](./networking)记录 TCP、HTTP、gRPC、WebSocket，以及超时与服务退出。
- [并发与线程调度](./concurrency)记录 goroutine、channel、同步和操作系统线程。
- [构建、测试与性能](./tooling)记录构建、交付、竞态检测和性能分析。

## 适合哪些工作

Go 的运行时负责把许多轻量的 goroutine 调度到多条操作系统线程上，语言里有 channel 和 select 表达任务间通信。标准库提供 HTTP 客户端和服务端，适合并发处理网络请求、运行队列消费者和实现数据采集服务。[Go FAQ](https://go.dev/doc/faq#goroutines) · [net/http](https://pkg.go.dev/net/http)

Go 工具链统一了格式化、构建、测试和诊断。常规纯 Go 服务可针对目标系统和架构编译成可执行文件。使用 cgo 的项目还需要核对 C 工具链和运行依赖。[Go 命令参考](https://pkg.go.dev/cmd/go) · [Go 诊断工具](https://go.dev/doc/diagnostics)

## 与其他语言怎么搭配

| 语言   | 在这些项目里的用法                                                                                                                                                                                                                                 |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Python | 用 Python 做时序实验、训练和模型评估，用 Go 做采集、任务分发和预测查询接口。[PyTorch 文档](https://docs.pytorch.org/docs/stable/index.html)                                                                                                        |
| Java   | Java 的虚拟线程也适合大量等待 I/O 的请求。选型时可以比较团队现有的框架、部署流程和客户端生态。[Java 虚拟线程](https://docs.oracle.com/en/java/javase/21/core/virtual-threads.html)                                                                 |
| Rust   | Go 的垃圾回收简化常规服务的内存管理，Rust 的所有权模型适合需要直接控制资源生命周期的组件。对尾延迟有要求时按真实负载测量。[Go GC 指南](https://go.dev/doc/gc-guide) · [Rust 所有权](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html) |

## 预测系统练习

用 Go 接收场站数据、提交预测任务和提供查询。模型实验与结果口径见[预测服务与结果入库](../../forecasting/operations/forecast-service)。
