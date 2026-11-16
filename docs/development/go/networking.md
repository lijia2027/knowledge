# Go 网络与服务通信

## TCP 与连接

记录连接生命周期、消息边界、读写截止时间、断线重连和连接资源释放。

## HTTP、gRPC 与 WebSocket

用 HTTP 练习请求响应和连接复用，用 gRPC 练习服务契约与流式调用，用 WebSocket 练习长连接推送。各协议分别记录适用场景和测试方法。

## 超时、取消与退出

用 context 传递请求截止时间，记录超时和取消的传播边界。复盘服务退出时如何停止接收新请求、等待进行中的任务并关闭资源。[net/http](https://pkg.go.dev/net/http) · [context 文档](https://pkg.go.dev/context)
