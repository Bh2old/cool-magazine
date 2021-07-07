import { ValueObject } from '@bh2old/ddd-expc';

export class ClientId extends ValueObject {
  private readonly _value: string;
  public get value(): string {
    return this._value;
  }
  private constructor(value: string) {
    super();
    this._value = value;
  }
}
