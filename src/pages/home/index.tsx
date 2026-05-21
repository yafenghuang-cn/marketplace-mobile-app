import { useEffect } from 'react';

import MineTabs from '~/app/MineTabs';
import AboutPage from '~/pages/about';
import DebugPage from '~/pages/debug';
import LoginPage from '~/pages/login';
import MinePage from '~/pages/mine';

import type React from 'react';

const Home: React.FC = () => {
  useEffect(() => {
    console.log('获取底部导航栏配置');
  }, []);

  const tabList = [
    {
      name: 'login',
      component: LoginPage,
      options: {
        title: '登录',
      },
    },
    {
      name: 'about',
      component: AboutPage,
      options: {
        title: '关于',
      },
    },
    {
      name: 'debug',
      component: DebugPage,
      options: {
        title: '调试',
      },
    },
    {
      name: 'mine',
      component: MinePage,
      options: {
        title: '我的',
      },
    },
  ];

  return <MineTabs initialRouteName='mine' tabList={tabList} />;
};

export default Home;
