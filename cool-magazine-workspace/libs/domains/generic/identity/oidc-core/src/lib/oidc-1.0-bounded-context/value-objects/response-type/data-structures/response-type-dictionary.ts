import { Dictionary } from '@bh2old/ddd-expc';
import { ResponseType } from '../response-type.value-object';
import { ResponseTypeVariants } from '../types';
export class ResponseTypeDictionary {
  private readonly _dictionary: Dictionary<ResponseTypeVariants, ResponseType> =
    new Dictionary();

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
