import {
  GrantTypeVariants,
  ResponseTypeVariants,
} from '../../../value-objects';

export interface IClientRegistrationData {
  id: string;
  secret?: string;
  metadata: {
    redirectUris: Set<string>;
    responseTypeVariants?: Set<ResponseTypeVariants>;
    grantTypeVariants?: Set<GrantTypeVariants>;
  };
}
