import { ValueObject } from '@bh2old/ddd-expc';
import { ResponseTypeVariants } from './types';

export class ResponseType extends ValueObject {
  private readonly _variant: ResponseTypeVariants;
  public get valueAsVariant(): ResponseTypeVariants {
    return this._variant;
  }

  public get value(): string {
    return ResponseType._RESPONSE_TYPES_BY_VARIANTS[this.valueAsVariant];
  }

  private constructor(variant: ResponseTypeVariants) {
    super();
    this._variant = variant;
  }

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

  public static create(variant: ResponseTypeVariants): ResponseType {
    return new ResponseType(variant);
  }

  public static createMany(
    variants: Set<ResponseTypeVariants>
  ): ResponseType[] {
    const responseTypes: ResponseType[] = [];

    variants.forEach((variant) => {
      responseTypes.push(new ResponseType(variant));
    });

    return responseTypes;
  }

  public static createAsDefault(): ResponseType {
    return new ResponseType('code');
  }
}
