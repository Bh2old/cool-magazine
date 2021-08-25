import { LengthStringSpecification, ValidationRuleBase } from '@bh2old/ddd-expc';

type StringLength = { readonly min: number };

export class CreateValueClientIdValidationRule extends ValidationRuleBase<string> {
  private static readonly _STRING_LENGTH: StringLength = {
    min: 6,
  } as const;
  public static get STRING_LENGTH(): StringLength {
    return { ...CreateValueClientIdValidationRule._STRING_LENGTH } as const;
  }

  constructor() {
    const stringLength = CreateValueClientIdValidationRule.STRING_LENGTH;
    const lengthSpecification = new LengthStringSpecification(stringLength.min);
    const message = `the value must be at least ${stringLength.min} in length`;
    const property = 'value';

    super(lengthSpecification, message, property);
  }
}
