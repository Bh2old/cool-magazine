import { CompositeSpecification } from './composite-specification';

type IsSatisfiedByExpression<TSpecified> = (candidate: TSpecified) => boolean;

export class QuickSpecification<
  TSpecified
> extends CompositeSpecification<TSpecified> {
  private readonly _isSatisfiedByExpression: IsSatisfiedByExpression<TSpecified>;
  constructor(isSatisfiedByExpression: IsSatisfiedByExpression<TSpecified>) {
    super();
    this._isSatisfiedByExpression = isSatisfiedByExpression;
  }

  isSatisfiedBy(candidate: TSpecified): boolean {
    return this._isSatisfiedByExpression(candidate);
  }
}
