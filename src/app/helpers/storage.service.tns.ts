import { Injectable } from '@angular/core';
import { getString, hasKey, remove, setString } from '@nativescript/core/application-settings';

@Injectable({ providedIn: 'root' })
export class StorageService {
  storeString(key: string, value: string) {
    setString(key, value);
  }

  hasKey(key: string) {
    return hasKey(key);
  }

  getString(key: string) {
    return getString(key);
  }

  remove(key: string) {
    remove(key);
  }
}
