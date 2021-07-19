import { ValueObject } from "@bh2old/ddd-expc";

export class GrantType extends ValueObject {
  private _value: string;
  private setValue(value: string) {
    this._value = value;
  }
  public get value(): string {
    return this._value;
  }

  private constructor(type: string) {
    super();
    this._value = type;
  }

  public static create(type: string): GrantType {
    return new GrantType(type);
  }
}
