import {
  IAuthorityUriComponent,
  IFragmentUriComponent,
  IPathUriComponent,
  IQueryUriComponent,
  ISchemeUriComponent,
} from './uri-components';

export interface IUriReferenceParsingResult
  extends ISchemeUriComponent,
    IAuthorityUriComponent,
    IPathUriComponent,
    IQueryUriComponent,
    IFragmentUriComponent {}
