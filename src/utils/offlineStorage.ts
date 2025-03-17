import { openDB } from 'idb';
import type { DBSchema } from 'idb';
import { encrypt, decrypt } from './encryption';

interface OfflineDB extends DBSchema {
  'menu-cache': {
    key: string;
    value: any;
  };
  'user-data': {
    key: string;
    value: any;
  };
  'sync-queue': {
    key: string;
    value: {
      action: string;
      data: any;
      timestamp: number;
    };
  };
}

const DB_NAME = 'sixpro-offline';
const DB_VERSION = 1;

export async function initOfflineDB() {
  return openDB<OfflineDB>(DB_NAME, DB_VERSION, {
    upgrade(db) {
      // メニューデータのキャッシュ
      if (!db.objectStoreNames.contains('menu-cache')) {
        db.createObjectStore('menu-cache');
      }
      // ユーザーデータ
      if (!db.objectStoreNames.contains('user-data')) {
        db.createObjectStore('user-data');
      }
      // 同期キュー
      if (!db.objectStoreNames.contains('sync-queue')) {
        db.createObjectStore('sync-queue', { keyPath: 'id', autoIncrement: true });
      }
    },
  });
}

// メニューデータのキャッシュ
export async function cacheMenuData(key: string, data: any) {
  const db = await initOfflineDB();
  const encrypted = encrypt(data);
  await db.put('menu-cache', encrypted, key);
}

export async function getCachedMenuData(key: string) {
  const db = await initOfflineDB();
  const encrypted = await db.get('menu-cache', key);
  return decrypt(encrypted);
}

// オフライン状態の検出
export function isOffline(): boolean {
  return !navigator.onLine;
}

// オンライン/オフライン状態の監視
export function setupConnectivityListeners(
  onOnline: () => void,
  onOffline: () => void
) {
  window.addEventListener('online', onOnline);
  window.addEventListener('offline', onOffline);

  return () => {
    window.removeEventListener('online', onOnline);
    window.removeEventListener('offline', onOffline);
  };
}