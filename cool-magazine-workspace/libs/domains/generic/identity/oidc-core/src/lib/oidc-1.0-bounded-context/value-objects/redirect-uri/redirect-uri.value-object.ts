import { ValueObject } from '@bh2old/ddd-expc';

export class RedirectUri extends ValueObject {
  private _value: string;
  private setValue(value: string) {
    this._value = value;
  }
  public get value(): string {
    return this._value;
  }

  private constructor(uri: string) {
    super();
    this._value = uri;
  }

  public static create(uri: string): RedirectUri {
    return new RedirectUri(uri);
  }
}
