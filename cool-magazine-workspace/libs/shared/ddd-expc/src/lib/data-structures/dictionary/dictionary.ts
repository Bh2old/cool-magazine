export class Dictionary<TKey, TValue> {
  private readonly _map: Map<TKey, TValue>;

  public get count() {
    return this._map.size;
  }

  constructor() {
    this._map = new Map<TKey, TValue>();
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
}
