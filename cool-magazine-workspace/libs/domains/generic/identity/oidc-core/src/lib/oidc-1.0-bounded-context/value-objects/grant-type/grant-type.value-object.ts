import { ValueObject } from '@bh2old/ddd-expc';
import { GrantTypeVariants } from './types';

export class GrantType extends ValueObject {
  private readonly _variant: GrantTypeVariants;
  public get valueAsVariant(): GrantTypeVariants {
    return this._variant;
  }

  public get value(): string {
    return GrantType._GRANT_TYPES_BY_VARIANTS[this.valueAsVariant];
  }

  private constructor(variant: GrantTypeVariants) {
    super();
    this._variant = variant;
  }

  private static readonly _GRANT_TYPES_BY_VARIANTS = {
    authorizationCode: 'authorization_code',
    implicit: 'implicit',
    refreshToken: 'refresh_token',
  } as const;

  public static get GRANT_TYPES_BY_VARIANTS() {
    return {
      ...this._GRANT_TYPES_BY_VARIANTS,
    } as const;
  }

  public static create(variant: GrantTypeVariants): GrantType {
    return new GrantType(variant);
  }

  public static createMany(variants: Set<GrantTypeVariants>): GrantType[] {
    const grantTypes: GrantType[] = [];

    variants.forEach((variant) => {
      grantTypes.push(new GrantType(variant));
    });
    
    return grantTypes;
  }

  public static createAsDefault(): GrantType {
    return new GrantType('authorizationCode');
  }
}
