import { Dictionary, ICloneable } from '@bh2old/ddd-expc';
import { ResponseType } from '../response-type.value-object';
import { ResponseTypeVariants } from '../types';

type VariantForResponseTypeCreation = ResponseTypeVariants;
export class ResponseTypeDictionary
  implements ICloneable<ResponseTypeDictionary>
{
  private readonly _dictionary: Dictionary<ResponseTypeVariants, ResponseType>;

  constructor();
  constructor(iterable: Iterable<[ResponseTypeVariants, ResponseType]>);
  constructor(iterable: Iterable<VariantForResponseTypeCreation>);
  constructor(
    iterable?: Iterable<
      [ResponseTypeVariants, ResponseType] | VariantForResponseTypeCreation
    >
  ) {
    this._dictionary = this._createDictionary(iterable);
  }

  add(type: ResponseType) {
    const { key, value } = this._createKeyValueForAdding(type);
    this._dictionary.add(key, value);

    return this;
  }

  hasType(variant: ResponseTypeVariants): boolean {
    return this._dictionary.hasKey(variant);
  }

  get(variant: ResponseTypeVariants): ResponseType | undefined {
    return this._dictionary.get(variant);
  }

  values(): IterableIterator<ResponseType> {
    return this._dictionary.values();
  }

  clone(): ResponseTypeDictionary {
    return new ResponseTypeDictionary(this._dictionary);
  }

  private _createKeyValueForAdding(uri: ResponseType): {
    key: ResponseTypeVariants;
    value: ResponseType;
  } {
    return { key: uri.value, value: uri };
  }

  private _createDictionary(
    iterable?: Iterable<
      [ResponseTypeVariants, ResponseType] | VariantForResponseTypeCreation
    >
  ): Dictionary<ResponseTypeVariants, ResponseType> {
    const defaultDictionary: Dictionary<ResponseTypeVariants, ResponseType> =
      new Dictionary();

    const {
      hasIterable,
      isOnlyVariantsValues,
      isKeyValueAsVariantAndResponseType,
    } = this._defineIterableType(iterable);

    if (!hasIterable) {
      return defaultDictionary;
    }

    if (isOnlyVariantsValues) {
      return this._createDictionaryFromOnlyVariantsValuesIterable(
        iterable as Iterable<VariantForResponseTypeCreation>
      );
    }

    if (isKeyValueAsVariantAndResponseType) {
      return new Dictionary(
        iterable as Iterable<[ResponseTypeVariants, ResponseType]>
      );
    }

    return defaultDictionary;
  }

  private _defineIterableType(
    iterable?: Iterable<
      [ResponseTypeVariants, ResponseType] | VariantForResponseTypeCreation
    >
  ): {
    hasIterable: boolean;
    isOnlyVariantsValues: boolean;
    isKeyValueAsVariantAndResponseType: boolean;
  } {
    const hasIterable = iterable !== undefined;

    const iterator = hasIterable ? iterable[Symbol.iterator]() : false;
    const iteratorNextValue = iterator && iterator.next().value;

    const isArrayIteratorNextValue: boolean =
      iteratorNextValue && Array.isArray(iteratorNextValue);

    const [iterableItemKey, iterableItemValue] =
      (isArrayIteratorNextValue &&
        (iteratorNextValue as [ResponseTypeVariants, ResponseType])) ||
      [];

    const isOnlyVariantsValues =
      !isArrayIteratorNextValue &&
      iteratorNextValue &&
      typeof iteratorNextValue === 'string' &&
      Object.prototype.hasOwnProperty.call(
        ResponseType.RESPONSE_TYPES_VARIANTS,
        iteratorNextValue
      );
    const isKeyValueAsVariantAndResponseType: boolean =
      isArrayIteratorNextValue &&
      typeof iterableItemKey === 'string' &&
      Object.prototype.hasOwnProperty.call(
        ResponseType.RESPONSE_TYPES_VARIANTS,
        iterableItemKey
      ) &&
      iterableItemValue instanceof ResponseType;

    return {
      hasIterable,
      isOnlyVariantsValues,
      isKeyValueAsVariantAndResponseType,
    };
  }

  private _createDictionaryFromOnlyVariantsValuesIterable(
    iterable: Iterable<VariantForResponseTypeCreation>
  ) {
    const dictionary = new Dictionary<ResponseTypeVariants, ResponseType>();
    for (const variant of iterable) {
      const { key, value } = this._createKeyValueForAdding(
        ResponseType.create(variant)
      );

      dictionary.add(key, value);
    }
    return dictionary;
  }
}
