import { Dictionary } from '@bh2old/ddd-expc';
import { ResponseType } from '../response-type.value-object';
import { ResponseTypeVariants } from '../types';
import { Either, left, right } from '@sweet-monads/either';
import {
  NoSuchTypeResponseTypeDictionaryError,
  TypeAlreadyContainsResponseTypeDictionaryError,
} from '../errors';

export class ResponseTypeDictionary {
  private readonly _dictionary: Dictionary<ResponseTypeVariants, ResponseType> =
    new Dictionary();

  add(
    type: ResponseType
  ): Either<
    TypeAlreadyContainsResponseTypeDictionaryError,
    ResponseTypeDictionary
  > {
    if (this.hasType(type.valueAsVariant)) {
      return left(new TypeAlreadyContainsResponseTypeDictionaryError(type));
    }

    this._dictionary.add(type.valueAsVariant, type);

    return right(this);
  }

  hasType(typeVariant: ResponseTypeVariants): boolean {
    return this._dictionary.hasKey(typeVariant);
  }

  get(
    typeVariant: ResponseTypeVariants
  ): Either<NoSuchTypeResponseTypeDictionaryError, ResponseType> {
    if (this.hasType(typeVariant)) {
      const searchedType = this._dictionary.get(typeVariant) as ResponseType;
      return right(searchedType);
    }

    return left(new NoSuchTypeResponseTypeDictionaryError(typeVariant));
  }
}
