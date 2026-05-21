import Home from '~/pages/home';
import MineHome from '~/pages/mine';

const MINE_TAB = {
  name: 'MineTab',
  label: '我的',
  icon: '👤',
  component: MineHome,
  moduleKey: 'mine',
};

// 首页
const HOME_TAB = {
  name: 'HomeTab',
  label: '首页',
  icon: '🏠',
  component: Home,
  moduleKey: 'home',
};

const DEFAULT_TABS = [HOME_TAB, MINE_TAB];

/**
 * 根据角色获取 Tab 配置
 */
export const getTabsByRole = () => {
  return DEFAULT_TABS;
};
