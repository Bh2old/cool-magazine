export interface IValidationRule<TEntity> {
  readonly validationMessage: string;
  readonly validationProperty: string;

  validate(entity: TEntity): boolean;
}
