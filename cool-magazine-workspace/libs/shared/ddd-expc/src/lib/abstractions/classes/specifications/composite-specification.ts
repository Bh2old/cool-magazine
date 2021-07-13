import {
  AndNotSpecification,
  AndSpecification,
  NotSpecification,
  OrNotSpecification,
  OrSpecification,
} from '.';
import { ISpecification } from '../../interfaces';

export abstract class CompositeSpecification<TSpecified>
  implements ISpecification<TSpecified>
{
  abstract isSatisfiedBy(candidate: TSpecified): boolean;

  and = (other: ISpecification<TSpecified>): ISpecification<TSpecified> =>
    new AndSpecification<TSpecified>(this, other);

  andNot = (other: ISpecification<TSpecified>): ISpecification<TSpecified> =>
    new AndNotSpecification<TSpecified>(this, other);

  or = (other: ISpecification<TSpecified>): ISpecification<TSpecified> =>
    new OrSpecification<TSpecified>(this, other);

  orNot = (other: ISpecification<TSpecified>): ISpecification<TSpecified> =>
    new OrNotSpecification<TSpecified>(this, other);

  not = (): ISpecification<TSpecified> =>
    new NotSpecification<TSpecified>(this);
}
