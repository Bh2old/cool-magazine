import { ValueObject } from '@bh2old/ddd-expc';

export class ClientSecret extends ValueObject {
  private readonly _value: string | null;
  public get isSpecified(): boolean {
    return this._value === null;
  }
  public get value(): string {
    const notSpecifiedValue = '';
    return this._value || notSpecifiedValue;
  }

  private constructor(value: string | null) {
    super();
    this._value = value;
  }

  static create(value: string): ClientSecret {
    return new ClientSecret(value);
  }

  static createAsNotSpecified(): ClientSecret {
    return new ClientSecret(null);
  }
}
