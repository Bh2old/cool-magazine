import {
  IUserInfoAuthorityUriComponentPart,
  IHostAuthorityUriComponentPart,
  IPortAuthorityUriComponentPart,
} from './authority-uri-component-parts';

export interface IAuthorityUriComponentParsingResult
  extends IUserInfoAuthorityUriComponentPart,
    IHostAuthorityUriComponentPart,
    IPortAuthorityUriComponentPart {}
