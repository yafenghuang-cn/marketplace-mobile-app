import EngineerMaterial from '~/pages/WarehouseModule/EngineerMaterial';
import OrderManagement from '~/pages/WarehouseModule/OrderManagement';
import PartsHome from '~/pages/WarehouseModule/PartsHome';
import PartsManagement from '~/pages/WarehouseModule/PartsManagement';
import ReceiveShip from '~/pages/WarehouseModule/ReceiveShip';
import ReserveMaterial from '~/pages/WarehouseModule/ReserveMaterial';
import ScanStockIn from '~/pages/WarehouseModule/ScanStockIn';
import StockCheck from '~/pages/WarehouseModule/StockCheck';
import TransferReturn from '~/pages/WarehouseModule/TransferReturn';

const WarehouseModuleRouter = [
  {
    name: 'ReserveMaterial',
    component: ReserveMaterial,
    options: {
      title: '储备订料',
    },
  },
  {
    name: 'OrderManagement',
    component: OrderManagement,
    options: {
      title: '订单管理',
    },
  },
  {
    name: 'EngineerMaterial',
    component: EngineerMaterial,
    options: {
      title: '工程师用料',
    },
  },
  {
    name: 'TransferReturn',
    component: TransferReturn,
    options: {
      title: '挑拨返还',
    },
  },
  {
    name: 'ReceiveShip',
    component: ReceiveShip,
    options: {
      title: '收发货管理',
    },
  },
  {
    name: 'StockCheck',
    component: StockCheck,
    options: {
      title: '盘点',
    },
  },
  {
    name: 'ScanStockIn',
    component: ScanStockIn,
    options: {
      title: '扫码入库',
    },
  },
  {
    name: 'PartsHome',
    component: PartsHome,
    options: {
      title: '备件首页',
    },
  },
  {
    name: 'PartsManagement',
    component: PartsManagement,
    options: {
      title: '备件管理',
    },
  },
];

export default WarehouseModuleRouter;
