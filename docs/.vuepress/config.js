module.exports = {
  title: 'ATIE', // 设置网站标题
  description: '关于前端', //描述
  dest: './build', // 设置输出目录
  port: 7777, //端口
  base: '/atie-doc/',
  themeConfig: {
    //主题配置
    nav: [
      {
        text: '主页',
        link: '/'
      },
      {
        text: 'atie-ui',
        link: '/components/'
      },
      {
        text: '原生js插件',
        link: 'https://github.com/zhouatie/plugin'
      },
      {
        text: '效能工具',
        link: '/tool/'
      },
      {
        text: '我的博客',
        link: 'https://zhouatie.github.io/blog/'
      },
      {
        text: '规划',
        link: '/plan/'
      }
    ],
    // 为以下路由添加侧边栏
    sidebar: {
      '/components/': [
        {
          collapsable: true,
          children: ['button']
        }
      ]
    }
  }
};
