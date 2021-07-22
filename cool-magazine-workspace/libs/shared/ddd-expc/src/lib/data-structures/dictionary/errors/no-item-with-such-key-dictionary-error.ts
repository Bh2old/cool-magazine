export class NoItemWithSuchKeyDictionaryError<TKey> extends Error {
  name = 'NoItemWithSuchKeyDictionaryError';
  key: TKey;

  constructor(key: TKey) {
    super();
    this.key = key;
  }
}
