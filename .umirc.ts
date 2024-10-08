import { defineConfig } from '@umijs/max';

const repo = 'auspiciousNumber'; // 项目名称

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },

  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  hash: true,
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      name: '登录页',
      path: '/login',
      component: './Login',
      layout: false,
    },
    {
      name: '工作台',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: '号码管理',
      path: '/management',
      component: './Management',
    },
  ],
  npmClient: 'pnpm',
});
