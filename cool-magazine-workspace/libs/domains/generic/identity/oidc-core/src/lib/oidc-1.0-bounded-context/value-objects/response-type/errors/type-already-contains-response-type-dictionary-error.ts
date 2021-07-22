import { ResponseType } from '../response-type.value-object';

export class TypeAlreadyContainsResponseTypeDictionaryError extends Error {
  name = 'TypeAlreadyContainsResponseTypeDictionaryError';
  type: ResponseType;

  constructor(type: ResponseType) {
    super();
    this.type = type;
  }
}
