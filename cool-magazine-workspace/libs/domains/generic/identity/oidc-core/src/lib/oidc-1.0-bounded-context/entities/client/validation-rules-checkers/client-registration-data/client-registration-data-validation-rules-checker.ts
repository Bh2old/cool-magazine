import {
  Dictionary,
  ValidationRule,
  ValidationRulesChecker,
} from '@bh2old/ddd-expc';
import {
  CreateValueClientIdValidationRule,
  GrantTypeVariantsPropertyClientMetadataCreateValuesValidationRule,
  RedirectUrisPropertyClientMetadataCreateValuesValidationRule,
  ResponseTypeVariantsPropertyClientMetadataCreateValuesValidationRule,
  ResponseTypeVariantsToGrantTypeVariantsCorrespondenceValidationRule,
} from '../../../../value-objects';
import { IClientRegistrationData } from '../../models';
import { SecretPropertyClientRegistrationDataValidationRule } from '../../validation-rules';

export class ClientRegistrationDataValidationRulesChecker extends ValidationRulesChecker<IClientRegistrationData> {
  private readonly _secretPropertyValidationRule =
    new SecretPropertyClientRegistrationDataValidationRule();

  private readonly _downCastableClientIdPropertyValidationRule =
    new CreateValueClientIdValidationRule();
  private readonly _idPropertyValidationRule =
    new ValidationRule<IClientRegistrationData>(
      (candidate: IClientRegistrationData) => {
        return this._downCastableClientIdPropertyValidationRule.validate(
          candidate.id
        );
      },
      this._downCastableClientIdPropertyValidationRule.validationMessage,
      'id'
    );

  private readonly _downCastableRedirectUrisPropertyValidationRule =
    new RedirectUrisPropertyClientMetadataCreateValuesValidationRule();
  private readonly _redirectUrisPropertyValidationRule =
    new ValidationRule<IClientRegistrationData>(
      (candidate: IClientRegistrationData) => {
        return this._downCastableRedirectUrisPropertyValidationRule.validate(
          candidate.metadata
        );
      },
      this._downCastableRedirectUrisPropertyValidationRule.validationMessage,
      'clientMetadata.redirectUris'
    );

  private readonly _downCastableResponseTypeVariantsPropertyValidationRule =
    new ResponseTypeVariantsPropertyClientMetadataCreateValuesValidationRule();
  private readonly _responseTypeVariantsPropertyValidationRule =
    new ValidationRule<IClientRegistrationData>(
      (candidate: IClientRegistrationData) => {
        return this._downCastableResponseTypeVariantsPropertyValidationRule.validate(
          candidate.metadata
        );
      },
      this._downCastableResponseTypeVariantsPropertyValidationRule.validationMessage,
      'clientMetadata.responseTypeVariants'
    );

  private readonly _downCastableGrantTypeVariantsPropertyValidationRule =
    new GrantTypeVariantsPropertyClientMetadataCreateValuesValidationRule();
  private readonly _grantTypeVariantsPropertyValidationRule =
    new ValidationRule<IClientRegistrationData>(
      (candidate: IClientRegistrationData) => {
        return this._downCastableGrantTypeVariantsPropertyValidationRule.validate(
          candidate.metadata
        );
      },
      this._downCastableGrantTypeVariantsPropertyValidationRule.validationMessage,
      'clientMetadata.grantTypeVariants'
    );

  private readonly _downCastableResponseTypeVariantsToGrantTypeVariantsCorrespondence =
    new ResponseTypeVariantsToGrantTypeVariantsCorrespondenceValidationRule();
  private readonly _responseTypeVariantsToGrantTypeVariantsCorrespondenceValidationRule =
    new ValidationRule<IClientRegistrationData>(
      (candidate: IClientRegistrationData) => {
        return this._downCastableResponseTypeVariantsToGrantTypeVariantsCorrespondence.validate(
          candidate.metadata
        );
      },
      this._downCastableResponseTypeVariantsToGrantTypeVariantsCorrespondence.validationMessage,
      'clientMetadata.responseTypeVariants&grantTypeVariants'
    );

  constructor() {
    super('ClientRegistrationData', Dictionary);

    this.addRule('id', this._idPropertyValidationRule)
      .addRule('secret', this._secretPropertyValidationRule)
      .addRule(
        'clientMetadata.redirectUris',
        this._redirectUrisPropertyValidationRule
      )
      .addRule(
        'clientMetadata.responseTypeVariants',
        this._responseTypeVariantsPropertyValidationRule
      )
      .addRule(
        'clientMetadata.grantTypeVariants',
        this._grantTypeVariantsPropertyValidationRule
      )
      .addRule(
        'clientMetadata.responseTypeVariants&grantTypeVariants',
        this
          ._responseTypeVariantsToGrantTypeVariantsCorrespondenceValidationRule
      );
  }
}
