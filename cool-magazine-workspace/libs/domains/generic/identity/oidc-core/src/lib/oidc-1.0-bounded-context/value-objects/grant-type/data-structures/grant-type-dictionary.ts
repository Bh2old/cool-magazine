import { Dictionary, ICloneable } from '@bh2old/ddd-expc';
import { GrantType } from '../grant-type.value-object';
import { GrantTypeVariants } from '../types';
export class GrantTypeDictionary implements ICloneable<GrantTypeDictionary> {
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

  add(type: GrantType): GrantTypeDictionary {
    this._dictionary.add(type.valueAsVariant, type);

    return this;
  }

  hasType(typeVariant: GrantTypeVariants): boolean {
    return this._dictionary.hasKey(typeVariant);
  }

  get(typeVariant: GrantTypeVariants): GrantType | undefined {
    return this._dictionary.get(typeVariant);
  }

  values(): IterableIterator<GrantType> {
    return this._dictionary.values();
  }

  clone(): GrantTypeDictionary {
    return new GrantTypeDictionary(this._dictionary);
  }
}
