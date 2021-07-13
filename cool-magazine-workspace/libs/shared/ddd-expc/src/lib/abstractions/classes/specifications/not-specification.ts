import { ISpecification } from '../../interfaces';
import { CompositeSpecification } from '.';

export class NotSpecification<
  TSpecified
> extends CompositeSpecification<TSpecified> {
  other: ISpecification<TSpecified>;

  constructor(other: ISpecification<TSpecified>) {
    super();
    this.other = other;
  }

  isSatisfiedBy = (candidate: TSpecified): boolean =>
    !this.other.isSatisfiedBy(candidate);
}
