import { ISpecification } from '../../interfaces';

export abstract class SpecificationRule<TSpecified> {
  private readonly _rule: ISpecification<TSpecified>;

  protected constructor(rule: ISpecification<TSpecified>) {
    this._rule = rule;
  }

  public isSatisfied(entity: TSpecified): boolean {
    return this._rule.isSatisfiedBy(entity);
  }
}
