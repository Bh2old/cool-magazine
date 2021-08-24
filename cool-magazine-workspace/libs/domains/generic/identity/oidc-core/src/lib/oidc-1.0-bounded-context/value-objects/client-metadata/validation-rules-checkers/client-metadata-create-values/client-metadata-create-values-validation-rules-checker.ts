import { Dictionary, ValidationRulesChecker } from '@bh2old/ddd-expc';
import {
  GrantTypeVariantsPropertyClientMetadataCreateValuesValidationRule,
  RedirectUrisPropertyClientMetadataCreateValuesValidationRule,
  ResponseTypeVariantsPropertyClientMetadataCreateValuesValidationRule,
  ResponseTypeVariantsToGrantTypeVariantsCorrespondenceValidationRule,
} from '../../validation-rules';
import { IClientMetadataCreateValues } from '../../models';

export class ClientMetadataCreateValuesValidationRulesChecker extends ValidationRulesChecker<IClientMetadataCreateValues> {
  constructor() {
    super('ClientMetadataCreateValues', Dictionary);

    this.addRule(
      'RedirectUrisProperty',
      new RedirectUrisPropertyClientMetadataCreateValuesValidationRule()
    )
      .addRule(
        'ResponseTypeVariantsProperty',
        new ResponseTypeVariantsPropertyClientMetadataCreateValuesValidationRule()
      )
      .addRule(
        'GrantTypeVariantsProperty',
        new GrantTypeVariantsPropertyClientMetadataCreateValuesValidationRule()
      )

      .addRule(
        'ResponseTypeVariantsToGrantTypeVariantsCorrespondence',
        new ResponseTypeVariantsToGrantTypeVariantsCorrespondenceValidationRule()
      );
  }
}
