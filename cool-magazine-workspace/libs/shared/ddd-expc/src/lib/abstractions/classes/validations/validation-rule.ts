import { IValidationRule } from '../../interfaces';

type ValidateExpression<TSpecified> = (candidate: TSpecified) => boolean;

export class ValidationRule<TVerifiable>
  implements IValidationRule<TVerifiable>
{
  private readonly _validateExpression: ValidateExpression<TVerifiable>;
  private readonly _message: string;
  get validationMessage(): string {
    return this._message;
  }

  private readonly _property: string;
  get validationProperty(): string {
    return this._property;
  }

  constructor(
    validateExpression: ValidateExpression<TVerifiable>,
    message: string,
    property: string
  ) {
    this._validateExpression = validateExpression;
    this._message = message;
    this._property = property;
  }

  validate(entity: TVerifiable): boolean {
    return this._validateExpression(entity);
  }
}
