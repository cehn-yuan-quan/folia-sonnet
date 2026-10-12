# 天府（Tianfu）

> 辞曲新境 · Folia Android 定制版

**天府** 是基于 [chthollyphile/folia-major](https://github.com/chthollyphile/folia-major) 0.6.7 与
[chthollyphile/folia-sonnet](https://github.com/chthollyphile/folia-sonnet)（官方 Android 打包示范）的
个人定制版，用于个人学习与非商业分享。

以全屏沉浸式歌词动画为核心的在线音乐播放器，支持网易云、酷狗、Navidrome 与本地音乐库。

## 与原版的关系

- 本仓库 fork 自 `folia-sonnet`（基于 folia-major 0.6.7 正式版 + Capacitor 8 Android 容器）。
- 仅做了品牌定制（应用名「天府」）、构建流水线（GitHub Actions 自动构建）与少量构建配置调整。
- 上游声明：Android 打包为实验性示范，不承诺本地音乐扫描、后台/锁屏连续播放、前台媒体服务
  或应用商店发布支持，构建链可能随上游变化失效。

## 构建

本仓库不直接提供安装包，通过 GitHub Actions 自动构建（[.github/workflows/android-build.yml](.github/workflows/android-build.yml)）：

- 默认产出 **debug APK**（用于测试分发）；
- 在仓库 Secrets 中配置签名密钥后，自动追加产出**签名 release APK**：
  - `KEYSTORE_BASE64`（keystore 文件的 base64）、`KEYSTORE_PASSWORD`、`KEY_ALIAS`、`KEY_PASSWORD`。

后端服务（网易云 / 酷狗 API 实例）通过仓库 **Variables** 注入（构建时写入 `.env.local`）：

- `NETEASE_API_BASE`、`KUGOU_API_BASE`、`FOLIA_API_BASE`（AI 主题/歌词代理，需 HTTPS）。

本地构建与签名说明见上游 [技术与开发说明](docs/technical.md#android--capacitor)。

## 许可证与免责声明

本项目采用 [AGPL-3.0](LICENSE) 许可证：修改、分发均须以同样许可证开源，并向接收者提供源码。

在线音乐、歌词、封面及其他第三方内容的版权归相应权利人所有。本项目仅供个人学习、技术交流与
非营利使用，请勿用于商业盈利用途；因在线资源的传播、加工或再分发引发的责任由使用者自行承担。
请尊重数字版权，并通过官方渠道支持正版音乐。

## 致谢

感谢 Folia 主项目 [chthollyphile/folia-major](https://github.com/chthollyphile/folia-major) 及其贡献者。
