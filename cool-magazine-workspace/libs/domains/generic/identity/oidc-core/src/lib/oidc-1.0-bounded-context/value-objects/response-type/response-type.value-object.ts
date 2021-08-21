import { ValueObject } from '@bh2old/ddd-expc';
import { ResponseTypeVariants } from './types';

export class ResponseType extends ValueObject {
  private readonly _variant: ResponseTypeVariants;

  public get value(): ResponseTypeVariants {
    return this._variant;
  }

  private constructor(variant: ResponseTypeVariants) {
    super();
    this._variant = variant;
  }

  private static readonly _RESPONSE_TYPES_VARIANTS = {
    code: true,
    id_token: true,
    'token id_token': true,
    'code id_token': true,
    'code token': true,
    'code token id_token': true,
  } as const;

  public static get RESPONSE_TYPES_VARIANTS() {
    return {
      ...this._RESPONSE_TYPES_VARIANTS,
    } as const;
  }

  public static create(variant: ResponseTypeVariants): ResponseType {
    return new ResponseType(variant);
  }

  public static createMany(
    variants: Set<ResponseTypeVariants>
  ): Iterable<ResponseType> {
    const responseTypes: ResponseType[] = [];

    variants.forEach((variant) => {
      responseTypes.push(new ResponseType(variant));
    });

    return responseTypes;
  }
}
