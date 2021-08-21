import { ISpecificationCandidatesExample } from '@bh2old/ddd-expc';
import { ResponseTypeVariants } from '../../types';

export class CreateVariantResponseTypeSpecificationCandidatesExample
  implements ISpecificationCandidatesExample<ResponseTypeVariants>
{
  get valid() {
    return new Set<ResponseTypeVariants>([
      'code',
      'idToken',
      'tokenIdToken',
      'codeIdToken',
      'codeToken',
      'codeTokenIdToken',
    ]);
  }
  get invalid() {
    return [];
  }
}
