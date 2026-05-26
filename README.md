# Marketplace Mobile App

基于 React Native 的跨平台移动应用，支持 iOS 和 Android 双平台。

## 技术栈

- **框架**：React Native 0.85.3 + React 19.2.3
- **语言**：TypeScript 5.8
- **状态管理**：Zustand + Immer
- **本地存储**：WatermelonDB (SQLite) + MMKV (键值存储)
- **导航**：React Navigation 7
- **网络请求**：Axios
- **错误监控**：Sentry

## 环境要求

- Node.js >= 22.11.0
- React Native CLI 环境（参考 [官方环境配置指南](https://reactnative.dev/docs/set-up-your-environment)）

## 快速开始

### 安装依赖

```sh
npm install
```

### iOS 额外步骤

```sh
bundle install            # 安装 CocoaPods
bundle exec pod install   # 安装 iOS 原生依赖
```

### 启动开发服务器

```sh
npm start
```

### 运行应用

```sh
# Android
npm run android

# iOS
npm run ios
```

## 项目结构

```
src/
├── App.tsx              # 应用根组件
├── app/                 # NavigationContainer + 根导航
├── router/              # 路由定义
├── pages/               # 页面组件
├── components/          # 公共组件
├── common/              # 常量（颜色、存储 key、图片映射）
├── utils/               # 工具函数（MMKVStorage 等）
├── hooks/               # 自定义 Hooks
└── assets/images/       # 静态图片资源
```

## 常用命令

| 命令 | 说明 |
|---|---|
| `npm start` | 启动 Metro 开发服务器（自动清除缓存） |
| `npm run android` | 编译并运行 Android 应用 |
| `npm run ios` | 编译并运行 iOS 应用 |
| `npm run lint` | ESLint 代码检查 |
| `npm test` | 运行 Jest 单元测试 |

## 路径别名

项目配置了 `~` 别名指向 `src/` 目录，可替代相对路径：

```ts
// 替代 ../../../components/Button
import Button from '~/components/Button';
```

## 文档

- [插件说明](docs/plugins.md) — 项目中所有依赖插件的用途说明
