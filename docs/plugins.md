# 项目插件说明

本文档介绍 marketplace-mobile-app 项目中使用的所有插件，帮助开发者快速了解每个插件的用途。

---

## 目录

- [Babel 构建插件](#babel-构建插件)
- [ESLint 代码检查插件](#eslint-代码检查插件)
- [React Native 核心依赖](#react-native-核心依赖)
- [UI 与交互](#ui-与交互)
- [导航与路由](#导航与路由)
- [数据存储与状态管理](#数据存储与状态管理)
- [网络与通信](#网络与通信)
- [多媒体处理](#多媒体处理)
- [工具与辅助库](#工具与辅助库)

---

## Babel 构建插件

配置文件：`babel.config.js`

| 插件 | 说明 |
|---|---|
| `@babel/plugin-proposal-decorators` | 启用装饰器语法（legacy 模式），WatermelonDB 数据库模型需要使用装饰器来定义字段和关联 |
| `babel-plugin-module-resolver` | 路径别名解析插件，将 `~` 映射到 `./src` 目录，允许使用 `~/components/Button` 这样的导入路径代替相对路径 |
| `react-native-reanimated/plugin` | Reanimated 动画库的 Babel 转换插件，用于将动画代码在编译期进行优化。**必须放在 plugins 数组的最后**，否则会导致动画异常 |

> **注意**：`babel-plugin-import` 已安装为 devDependency 但当前未在 `babel.config.js` 中启用。

---

## ESLint 代码检查插件

配置文件：`.eslintrc.js`

| 插件 | 说明 |
|---|---|
| `@typescript-eslint` | TypeScript 代码检查，提供类型相关的 lint 规则（如未使用变量、类型导入规范、命名规范等） |
| `react` | React/JSX 代码检查，确保 JSX 语法正确性（如 key 属性、自闭合标签、JSX 排序等） |
| `react-hooks` | React Hooks 规则检查，强制执行 Hooks 使用规范（如不可在条件语句中调用 Hook、依赖数组完整性等） |
| `jest` | Jest 测试框架规则检查（如禁止跳过测试、禁止 focused 测试、expect 用法等） |
| `prettier` | 将 Prettier 格式化规则集成到 ESLint 中，代码不符合格式化规范时会报错 |
| `import` | import 语句规则检查（如禁止重复导入、import 排序分组等） |

---

## React Native 核心依赖

| 包名 | 说明 |
|---|---|
| `react-native` (v0.85.3) | React Native 框架本体，提供跨平台移动端开发能力 |
| `react` (v19.2.3) | React 核心库 |
| `react-native-reanimated` | 高性能动画库，在 UI 线程执行动画，避免 JS 线程阻塞导致的掉帧 |
| `react-native-gesture-handler` | 手势处理库，提供原生级别的手势识别（滑动、拖拽、缩放等），性能优于 React Native 内置的 PanResponder |
| `react-native-screens` | 原生屏幕容器优化，使用平台原生导航组件替代 JS 模拟，提升导航性能和内存管理 |
| `react-native-safe-area-context` | 安全区域上下文，处理刘海屏、底部横条等异形屏适配 |
| `react-native-nitro-modules` | Nitro 原生模块系统，提供高性能的 JS-原生桥接方案 |
| `react-native-worklets` | Worklets 运行时支持，为 Reanimated 等库提供多线程能力 |

---

## UI 与交互

| 包名 | 说明 |
|---|---|
| `react-native-vector-icons` | 图标库，内置 MaterialIcons、FontAwesome 等多套图标集 |
| `react-native-svg` | SVG 渲染支持，在 React Native 中绘制矢量图形 |
| `react-native-linear-gradient` | 线性渐变组件，用于创建渐变背景和渐变效果 |
| `react-native-fast-image` | 高性能图片组件，基于 SDWebImage (iOS) / Glide (Android)，支持缓存和优先级加载 |
| `react-native-modal` | 模态框组件，增强版的 Modal，支持动画、手势关闭等 |
| `react-native-swiper` | 轮播组件，用于图片轮播、引导页等场景 |
| `react-native-snap-carousel` | 轮播/走马灯组件，支持吸附效果和多种布局模式 |
| `react-native-tab-view` | 标签页视图组件，支持滑动切换标签页 |
| `react-native-pager-view` | 分页视图组件，提供原生级别的页面滑动切换 |
| `react-native-stickyheader` | 吸顶头部组件，列表滚动时头部固定在顶部 |
| `react-native-marquee-ab` | 跑马灯/滚动文字组件，用于文字横向滚动展示 |
| `react-native-dash` | 虚线组件，用于绘制虚线边框和分隔线 |
| `react-native-keyboard-aware-scroll-view` | 键盘感知滚动视图，输入框获得焦点时自动滚动避免被键盘遮挡 |
| `react-native-root-siblings` | 根节点兄弟组件，允许在组件树任意位置弹出覆盖层（Toast、Loading 等） |
| `lottie-react-native` | Lottie 动画播放组件，支持播放 After Effects 导出的 JSON 动画 |
| `react-native-image-zoom-viewer` | 图片查看器，支持手势缩放和全屏浏览 |
| `@native-html/iframe-plugin` | HTML iframe 渲染插件，配合 react-native-render-html 在 WebView 中渲染 iframe 内容 |
| `@native-html/table-plugin` | HTML 表格渲染插件，配合 react-native-render-html 渲染 HTML 表格 |

---

## 导航与路由

| 包名 | 说明 |
|---|---|
| `@react-navigation/native` | React Navigation 核心库，提供导航容器和基础导航能力 |
| `@react-navigation/native-stack` | 原生栈导航，使用平台原生导航动画和行为 |
| `@react-navigation/stack` | JS 栈导航，提供可自定义的栈导航动画 |
| `@react-navigation/bottom-tabs` | 底部标签栏导航，用于应用底部 Tab 切换 |

---

## 数据存储与状态管理

| 包名 | 说明 |
|---|---|
| `zustand` | 轻量级状态管理库，API 简洁，支持中间件和持久化 |
| `@nozbe/watermelondb` | 高性能本地数据库，基于 SQLite，支持懒加载和响应式查询，适合大量结构化数据存储 |
| `react-native-mmkv` | MMKV 键值存储，由微信团队开发，读写速度远超 AsyncStorage，适合存储少量配置和缓存数据 |
| `immer` / `use-immer` | 不可变数据更新库，允许以可变方式编写不可变更新逻辑，简化复杂状态更新 |
| `react-native-fs` | 文件系统访问，提供读写文件、创建目录等文件操作能力 |
| `react-native-blob-util` | 二进制数据处理，支持文件下载、上传和二进制数据操作 |
| `@react-native-clipboard/clipboard` | 剪贴板访问，读取和写入系统剪贴板内容 |

---

## 网络与通信

| 包名 | 说明 |
|---|---|
| `axios` | HTTP 客户端，用于发起 API 请求，支持拦截器、请求取消等 |
| `@react-native-community/netinfo` | 网络状态监听，获取当前网络连接类型和在线状态 |
| `react-native-webview` | WebView 组件，嵌入网页内容或与 H5 页面通信 |
| `react-native-ping` | 网络延迟检测，用于测试服务器响应时间 |
| `react-native-udp` | UDP 协议通信，用于局域网设备发现等场景 |

---

## 多媒体处理

| 包名 | 说明 |
|---|---|
| `react-native-video` | 视频播放组件，支持本地和远程视频播放 |
| `react-native-video-controls` | 视频播放控件，为 react-native-video 提供播放/暂停、进度条等 UI 控件 |
| `react-native-sound` | 音频播放，支持播放本地和远程音频文件 |
| `react-native-image-crop-picker` | 图片选择与裁剪，支持从相册选择或拍照，并进行裁剪 |
| `react-native-image-picker` | 图片/视频选择器，从相册或相机获取媒体文件 |
| `react-native-create-thumbnail` | 视频缩略图生成，从视频文件中提取封面图片 |
| `react-native-view-shot` | 截图/视图捕获，将指定 View 导出为图片 |
| `react-native-signature-canvas` | 签名板组件，用于手写签名输入 |
| `react-native-canvas` | Canvas 画布组件，提供 2D 绘图能力 |
| `react-native-chart-f2` | 图表组件，基于 F2 图表库，用于数据可视化 |
| `echarts` | ECharts 图表库，功能丰富的数据可视化方案 |
| `qrcode` / `react-native-qrcode-svg` | 二维码生成，支持生成二维码图片 |
| `react-native-pdf` | PDF 文件查看组件 |

---

## 工具与辅助库

| 包名 | 说明 |
|---|---|
| `dayjs` | 日期时间处理库，轻量级 Moment.js 替代方案 |
| `lodash` | 工具函数库，提供防抖、节流、深拷贝等常用工具函数 |
| `ahooks` | React Hooks 工具库，提供 useRequest、useDebounce 等业务常用 Hooks |
| `crypto-js` | 加密算法库，支持 MD5、SHA、AES 等加密算法 |
| `blueimp-md5` | MD5 哈希计算 |
| `uuid` | UUID 生成器，生成唯一标识符 |
| `mathjs` | 数学计算库，支持表达式求值、矩阵运算等 |
| `base-64` / `utf8` | Base64 编解码和 UTF-8 编解码 |
| `querystring` | URL 查询参数解析和序列化 |
| `htmlparser2` | HTML 解析器，用于解析和处理 HTML 字符串 |
| `react-native-render-html` | HTML 渲染组件，将 HTML 内容渲染为原生组件 |
| `react-native-markdown-display` | Markdown 渲染组件，将 Markdown 文本渲染为原生 UI |
| `react-native-device-info` | 设备信息获取（型号、系统版本、设备名称等） |
| `react-native-config` | 环境变量配置，从 `.env` 文件读取配置（区分开发/测试/生产环境） |
| `react-native-permissions` | 权限管理，统一的跨平台权限请求和检查 |
| `react-native-orientation-locker` | 屏幕方向锁定，控制横竖屏切换 |
| `@thehale/react-native-keep-awake` | 屏幕常亮，防止设备自动息屏（如视频播放时） |
| `react-native-background-timer` | 后台定时器，应用进入后台后仍可执行定时任务 |
| `@sentry/react-native` | Sentry 错误监控，自动捕获和上报 JS/Native 崩溃和异常 |
| `react-native-logs` | 日志工具，结构化日志输出 |
| `reactotron-react-native` | 开发调试工具，提供网络请求、状态、日志等可视化调试面板（仅 devDependencies） |
| `patch-package` | 补丁管理工具，自动修补 node_modules 中的第三方包（通过 postinstall 脚本执行） |

---

## 附：开发环境工具链

| 工具 | 说明 |
|---|---|
| TypeScript (v5.8) | 类型系统，提供静态类型检查 |
| Jest (v29) | 单元测试框架 |
| Prettier (v2.8.8) | 代码格式化工具，统一代码风格 |
| Metro | React Native 打包工具，负责 JS Bundle 的编译和热更新 |
| CocoaPods | iOS 原生依赖管理（通过 Gemfile 管理 Ruby 依赖） |
