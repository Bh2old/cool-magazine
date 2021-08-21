export interface ISpecificationCandidatesExample<TCandidate> {
  readonly valid: Iterable<TCandidate>;
  readonly invalid: Iterable<TCandidate>;
}
