# MiniReact 实现

## 项目概述
简易版React框架核心实现，包含：
- JSX转换器
- 虚拟DOM机制
- 组件生命周期
- 差异化更新算法

## 技术实现
1. React.js：
   - createElement() 虚拟节点创建
   - Component基类实现
   - setState() 状态更新机制
2. ReactDom.js：
   - render() 方法实现
   - 虚拟DOM到真实DOM的转换
   - 差异化比对算法

## 项目结构
```
MiniReact/
├── V01/
│   ├── core/          # 框架核心实现
│   │   ├── React.js    # 组件与虚拟DOM
│   │   └── ReactDom.js # DOM渲染引擎
│   ├── App.js        # 示例组件
│   └── main.js       # 应用入口
└── README.md
```

## 运行方法
1. 安装live-server：
```bash
npm install -g live-server
```
2. 启动开发服务器：
```bash
cd V01
live-server
```

## 实现计划
✅ 虚拟DOM基础结构  
✅ 组件生命周期  
🔄 差异化更新算法优化  
⏳ 事件处理系统增强