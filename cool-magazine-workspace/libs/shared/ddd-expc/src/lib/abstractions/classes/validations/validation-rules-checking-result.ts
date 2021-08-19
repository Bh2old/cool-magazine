import {
  IValidationRule,
  IValidationRulesCheckingResult,
  IValidationRulesCheckingResultError,
} from '../../interfaces';

export class ValidationRulesCheckingResult
  implements IValidationRulesCheckingResult
{
  private readonly _errors: IValidationRulesCheckingResultError[] = [];
  get errors(): Iterable<IValidationRulesCheckingResultError> {
    return [...this._errors];
  }

  private readonly _verifiableName: string;
  get verifiableName(): string {
    return this._verifiableName;
  }

  get isValid(): boolean {
    return this._errors.length === 0;
  }

  constructor(verifiableName: string) {
    this._verifiableName = verifiableName;
  }

  addError<TVerifiable>(
    invalidRule: IValidationRule<TVerifiable>
  ): ValidationRulesCheckingResult {
    const error: IValidationRulesCheckingResultError = {
      message: invalidRule.validationMessage,
      property: invalidRule.validationProperty,
    };
    this._errors.push(error);

    return this;
  }
}
