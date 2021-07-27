import { GrantTypeVariants } from '../../grant-type';
import { ResponseTypeVariants } from '../../response-type';

export interface IClientMetadataCreateValues {
  redirectUris: Set<string>;
  responseTypeVariants?: Set<ResponseTypeVariants>;
  grantTypeVariants?: Set<GrantTypeVariants>;
}
