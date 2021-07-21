import { GrantTypeVariants } from './grant-type-variants.type';
import { GrantTypes } from './grant-types.type';

export type GrantTypesByVariants = {
  readonly [variant in GrantTypeVariants]: GrantTypes;
};
