export class SuchKeyAlreadyContainsDictionaryError<TKey> extends Error {
  name = 'SuchKeyAlreadyContainsDictionaryError';
  key: TKey;

  constructor(key: TKey) {
    super();
    this.key = key;
  }
}
