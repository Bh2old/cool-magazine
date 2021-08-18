export interface IDictionaryKeysCheckable<TKey> {
  hasKeys(keys: Iterable<TKey>): boolean;
}

export interface IDictionaryKeyCheckable<TKey> {
  hasKey(key: TKey): boolean;
}

export interface IDictionaryItemAddable<TKey, TValue> {
  add(key: TKey, value: TValue): this;
}

export interface IDictionaryItemReadable<TKey, TValue> {
  get(key: TKey): TValue | undefined;
}

export interface IDictionaryEntriesReadable<TKey, TValue> {
  entries(): IterableIterator<[TKey, TValue]>;
}

export interface IDictionaryValuesReadable<TValue> {
  values(): IterableIterator<TValue>;
}
