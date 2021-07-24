import { Dictionary } from '@bh2old/ddd-expc';
import { ResponseType } from '../response-type.value-object';
import { ResponseTypeVariants } from '../types';
export class ResponseTypeDictionary {
  private readonly _dictionary: Dictionary<ResponseTypeVariants, ResponseType>;

  constructor();
  constructor(iterable: Iterable<[ResponseTypeVariants, ResponseType]>);
  constructor(iterable?: Iterable<[ResponseTypeVariants, ResponseType]>) {
    if (iterable) {
      this._dictionary = new Dictionary(iterable);
    } else {
      this._dictionary = new Dictionary();
    }
  }

  add(type: ResponseType) {
    this._dictionary.add(type.valueAsVariant, type);

    return this;
  }

  hasType(typeVariant: ResponseTypeVariants): boolean {
    return this._dictionary.hasKey(typeVariant);
  }

  get(typeVariant: ResponseTypeVariants): ResponseType | undefined {
    return this._dictionary.get(typeVariant);
  }
}
