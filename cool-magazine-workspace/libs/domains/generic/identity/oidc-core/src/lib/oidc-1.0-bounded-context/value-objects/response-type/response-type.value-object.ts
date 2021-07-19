import { ValueObject } from "@bh2old/ddd-expc";

export class ResponseType extends ValueObject {
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

  public static create(type: string): ResponseType {
    return new ResponseType(type);
  }
}
