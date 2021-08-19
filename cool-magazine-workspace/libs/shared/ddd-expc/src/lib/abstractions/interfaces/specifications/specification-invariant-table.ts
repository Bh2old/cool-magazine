export interface ISpecifiedCandidateInvariantTable<TInvariantValue> {
  [key: string]: TInvariantValue;
}

export interface ISpecificationInvariantTable<TInvariantValue> {
  readonly valid: ISpecifiedCandidateInvariantTable<TInvariantValue>;
  readonly invalid: ISpecifiedCandidateInvariantTable<TInvariantValue>;

  getAllValidCandidates(): Iterable<TInvariantValue>;
  getAllInvalidCandidates(): Iterable<TInvariantValue>;
}
