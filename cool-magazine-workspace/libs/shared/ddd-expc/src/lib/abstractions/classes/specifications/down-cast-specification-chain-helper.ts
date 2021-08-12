import { ISpecification } from '../../interfaces';
import { AndSpecification } from './and-specification';
import { CompositeSpecification } from './composite-specification';

export class DownCastSpecificationChainHelper<
  TSpecified
> extends CompositeSpecification<TSpecified> {
  chain = (chain: ISpecification<TSpecified>): ISpecification<TSpecified> =>
    new AndSpecification<TSpecified>(this, chain);

  isSatisfiedBy(candidate: TSpecified): boolean {
    return true;
  }
}
