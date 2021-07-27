import { Dictionary, ICloneable } from '@bh2old/ddd-expc';
import { RedirectUri } from '../redirect-uri.value-object';

type UriForRedirectUriCreation = string;
type Uri = string;
export class RedirectUriDictionary
  implements ICloneable<RedirectUriDictionary>
{
  private readonly _dictionary: Dictionary<Uri, RedirectUri>;

  constructor();
  constructor(iterable: Iterable<[Uri, RedirectUri]>);
  constructor(iterable: Iterable<UriForRedirectUriCreation>);
  constructor(
    iterable?: Iterable<
      [Uri, RedirectUri] | UriForRedirectUriCreation
    >
  ) {
    this._dictionary = this._createDictionary(iterable);
  }

  add(uri: RedirectUri): RedirectUriDictionary {
    const { key, value } = this._createKeyValueForAdding(uri);
    this._dictionary.add(key, value);

    return this;
  }

  hasUri(uri: Uri): boolean {
    return this._dictionary.hasKey(uri);
  }

  get(uri: Uri): RedirectUri | undefined {
    return this._dictionary.get(uri);
  }

  values(): IterableIterator<RedirectUri> {
    return this._dictionary.values();
  }

  clone(): RedirectUriDictionary {
    return new RedirectUriDictionary(this._dictionary);
  }

  private _createKeyValueForAdding(uri: RedirectUri): {
    key: Uri;
    value: RedirectUri;
  } {
    return { key: uri.value, value: uri };
  }

  private _createDictionary(
    iterable?: Iterable<
      [Uri, RedirectUri] | UriForRedirectUriCreation
    >
  ): Dictionary<string, RedirectUri> {
    const defaultDictionary: Dictionary<Uri, RedirectUri> =
      new Dictionary();

    const {
      hasIterable,
      isOnlyUriValues,
      isKeyValueAsUriAndRedirectUri,
    } = this._defineIterableType(iterable);

    if (!hasIterable) {
      return defaultDictionary;
    }

    if (isOnlyUriValues) {
      return this._createDictionaryFromOnlyUriValuesIterable(
        iterable as Iterable<UriForRedirectUriCreation>
      );
    }

    if (isKeyValueAsUriAndRedirectUri) {
      return new Dictionary(
        iterable as Iterable<[Uri, RedirectUri]>
      );
    }

    return defaultDictionary;
  }

  private _defineIterableType(
    iterable?: Iterable<
      [Uri, RedirectUri] | UriForRedirectUriCreation
    >
  ): {
    hasIterable: boolean;
    isOnlyUriValues: boolean;
    isKeyValueAsUriAndRedirectUri: boolean;
  } {
    const hasIterable = iterable !== undefined;

    const iterator = hasIterable ? iterable[Symbol.iterator]() : false;
    const iteratorNextValue = iterator && iterator.next().value;

    const isArrayIteratorNextValue: boolean =
      iteratorNextValue && Array.isArray(iteratorNextValue);

    const [iterableItemKey, iterableItemValue] =
      (isArrayIteratorNextValue && iteratorNextValue) || [];

    const isOnlyUriValues =
      iteratorNextValue &&
      !isArrayIteratorNextValue &&
      typeof iteratorNextValue === 'string';

    const isKeyValueAsUriAndRedirectUri: boolean =
      isArrayIteratorNextValue &&
      typeof iterableItemKey === 'string' &&
      iterableItemValue instanceof RedirectUri;

    return {
      hasIterable,
      isOnlyUriValues,
      isKeyValueAsUriAndRedirectUri,
    };
  }

  private _createDictionaryFromOnlyUriValuesIterable(
    iterable: Iterable<UriForRedirectUriCreation>
  ) {
    const dictionary = new Dictionary<Uri, RedirectUri>();
    for (const uri of iterable) {
      const { key, value } = this._createKeyValueForAdding(
        RedirectUri.create(uri)
      );

      dictionary.add(key, value);
    }
    return dictionary;
  }
}
