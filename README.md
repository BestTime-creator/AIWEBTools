# AI开发工具导航网站

一个精美的AI开发工具导航网站，帮助开发者快速找到所需的各类开发工具。

## 功能特点

- 🎨 **苹果风格设计** - 优雅美观的用户界面
- 📱 **响应式布局** - 完美适配桌面和移动设备
- 🔍 **工具分类** - 不同类别的工具清晰分类展示
- 🚀 **平滑动画** - 现代化的过渡和加载动画
- 🔗 **便捷链接** - 直接跳转到工具官网

## 技术栈

- HTML5
- CSS3 (Tailwind CSS)
- 原生JavaScript
- Font Awesome 图标库

## 快速开始

1. 克隆仓库
   ```
   git clone https://github.com/yourusername/ai-tools-navigation.git
   ```

2. 打开项目
   ```
   cd ai-tools-navigation
   ```

3. 在浏览器中打开index.html文件
   ```
   open index.html
   ```

## 自定义工具列表

要添加或修改工具列表，只需编辑`app.js`文件中的`toolsData`数组：

```javascript
const toolsData = [
    {
        category: "分类名称",
        tools: [
            {
                name: "工具名称",
                description: "工具描述",
                url: "工具网址"
            },
            // 更多工具...
        ]
    },
    // 更多分类...
];
```

## 部署

该项目是纯静态网站，可以部署到任何托管服务上，如GitHub Pages、Vercel、Netlify等。

## 许可证

MIT

## 联系方式

如有问题或建议，请通过以下方式联系：

- 电子邮件：your.email@example.com
- GitHub：[你的GitHub用户名](https://github.com/yourusername) 
