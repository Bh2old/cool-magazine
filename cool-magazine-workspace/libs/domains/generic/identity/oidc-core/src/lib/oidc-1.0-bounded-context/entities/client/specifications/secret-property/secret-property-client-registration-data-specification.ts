import { CompositeSpecification, Specification } from '@bh2old/ddd-expc';
import { CreateValueClientSecretSpecification } from '../../../../value-objects';
import { IClientRegistrationData } from '../../models';

export class SecretPropertyClientRegistrationDataSpecification extends CompositeSpecification<IClientRegistrationData> {
  private readonly _downCastableCreateValueClientSecretSpecification =
    new CreateValueClientSecretSpecification();

  private readonly _downCastedCreateValueClientSecretSpecification =
    new Specification<IClientRegistrationData>(
      (candidate: IClientRegistrationData) => {
        return this._downCastableCreateValueClientSecretSpecification.isSatisfiedBy(
          candidate.secret as string
        );
      }
    );

  private readonly _undefinedSecretSpecification =
    new Specification<IClientRegistrationData>(
      (candidate: IClientRegistrationData) => {
        return candidate.secret === undefined;
      }
    );

  public static get STRING_LENGTH() {
    return { ...CreateValueClientSecretSpecification.STRING_LENGTH } as const;
  }

  isSatisfiedBy(candidate: IClientRegistrationData): boolean {
    return this._undefinedSecretSpecification
      .or(this._downCastedCreateValueClientSecretSpecification)
      .isSatisfiedBy(candidate);
  }
}
