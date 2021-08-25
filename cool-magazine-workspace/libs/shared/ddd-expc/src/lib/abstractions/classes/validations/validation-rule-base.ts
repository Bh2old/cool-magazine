import { ISpecification, IValidationRule } from '../../interfaces';
import { SpecificationRule } from '../specifications';

export class ValidationRuleBase<TSpecified>
  extends SpecificationRule<TSpecified>
  implements IValidationRule<TSpecified>
{
  private readonly _message: string;
  get validationMessage(): string {
    return this._message;
  }

  private readonly _property: string;
  get validationProperty(): string {
    return this._property;
  }

  constructor(
    rule: ISpecification<TSpecified>,
    message: string,
    property: string
  ) {
    super(rule);
    this._message = message;
    this._property = property;
  }

  validate(entity: TSpecified): boolean {
    return this.isSatisfied(entity);
  }
}
