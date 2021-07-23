import { Dictionary } from '@bh2old/ddd-expc';
import { RedirectUri } from '../redirect-uri.value-object';

export class RedirectUriDictionary {
  private readonly _dictionary: Dictionary<string, RedirectUri> =
    new Dictionary();

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
}
