Shadowsocks - ChromeOS
====

采用以下语言和工具开发

* rollup
* typescript
* wasm - rust

这也是个用 rollup 和 Rust WASM 开发的项目模板

## 开发思路

先是对 Chrome Socket API 的封装，让其兼容 Nodejs 的 net 模块；然后在 net 模块的基础上实现 Socks5；最后是在 Socks5 的基础上用 WASM 实现 Shadowsocks 的加解密部分。