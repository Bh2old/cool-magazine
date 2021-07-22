import { ResponseType } from '../response-type.value-object';

export type ResponseTypeVariants =
  keyof typeof ResponseType.RESPONSE_TYPES_BY_VARIANTS;
