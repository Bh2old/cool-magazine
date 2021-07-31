import {
  IUserInfoUriAuthorityPart,
  IHostUriAuthorityPart,
  IPortUriAuthorityPart,
} from './uri-authority-parts';

export interface IUriAuthorityParsingResult
  extends IUserInfoUriAuthorityPart,
    IHostUriAuthorityPart,
    IPortUriAuthorityPart {}
