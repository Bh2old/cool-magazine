import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { IBrowserLocalStorageService } from './i-browser-local-storage-service';

export class BrowserLocalStorageService implements IBrowserLocalStorageService {
  private readonly _storage = this._document.defaultView
    ?.localStorage as Storage;

  constructor(@Inject(DOCUMENT) private readonly _document: Document) {}

  setItem(key: string, value: string): void {
    this._storage.setItem(key, value);
  }

  getItem(key: string) {
    return this._storage.getItem(key);
  }

  removeItem(key: string): void {
    this._storage.removeItem(key);
  }

  clear(): void {
    this._storage.clear();
  }
}
