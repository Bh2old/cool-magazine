import { LengthStringSpecification, ValidationRuleBase } from '@bh2old/ddd-expc';

type StringLength = { readonly min: number };

export class CreateValueClientSecretValidationRule extends ValidationRuleBase<string> {
  private static readonly _STRING_LENGTH: StringLength = {
    min: 8,
  } as const;
  public static get STRING_LENGTH(): StringLength {
    return { ...CreateValueClientSecretValidationRule._STRING_LENGTH } as const;
  }

  constructor() {
    const stringLength = CreateValueClientSecretValidationRule.STRING_LENGTH;
    const lengthSpecification = new LengthStringSpecification(stringLength.min);
    const message = `the value must be at least ${stringLength.min} in length`;
    const property = 'value';

    super(lengthSpecification, message, property);
  }
}
