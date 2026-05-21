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
    options: {
      title: '首页',
      headerShown: false,
    },
  },
  {
    name: 'login',
    component: Login,
    options: {
      title: '登录',
      headerShown: false,
    },
  },
  {
    name: 'register',
    component: Register,
    options: {
      title: '注册',
      headerShown: false,
    },
  },
  {
    name: 'debug',
    component: Debug,
    options: {
      title: '调试',
      headerShown: false,
    },
  },
  {
    name: 'about',
    component: About,
    options: {
      title: '关于',
      headerShown: false,
    },
  },
  {
    name: 'mine',
    component: Mine,
    options: {
      title: '我的',
      headerShown: false,
    },
  },
];

export default routers;
