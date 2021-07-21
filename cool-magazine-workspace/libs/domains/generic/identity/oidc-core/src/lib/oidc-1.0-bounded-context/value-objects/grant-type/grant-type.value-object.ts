import { ValueObject } from '@bh2old/ddd-expc';
import { GrantTypesByVariants, GrantTypeVariants } from './types';

export class GrantType extends ValueObject {
  private readonly _grantTypesByVariants: GrantTypesByVariants = {
    authorizationCode: 'authorization_code',
    implicit: 'implicit',
    refreshToken: 'refresh_token',
  };

  private _value: GrantTypeVariants;
  public get value(): string {
    return this._grantTypesByVariants[this._value];
  }

  private constructor(type: GrantTypeVariants) {
    super();
    this._value = type;
  }

  public static create(type: GrantTypeVariants): GrantType {
    return new GrantType(type);
  }

  public static createAsDefault(): GrantType {
    return new GrantType('authorizationCode');
  }
}
