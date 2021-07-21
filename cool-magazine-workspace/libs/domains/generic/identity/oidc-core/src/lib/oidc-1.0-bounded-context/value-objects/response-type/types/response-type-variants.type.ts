import { ResponseTypes } from '../enums';

export type ResponseTypeVariants = typeof ResponseTypes[keyof typeof ResponseTypes];
