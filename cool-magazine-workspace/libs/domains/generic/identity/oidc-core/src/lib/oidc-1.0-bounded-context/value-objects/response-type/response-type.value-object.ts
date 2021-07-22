import { ValueObject } from '@bh2old/ddd-expc';
import { ResponseTypeVariants } from './types';

export class ResponseType extends ValueObject {
  public get value(): string {
    return ResponseType._RESPONSE_TYPES_BY_VARIANTS[this.valueAsVariant];
  }

  private constructor(variant: ResponseTypeVariants) {
    super();
    this.valueAsVariant = variant;
  }

  public readonly valueAsVariant: ResponseTypeVariants;

  private static readonly _RESPONSE_TYPES_BY_VARIANTS = {
    codeIdToken: 'code id_token',
    code: 'code',
    idToken: 'id_token',
    none: 'none',
  } as const;

  public static get RESPONSE_TYPES_BY_VARIANTS() {
    return {
      ...this._RESPONSE_TYPES_BY_VARIANTS,
    } as const;
  }

  public static create(type: ResponseTypeVariants): ResponseType {
    return new ResponseType(type);
  }

  public static createAsDefault(): ResponseType {
    return new ResponseType('code');
  }
}
