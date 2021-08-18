export interface IDefaultDictionaryConstructor<TDictionary> {
  new (): TDictionary;
}

export interface IInitFromIterableDictionaryConstructor<
  TKey,
  TValue,
  TDictionary
> {
  new (iterable: Iterable<readonly [TKey, TValue]>): TDictionary;
}

export interface IDictionaryConstructor<TKey, TValue, TDictionary>
  extends IInitFromIterableDictionaryConstructor<TKey, TValue, TDictionary>,
    IDefaultDictionaryConstructor<TDictionary> {}
