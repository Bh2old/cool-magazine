import {
  IAuthorityUriComponent,
  IFragmentUriComponent,
  IPathUriComponent,
  IQueryUriComponent,
  ISchemeUriComponent,
} from '../../components';

export interface IUriReferenceUriUsageParsingResult
  extends ISchemeUriComponent,
    IAuthorityUriComponent,
    IPathUriComponent,
    IQueryUriComponent,
    IFragmentUriComponent {}
