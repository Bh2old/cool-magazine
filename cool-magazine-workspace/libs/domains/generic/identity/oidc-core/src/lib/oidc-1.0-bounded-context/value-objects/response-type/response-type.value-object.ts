import { ValueObject } from '@bh2old/ddd-expc';
import { ResponseTypesByVariants, ResponseTypeVariants } from './types';

export class ResponseType extends ValueObject {
  private readonly _responseTypesByVariants: ResponseTypesByVariants = {
    codeIdToken: 'code id_token',
    code: 'code',
    idToken: 'id_token',
    none: 'none',
  };

  public get value(): string {
    return this._responseTypesByVariants[this.valueAsVariant];
  }

  public readonly valueAsVariant: ResponseTypeVariants;

  private constructor(variant: ResponseTypeVariants) {
    super();
    this.valueAsVariant = variant;
  }

  public static create(type: ResponseTypeVariants): ResponseType {
    return new ResponseType(type);
  }

  public static createAsDefault(): ResponseType {
    return new ResponseType('code');
  }
}
