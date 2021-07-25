import { Dictionary, ICloneable } from '@bh2old/ddd-expc';
import { RedirectUri } from '../redirect-uri.value-object';

export class RedirectUriDictionary
  implements ICloneable<RedirectUriDictionary>
{
  private readonly _dictionary: Dictionary<string, RedirectUri> =
    new Dictionary();

  constructor();
  constructor(iterable: Iterable<[string, RedirectUri]>);
  constructor(iterable?: Iterable<[string, RedirectUri]>) {
    if (iterable) {
      this._dictionary = new Dictionary(iterable);
    } else {
      this._dictionary = new Dictionary();
    }
  }

  add(uri: RedirectUri): RedirectUriDictionary {
    this._dictionary.add(uri.value, uri);

    return this;
  }

  hasUri(uri: string): boolean {
    return this._dictionary.hasKey(uri);
  }

  get(uri: string): RedirectUri | undefined {
    return this._dictionary.get(uri);
  }

  values(): IterableIterator<RedirectUri> {
    return this._dictionary.values();
  }

  clone(): RedirectUriDictionary {
    return new RedirectUriDictionary(this._dictionary);
  }
}
