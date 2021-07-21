import { ResponseTypeVariants } from './response-type-variants.type';
import { ResponseTypes } from './response-types.type';

export type ResponseTypesByVariants = {
  readonly [variant in ResponseTypeVariants]: ResponseTypes;
};
