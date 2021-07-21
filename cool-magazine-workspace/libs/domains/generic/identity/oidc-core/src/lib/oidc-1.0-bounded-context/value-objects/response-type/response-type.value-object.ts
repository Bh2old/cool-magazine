import { ValueObject } from '@bh2old/ddd-expc';
import { ResponseTypesByVariants, ResponseTypeVariants } from './types';

export class ResponseType extends ValueObject {
  private readonly _responseTypesByVariants: ResponseTypesByVariants = {
    codeIdToken: 'code id_token',
    code: 'code',
    idToken: 'id_token',
    none: 'none',
  };

  private _value: ResponseTypeVariants;
  public get value(): string {
    return this._responseTypesByVariants[this._value];
  }

  private constructor(type: ResponseTypeVariants) {
    super();
    this._value = type;
  }

  public static create(type: ResponseTypeVariants): ResponseType {
    return new ResponseType(type);
  }

  public static createAsDefault(): ResponseType {
    return new ResponseType('code');
  }
}
