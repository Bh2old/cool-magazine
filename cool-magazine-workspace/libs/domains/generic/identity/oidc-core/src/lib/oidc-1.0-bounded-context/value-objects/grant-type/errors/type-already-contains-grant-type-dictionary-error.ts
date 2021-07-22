import { GrantType } from '../grant-type.value-object';

export class TypeAlreadyContainsGrantTypeDictionaryError extends Error {
  name = 'TypeAlreadyContainsGrantTypeDictionaryError';
  type: GrantType;

  constructor(type: GrantType) {
    super();
    this.type = type;
  }
}
