import { RedirectUriDictionary } from './../../redirect-uri';
import { ResponseTypeDictionary } from '../../response-type';
import { GrantTypeDictionary } from '../../grant-type';

export interface IClientMetadataCreateValues {
  redirectUris: RedirectUriDictionary;
  responseTypes: ResponseTypeDictionary;
  grantTypes: GrantTypeDictionary;
}
