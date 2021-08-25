import {
  LengthStringSpecification,
  CompositeSpecification,
} from '@bh2old/ddd-expc';

type StringLength = { readonly min: number };

export class CreateValueClientSecretSpecification extends CompositeSpecification<string> {
  private readonly _lengthSpecification = new LengthStringSpecification(
    CreateValueClientSecretSpecification.STRING_LENGTH
  );

  private static readonly _STRING_LENGTH: StringLength = {
    min: 8,
  } as const;
  public static get STRING_LENGTH(): StringLength {
    return { ...CreateValueClientSecretSpecification._STRING_LENGTH } as const;
  }

  isSatisfiedBy(candidate: string): boolean {
    return this._lengthSpecification.isSatisfiedBy(candidate);
  }
}
