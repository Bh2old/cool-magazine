import { GrantType } from '../grant-type.value-object';

export type GrantTypeVariants = keyof typeof GrantType.GRANT_TYPES_BY_VARIANTS;
