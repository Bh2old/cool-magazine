import { ValueObject } from '@bh2old/ddd-expc';
import { GrantTypeVariants } from './types';

export class GrantType extends ValueObject {
  private readonly _variant: GrantTypeVariants;

  public get value(): GrantTypeVariants {
    return this._variant;
  }

  private constructor(variant: GrantTypeVariants) {
    super();
    this._variant = variant;
  }

  private static readonly _GRANT_TYPES_VARIANTS = {
    authorization_code: true,
    implicit: true,
    refresh_token: true,
  } as const;

  public static get GRANT_TYPES_VARIANTS() {
    return {
      ...this._GRANT_TYPES_VARIANTS,
    } as const;
  }

  public static create(variant: GrantTypeVariants): GrantType {
    return new GrantType(variant);
  }

  public static createMany(
    variants: Set<GrantTypeVariants>
  ): Iterable<GrantType> {
    const grantTypes: GrantType[] = [];

    variants.forEach((variant) => {
      grantTypes.push(new GrantType(variant));
    });

    return grantTypes;
  }
}
