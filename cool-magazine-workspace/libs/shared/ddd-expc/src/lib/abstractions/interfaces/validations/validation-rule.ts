export interface IValidationRule<TVerifiable> {
  readonly validationMessage: string;
  readonly validationProperty: string;

  validate(verifiable: TVerifiable): boolean;
}
