import { Dictionary, ICloneable } from '@bh2old/ddd-expc';
import { GrantType } from '../grant-type.value-object';
import { GrantTypeVariants } from '../types';

type VariantForGrantTypeCreation = GrantTypeVariants;
export class GrantTypeDictionary implements ICloneable<GrantTypeDictionary> {
  private readonly _dictionary: Dictionary<GrantTypeVariants, GrantType>;

  constructor();
  constructor(iterable: Iterable<[GrantTypeVariants, GrantType]>);
  constructor(iterable: Iterable<GrantTypeVariants>);
  constructor(
    iterable?: Iterable<[GrantTypeVariants, GrantType] | GrantTypeVariants>
  ) {
    this._dictionary = this._createDictionary(iterable);
  }

  add(type: GrantType): GrantTypeDictionary {
    const { key, value } = this._createKeyValueForAdding(type);
    this._dictionary.add(key, value);

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

  private _createKeyValueForAdding(uri: GrantType): {
    key: GrantTypeVariants;
    value: GrantType;
  } {
    return { key: uri.valueAsVariant, value: uri };
  }

  private _createDictionary(
    iterable?: Iterable<
      [GrantTypeVariants, GrantType] | VariantForGrantTypeCreation
    >
  ): Dictionary<GrantTypeVariants, GrantType> {
    const defaultDictionary: Dictionary<GrantTypeVariants, GrantType> =
      new Dictionary();

    const {
      hasIterable,
      isOnlyVariantsValues,
      isKeyValueAsVariantAndGrantType,
    } = this._defineIterableType(iterable);

    if (!hasIterable) {
      return defaultDictionary;
    }

    if (isOnlyVariantsValues) {
      return this._createDictionaryFromOnlyVariantsValuesIterable(
        iterable as Iterable<VariantForGrantTypeCreation>
      );
    }

    if (isKeyValueAsVariantAndGrantType) {
      return new Dictionary(
        iterable as Iterable<[GrantTypeVariants, GrantType]>
      );
    }

    return defaultDictionary;
  }

  private _defineIterableType(
    iterable?: Iterable<
      [GrantTypeVariants, GrantType] | VariantForGrantTypeCreation
    >
  ): {
    hasIterable: boolean;
    isOnlyVariantsValues: boolean;
    isKeyValueAsVariantAndGrantType: boolean;
  } {
    const hasIterable = iterable !== undefined;

    const iterator = hasIterable ? iterable[Symbol.iterator]() : false;
    const iteratorNextValue = iterator && iterator.next().value;

    const isArrayIteratorNextValue: boolean =
      iteratorNextValue && Array.isArray(iteratorNextValue);

    const [iterableItemKey, iterableItemValue] =
      (isArrayIteratorNextValue &&
        (iteratorNextValue as [GrantTypeVariants, GrantType])) ||
      [];

    const isOnlyVariantsValues =
      iteratorNextValue &&
      !isArrayIteratorNextValue &&
      typeof iteratorNextValue === 'string' &&
      typeof GrantType.GRANT_TYPES_BY_VARIANTS[
        iteratorNextValue as VariantForGrantTypeCreation
      ] === 'string';

    const isKeyValueAsVariantAndGrantType: boolean =
      isArrayIteratorNextValue &&
      typeof iterableItemKey === 'string' &&
      GrantType.GRANT_TYPES_BY_VARIANTS[iterableItemKey] &&
      iterableItemValue instanceof GrantType;

    return {
      hasIterable,
      isOnlyVariantsValues,
      isKeyValueAsVariantAndGrantType,
    };
  }

  private _createDictionaryFromOnlyVariantsValuesIterable(
    iterable: Iterable<VariantForGrantTypeCreation>
  ) {
    const dictionary = new Dictionary<GrantTypeVariants, GrantType>();
    for (const variant of iterable) {
      const { key, value } = this._createKeyValueForAdding(
        GrantType.create(variant)
      );

      dictionary.add(key, value);
    }
    return dictionary;
  }
}
