import { IExtendedDictionary } from '@bh2old/ddd-expc/abstractions';

export class Dictionary<TKey, TValue>
  implements IExtendedDictionary<TKey, TValue>
{
  private readonly _map: Map<TKey, TValue>;

  public get count() {
    return this._map.size;
  }

  [Symbol.iterator](): Iterator<[TKey, TValue]> {
    return this.entries();
  }

  constructor();
  constructor(iterable: Iterable<readonly [TKey, TValue]>);
  constructor(iterable?: Iterable<readonly [TKey, TValue]>) {
    if (iterable) {
      this._map = new Map(iterable);
    } else {
      this._map = new Map<TKey, TValue>();
    }
  }

  add(key: TKey, value: TValue): this {
    this._map.set(key, value);

    return this;
  }

  hasKey(key: TKey): boolean {
    return this._map.has(key);
  }

  hasKeys(keys: Iterable<TKey>): boolean {
    for (const key of keys) {
      if (!this._map.has(key)) {
        return false;
      }
    }
    return true;
  }

  get(key: TKey): TValue | undefined {
    return this._map.get(key);
  }

  entries(): IterableIterator<[TKey, TValue]> {
    return this._map.entries();
  }

  values(): IterableIterator<TValue> {
    return this._map.values();
  }
}
