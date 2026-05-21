import About from '~/pages/about';
import Debug from '~/pages/debug';
import Home from '~/pages/home';
import Login from '~/pages/login';
import Mine from '~/pages/mine';
import Register from '~/pages/register';

const routers = [
  {
    name: 'home',
    component: Home,
    showHeader: true,
    options: {
      title: '首页',
    },
  },
  {
    name: 'login',
    component: Login,
    showHeader: true,
    options: {
      title: '登录',
    },
  },
  {
    name: 'register',
    component: Register,
    showHeader: true,
    options: {
      title: '注册',
    },
  },
  {
    name: 'debug',
    component: Debug,
    showHeader: true,
    options: {
      title: '调试',
    },
  },
  {
    name: 'about',
    component: About,
    showHeader: true,
    options: {
      title: '关于',
    },
  },
  {
    name: 'mine',
    component: Mine,
    showHeader: true,
    options: {
      title: '我的',
    },
  },
];

export default routers;
