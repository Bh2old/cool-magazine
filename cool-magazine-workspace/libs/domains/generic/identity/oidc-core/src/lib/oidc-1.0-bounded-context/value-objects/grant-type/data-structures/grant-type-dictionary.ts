import { Dictionary } from '@bh2old/ddd-expc';
import { GrantType } from '../grant-type.value-object';
import { GrantTypeVariants } from '../types';
import { Either, left, right } from '@sweet-monads/either';
import {
  NoSuchTypeGrantTypeDictionaryError,
  TypeAlreadyContainsGrantTypeDictionaryError,
} from '../errors';

export class GrantTypeDictionary {
  private readonly _dictionary: Dictionary<GrantTypeVariants, GrantType>;

  constructor();
  constructor(iterable: Iterable<[GrantTypeVariants, GrantType]>);
  constructor(iterable?: Iterable<[GrantTypeVariants, GrantType]>) {
    if (iterable) {
      this._dictionary = new Dictionary(iterable);
    } else {
      this._dictionary = new Dictionary();
    }
  }

  add(
    type: GrantType
  ): Either<TypeAlreadyContainsGrantTypeDictionaryError, GrantTypeDictionary> {
    if (this.hasType(type.valueAsVariant)) {
      return left(new TypeAlreadyContainsGrantTypeDictionaryError(type));
    }

    this._dictionary.add(type.valueAsVariant, type);

    return right(this);
  }

  hasType(typeVariant: GrantTypeVariants): boolean {
    return this._dictionary.hasKey(typeVariant);
  }

  get(
    typeVariant: GrantTypeVariants
  ): Either<NoSuchTypeGrantTypeDictionaryError, GrantType> {
    if (this.hasType(typeVariant)) {
      const searchedType = this._dictionary.get(typeVariant) as GrantType;
      return right(searchedType);
    }

    return left(new NoSuchTypeGrantTypeDictionaryError(typeVariant));
  }
}
