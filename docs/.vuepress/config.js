module.exports = {
  base: '/test-demo/',
  title: 'jiaen-test-UI的介绍',
  description: '学习 vue 的UI框架开发',
  themeConfig: {
    sidebar: [
      '/',
      {
        title: '入门',
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/grid',
          '/components/input',
          '/components/layout',
          '/components/popover',
          '/components/tabs',
          '/components/toast',
        ]
      }
    ]
  }
}
