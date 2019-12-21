// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  proxy: {
    '/api': {
      target: 'https://etaoact-pre.edstao.com/api',
      pathRewrite: { '^/api': '' },
      changeOrigin: true
    }
  },
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      component: '../layouts/index',
      Routes: ['./routes/PrivateRoute.js'],
      routes: [
        {
          path: '/index/users',
          component: './users/index',
        },
        {
          path: '/index',
          component: '../pages/index',
        },
        {
          path: '/index/goods',
          component: './goods/index',
        },
        {
          component: './404/404',
        },
      ],
    },
    {
      path: '/about',
      component: './about/index',
      // Routes: ['./routes/PrivateRoute.js'],
    },
    {
      path: '/login',
      component: './login/index',
    },
    {
      component: './404/404',
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: {
          webpackChunkName: true,
        },
        title: 'login',
        dll: true,
        locale: {
          enable: true,
          default: 'zh-CN',
        },
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
};
