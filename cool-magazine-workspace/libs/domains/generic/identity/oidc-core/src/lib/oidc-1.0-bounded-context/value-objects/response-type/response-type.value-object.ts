import { ValueObject } from '@bh2old/ddd-expc';
import { ResponseTypeVariants } from './types';

export class ResponseType extends ValueObject {
  private _value: ResponseTypeVariants;
  public get value(): string {
    return this._value;
  }

  private constructor(type: ResponseTypeVariants) {
    super();
    this._value = type;
  }

  public static create(type: ResponseTypeVariants): ResponseType {
    return new ResponseType(type);
  }
}
