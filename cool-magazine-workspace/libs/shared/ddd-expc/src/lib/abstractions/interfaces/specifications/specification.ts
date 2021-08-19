export interface ISpecification<TSpecified> {
  isSatisfiedBy(candidate: TSpecified): boolean;
  and(other: ISpecification<TSpecified>): ISpecification<TSpecified>;
  andNot(other: ISpecification<TSpecified>): ISpecification<TSpecified>;
  or(other: ISpecification<TSpecified>): ISpecification<TSpecified>;
  orNot(other: ISpecification<TSpecified>): ISpecification<TSpecified>;
  not(): ISpecification<TSpecified>;
}
