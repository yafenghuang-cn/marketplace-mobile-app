import { isPlainObject } from 'lodash';
import { createMMKV, type MMKV } from 'react-native-mmkv';

import type { StorageKey } from '~/common/storage-keys';

export type StoragePrimitive = boolean | string | number;
export type StorageValue = StoragePrimitive | Record<string, unknown> | unknown[] | null;

export interface MMKVStorageConfig {
  id?: string;
  encryptionKey?: string;
}

export class MMKVStorage {
  private readonly mmkv: MMKV;

  constructor(config?: MMKVStorageConfig) {
    this.mmkv = createMMKV(
      config
        ? {
            id: config.id ?? 'marketplace.default',
            ...(config.encryptionKey ? { encryptionKey: config.encryptionKey } : {}),
          }
        : undefined,
    );
  }

  /** 查询：判断 key 是否存在 */
  has(key: StorageKey | string): boolean {
    this.assertKey(key);
    return this.mmkv.contains(key);
  }

  /** 查询：读取单个值 */
  get<T = StorageValue>(key: StorageKey | string): T | undefined {
    this.assertKey(key);
    if (!this.mmkv.contains(key)) {
      return undefined;
    }

    const booleanValue = this.mmkv.getBoolean(key);
    if (booleanValue !== undefined) {
      return booleanValue as T;
    }

    const numberValue = this.mmkv.getNumber(key);
    if (numberValue !== undefined) {
      return numberValue as T;
    }

    const stringValue = this.mmkv.getString(key);
    if (stringValue !== undefined) {
      return this.parseStringValue<T>(stringValue);
    }

    return undefined;
  }

  /** 查询：读取字符串 */
  getString(key: StorageKey | string): string | undefined {
    this.assertKey(key);
    return this.mmkv.getString(key);
  }

  /** 查询：读取数字 */
  getNumber(key: StorageKey | string): number | undefined {
    this.assertKey(key);
    return this.mmkv.getNumber(key);
  }

  /** 查询：读取布尔值 */
  getBoolean(key: StorageKey | string): boolean | undefined {
    this.assertKey(key);
    return this.mmkv.getBoolean(key);
  }

  /** 查询：获取全部 key */
  getAllKeys(): string[] {
    return this.mmkv.getAllKeys();
  }

  /** 查询：按前缀筛选 key */
  getKeysByPrefix(prefix: string): string[] {
    return this.getAllKeys().filter((key) => key.startsWith(prefix));
  }

  /** 查询：批量读取 */
  getMultiple<T = StorageValue>(keys: Array<StorageKey | string>): Record<string, T | undefined> {
    return keys.reduce<Record<string, T | undefined>>((result, key) => {
      result[key] = this.get<T>(key);
      return result;
    }, {});
  }

  /** 新增：仅当 key 不存在时写入 */
  add(key: StorageKey | string, value: StorageValue): boolean {
    this.assertKey(key);
    if (this.has(key)) {
      return false;
    }

    this.set(key, value);
    return true;
  }

  /** 修改：仅当 key 已存在时写入 */
  update(key: StorageKey | string, value: StorageValue): boolean {
    this.assertKey(key);
    if (!this.has(key)) {
      return false;
    }

    this.set(key, value);
    return true;
  }

  /** 修改：合并更新对象字段 */
  merge<T extends Record<string, unknown>>(key: StorageKey | string, partial: Partial<T>): boolean {
    this.assertKey(key);
    const current = this.get<T>(key);
    if (!isPlainObject(current)) {
      return false;
    }

    this.set(key, { ...current, ...partial });
    return true;
  }

  /** 新增或修改：存在则覆盖，不存在则创建 */
  set(key: StorageKey | string, value: StorageValue): void {
    this.assertKey(key);

    if (value === null) {
      this.remove(key);
      return;
    }

    if (typeof value === 'boolean' || typeof value === 'number' || typeof value === 'string') {
      this.mmkv.set(key, value);
      return;
    }

    this.mmkv.set(key, JSON.stringify(value));
  }

  /** 新增或修改：批量写入 */
  setMultiple(entries: Record<string, StorageValue>): void {
    Object.entries(entries).forEach(([key, value]) => {
      this.set(key, value);
    });
  }

  /** 删除：移除单个 key */
  remove(key: StorageKey | string): boolean {
    this.assertKey(key);
    return this.mmkv.remove(key);
  }

  /** 删除：批量移除 */
  removeMultiple(keys: Array<StorageKey | string>): number {
    return keys.reduce((count, key) => count + (this.remove(key) ? 1 : 0), 0);
  }

  /** 删除：按前缀移除 */
  removeByPrefix(prefix: string): number {
    const keys = this.getKeysByPrefix(prefix);
    return this.removeMultiple(keys);
  }

  /** 删除：清空全部数据 */
  clear(): void {
    this.mmkv.clearAll();
  }

  /** 监听 key 变化 */
  addListener(onValueChanged: (key: string) => void): { remove: () => void } {
    return this.mmkv.addOnValueChangedListener(onValueChanged);
  }

  private parseStringValue<T>(value: string): T {
    try {
      return JSON.parse(value) as T;
    } catch {
      return value as T;
    }
  }

  private assertKey(key: string): void {
    if (key.trim().length === 0) {
      throw new Error('MMKVStorage key cannot be empty');
    }
  }
}

const mmkvStorage = new MMKVStorage();

export default mmkvStorage;
