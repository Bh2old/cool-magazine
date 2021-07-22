import { ValueObject } from '@bh2old/ddd-expc';
import { GrantTypeVariants } from './types';

export class GrantType extends ValueObject {
  public get value(): string {
    return GrantType._GRANT_TYPES_BY_VARIANTS[this.valueAsVariant];
  }

  public readonly valueAsVariant: GrantTypeVariants;

  private constructor(variant: GrantTypeVariants) {
    super();
    this.valueAsVariant = variant;
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

  public static create(type: GrantTypeVariants): GrantType {
    return new GrantType(type);
  }

  public static createAsDefault(): GrantType {
    return new GrantType('authorizationCode');
  }
}
