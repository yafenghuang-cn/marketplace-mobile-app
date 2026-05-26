import { useMemo } from 'react';

import MineTabs from '~/app/MineTabs';
import { EUserRole, getCurrentRole } from '~/common/roles';
import AboutPage from '~/pages/about';
import DebugPage from '~/pages/debug';
import MinePage from '~/pages/mine';
import PartsHome from '~/pages/WarehouseModule/PartsHome';
import PartsManagement from '~/pages/WarehouseModule/PartsManagement';

import type React from 'react';

const defaultTabs = [
  { name: 'about', component: AboutPage, options: { title: '关于' } },
  { name: 'debug', component: DebugPage, options: { title: '调试' } },
  { name: 'mine', component: MinePage, options: { title: '我的' } },
];

const warehouseTabs = [
  { name: 'PartsHome', component: PartsHome, options: { title: '首页' }, iconName: 'PartsHome' },
  {
    name: 'PartsManagement',
    component: PartsManagement,
    iconName: 'PartsManagement',
    options: { title: '备件管理' },
  },
  { name: 'mine', component: MinePage, iconName: 'mine', options: { title: '我的' } },
];

const Home: React.FC = () => {
  const role = getCurrentRole();

  const tabList = useMemo(
    () => (role === EUserRole.Warehouse ? warehouseTabs : defaultTabs),
    [role],
  );

  return <MineTabs initialRouteName={tabList[0].name} tabList={tabList} />;
};

export default Home;
