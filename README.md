# 半工半读申请网页 - Vue 3版本

## 项目简介
这是一个使用Vue 3框架开发的简洁正式的PC端半工半读申请网页，采用Vite构建工具，使用Vue Router实现单页应用（SPA）路由。

## 技术栈
- **Vue 3** - 渐进式JavaScript框架
- **Vue Router 4** - 官方路由管理器
- **Vite** - 下一代前端构建工具
- **HTML5 + CSS3** - 响应式设计

## 项目结构
```
├── index.html              # 入口HTML文件
├── package.json            # 项目配置文件
├── vite.config.js          # Vite配置文件
├── src/
│   ├── main.js            # 应用入口文件
│   ├── App.vue            # 根组件
│   ├── router/
│   │   └── index.js       # 路由配置
│   ├── components/        # 共享组件
│   │   ├── Header.vue     # 头部组件
│   │   ├── Nav.vue        # 导航组件
│   │   └── Footer.vue    # 底部组件
│   ├── views/             # 页面组件
│   │   ├── Home.vue       # 首页（申请原因）
│   │   ├── Courses.vue    # 已学课程证明页
│   │   └── Awards.vue     # 专科获奖情况页
│   └── assets/
│       └── styles.css     # 全局样式文件
└── public/
    └── assets/            # 静态资源文件夹
        ├── transcript.jpg # 成绩单扫描件
        ├── award1.jpg     # 获奖证书1
        └── award2.jpg     # 获奖证书2
```

## 快速开始

### 1. 安装依赖
```bash
npm install
```

### 2. 启动开发服务器
```bash
npm run dev
```
开发服务器将在 `http://localhost:3000` 启动，并自动打开浏览器。

### 3. 构建生产版本
```bash
npm run build
```
构建产物将输出到 `dist` 目录。

### 4. 预览生产构建
```bash
npm run preview
```

## 页面说明

### 首页（/）
- **申请原因**：包含家庭情况、个人实力、政策支持、学业保障四个模块

### 已学课程证明页（/courses）
- 展示2024-2025学年第二学期课程表
- 点击课程名称可弹出模态框查看对应成绩单
- 显示成绩单扫描件

### 专科获奖情况页（/awards）
- 展示获奖情况卡片列表
- 显示获奖证书扫描件

## 设计规范

### 尺寸
- 页面固定宽度：1200px，居中显示
- 模块上下间距：30px
- 模块左右内边距：20px

### 字体
- 字体：Microsoft YaHei
- 页面标题：28px
- 模块标题：22px
- 正文：16px（行高1.8）

### 颜色
- 主色：#0066cc（标题/导航选中态/模块左竖线）
- 辅助色：#f9f9f9（获奖卡片背景）
- 文字色：#333（正文）/ #666（备注小字）

## 功能特性
- ✅ Vue 3 Composition API
- ✅ Vue Router 单页应用路由
- ✅ 组件化开发
- ✅ 响应式设计，支持PC端和移动端
- ✅ 图片错误处理
- ✅ 统一的视觉风格
- ✅ 交互式课程表（点击课程查看成绩单）
- ✅ 模态框弹窗展示成绩单

## 注意事项
1. 请将联系电话替换为真实手机号（当前为示例号码：18437838300）
2. 请根据实际情况更新获奖时间（当前为202X年）
3. 图片文件应放置在 `public/assets/` 目录下
4. 图片路径使用绝对路径（如 `/assets/transcript.jpg`）
5. 课程表成绩单图片命名规则：
   - 大学英语(二): `transcript-english.jpg`
   - 数据结构: `transcript-datastructure.jpg`
   - 高级语言程序设计: `transcript-programming.jpg`
   - 计算机组成原理: `transcript-computer-org.jpg`
   - 形势与政策2: `transcript-policy.jpg`
   - 计算机网络: `transcript-network.jpg`
   - 动态网站开发技术: `transcript-webdev.jpg`

## 浏览器兼容性
- Chrome（推荐）
- Firefox
- Safari
- Edge

## 开发说明
- 使用Vue 3 Composition API编写组件
- 使用 `<script setup>` 语法糖简化代码
- 使用Vue Router的 `router-link` 组件实现导航
- 样式文件统一管理在 `src/assets/styles.css`
