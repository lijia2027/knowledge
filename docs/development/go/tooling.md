# Go 构建、测试与性能

## 构建与部署

记录 go.mod 依赖版本、目标 GOOS 和 GOARCH、构建产物与部署步骤。使用 cgo 时单独记录依赖的系统库。

## 测试与基准

记录单元测试、集成测试、竞态检测及基准负载。测量吞吐、延迟和内存时保留可重现的输入和环境。

## 性能诊断

根据现象选用 pprof 或 trace，记录 CPU、堆分配、阻塞、调度和垃圾回收的数据。[Go 工具链](https://pkg.go.dev/cmd/go) · [诊断指南](https://go.dev/doc/diagnostics)
