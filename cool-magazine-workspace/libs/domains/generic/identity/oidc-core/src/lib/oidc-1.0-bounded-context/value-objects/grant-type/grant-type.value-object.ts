import { ValueObject } from '@bh2old/ddd-expc';
import { GrantTypes } from './enums';
import { GrantTypeVariants } from './types';

export class GrantType extends ValueObject {
  private _value: GrantTypeVariants;
  public get value(): string {
    return this._value;
  }

  private constructor(type: GrantTypeVariants) {
    super();
    this._value = type;
  }

  public static create(type: GrantTypeVariants): GrantType {
    return new GrantType(type);
  }

  public static createAsDefault(): GrantType {
    return new GrantType(GrantTypes.authorizationCode);
  }
}
