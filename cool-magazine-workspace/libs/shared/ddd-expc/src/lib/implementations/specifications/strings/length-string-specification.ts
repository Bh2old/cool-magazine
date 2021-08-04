import { CompositeSpecification } from '../../../abstractions';

export class LengthStringSpecification extends CompositeSpecification<string> {
  private readonly _min?: number;
  public get min(): number | undefined {
    return this._min;
  }

  private readonly _max?: number;
  public get max(): number | undefined {
    return this._max;
  }

  constructor(strictLength: number);
  constructor(min: { min: number });
  constructor(max: { max: number });
  constructor(minMax: { min: number; max: number });
  constructor(minMax: number | { min?: number; max?: number }) {
    super();

    if (typeof minMax === 'number') {
      this._min = this._max = minMax;
    } else {
      this._min = minMax.min;
      this._max = minMax.max;
    }
  }

  isSatisfiedBy(candidate: string): boolean {
    const minConditional =
      this.min === undefined || candidate.length >= this.min;
    const maxConditional =
      this.max === undefined || candidate.length <= this.max;

    return minConditional && maxConditional;
  }
}
