import {
  ISpecificationInvariantTable,
  ISpecifiedCandidateInvariantTable,
} from '../../interfaces/specifications';

export abstract class SpecificationInvariantTable<TInvariantValue>
  implements ISpecificationInvariantTable<TInvariantValue>
{
  abstract readonly valid: ISpecifiedCandidateInvariantTable<TInvariantValue>;
  abstract readonly invalid: ISpecifiedCandidateInvariantTable<TInvariantValue>;

  getAllValidCandidates(): Iterable<TInvariantValue> {
    return Object.values(this.valid);
  }

  getAllInvalidCandidates(): Iterable<TInvariantValue> {
    return Object.values(this.invalid);
  }
}
