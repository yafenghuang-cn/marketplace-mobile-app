export enum EUserRole {
  Default = 'default',
  Warehouse = 'warehouse',
}

export const getCurrentRole = (): EUserRole => {
  // TODO: 接入鉴权后从 MMKV 中读取用户角色
  return EUserRole.Warehouse;
};
