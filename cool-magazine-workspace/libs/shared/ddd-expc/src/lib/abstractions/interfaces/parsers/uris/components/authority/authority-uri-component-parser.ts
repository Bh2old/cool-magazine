import { IAuthorityUriComponent } from '../uri-components';
import { IAuthorityUriComponentParsingResult } from './authority-uri-component-parsing-result';

export interface IAuthorityUriComponentParser {
  parse(
    authority: string | IAuthorityUriComponent
  ): IAuthorityUriComponentParsingResult | null;
}
