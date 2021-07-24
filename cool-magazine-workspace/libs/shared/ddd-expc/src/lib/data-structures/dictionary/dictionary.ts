export class Dictionary<TKey, TValue> implements Iterable<[TKey, TValue]> {
  private readonly _map: Map<TKey, TValue>;

  public get count() {
    return this._map.size;
  }

  [Symbol.iterator](): Iterator<[TKey, TValue]> {
    return this.entries();
  }

  constructor();
  constructor(iterable: Iterable<[TKey, TValue]>);
  constructor(iterable?: Iterable<[TKey, TValue]>) {
    if (iterable) {
      this._map = new Map(iterable);
    } else {
      this._map = new Map<TKey, TValue>();
    }
  }

  add(key: TKey, value: TValue): Dictionary<TKey, TValue> {
    this._map.set(key, value);

    return this;
  }

  hasKey(key: TKey): boolean {
    return this._map.has(key);
  }

  get(key: TKey): TValue | undefined {
    return this._map.get(key);
  }

  entries(): IterableIterator<[TKey, TValue]> {
    return this._map.entries();
  }
}
