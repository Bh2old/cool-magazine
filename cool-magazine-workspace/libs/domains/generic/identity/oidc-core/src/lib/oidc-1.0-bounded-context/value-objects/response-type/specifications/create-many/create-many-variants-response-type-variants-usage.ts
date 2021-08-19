import { ResponseTypeVariants } from '../../types';

export abstract class CreateManyVariantsResponseTypeVariantsUsage {
  static get valid() {
    return {
      get specified() {
        return new Set<ResponseTypeVariants>().add('code');
      },
    };
  }
  static get invalid() {
    return {
      get notSpecified() {
        return new Set<ResponseTypeVariants>();
      },
    };
  }

  static getAllValidVariants() {
    const variants = CreateManyVariantsResponseTypeVariantsUsage.valid;
    return Object.values(variants);
  }

  static getAllInvalidVariants() {
    const variants = CreateManyVariantsResponseTypeVariantsUsage.invalid;
    return Object.values(variants);
  }
}
