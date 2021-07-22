import { GrantTypeVariants } from '../types';

export class NoSuchTypeGrantTypeDictionaryError extends Error {
  name = 'NoSuchTypeGrantTypeDictionaryError';
  type: GrantTypeVariants;

  constructor(type: GrantTypeVariants) {
    super();
    this.type = type;
  }
}
