import { ISpecification } from '../../interfaces';
import { CompositeSpecification } from './composite-specification';

export class OrSpecification<
  TSpecified
> extends CompositeSpecification<TSpecified> {
  left: ISpecification<TSpecified>;
  right: ISpecification<TSpecified>;

  constructor(
    left: ISpecification<TSpecified>,
    right: ISpecification<TSpecified>
  ) {
    super();
    this.left = left;
    this.right = right;
  }

  isSatisfiedBy = (candidate: TSpecified): boolean =>
    this.left.isSatisfiedBy(candidate) || this.right.isSatisfiedBy(candidate);
}
