import { ResponseTypeVariants } from '../types';

export class NoSuchTypeResponseTypeDictionaryError extends Error {
  name = 'NoSuchTypeResponseTypeDictionaryError';
  type: ResponseTypeVariants;

  constructor(type: ResponseTypeVariants) {
    super();
    this.type = type;
  }
}
