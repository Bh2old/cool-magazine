import { SpecificationInvariantTable } from '@bh2old/ddd-expc';
import { ResponseTypeVariants } from '../../types';

export class CreateVariantResponseTypeSpecificationInvariantTable extends SpecificationInvariantTable<ResponseTypeVariants> {
  get valid() {
    const variants: { [key in ResponseTypeVariants]: ResponseTypeVariants } = {
      code: 'code',
      idToken: 'idToken',
      tokenIdToken: 'tokenIdToken',
      codeIdToken: 'codeIdToken',
      codeToken: 'codeToken',
      codeTokenIdToken: 'codeTokenIdToken',
    };

    return variants;
  }
  get invalid() {
    return {};
  }
}
