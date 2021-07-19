import { GrantType } from '../../grant-type';
import { ResponseType } from '../../response-type';
import { RedirectUri } from '../../redirect-uri';

export interface IClientMetadataCreateValues {
  redirectUris: RedirectUri[];
  responseTypes: ResponseType[];
  grantTypes: GrantType[];
}
