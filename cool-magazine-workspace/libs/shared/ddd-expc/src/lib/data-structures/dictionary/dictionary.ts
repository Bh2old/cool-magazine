import { Either, right, left } from '@sweet-monads/either';
import {
  NoItemWithSuchKeyDictionaryError,
  SuchKeyAlreadyContainsDictionaryError,
} from './errors';

export class Dictionary<TKey, TValue> {
  private readonly _map: Map<TKey, TValue>;

  constructor() {
    this._map = new Map<TKey, TValue>();
  }

  add(
    key: TKey,
    value: TValue
  ): Either<
    SuchKeyAlreadyContainsDictionaryError<TKey>,
    Dictionary<TKey, TValue>
  > {
    if (this.hasKey(key)) {
      return left(new SuchKeyAlreadyContainsDictionaryError(key));
    }

    this._map.set(key, value);

    return right(this);
  }

  hasKey(key: TKey): boolean {
    return this._map.has(key);
  }

  get(key: TKey): Either<NoItemWithSuchKeyDictionaryError<TKey>, TValue> {
    if (this.hasKey(key)) {
      return right(this._map.get(key) as TValue);
    }

    return left(new NoItemWithSuchKeyDictionaryError(key));
  }
}
