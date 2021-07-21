import { GrantTypes } from '../enums';

export type GrantTypeVariants = typeof GrantTypes[keyof typeof GrantTypes];
