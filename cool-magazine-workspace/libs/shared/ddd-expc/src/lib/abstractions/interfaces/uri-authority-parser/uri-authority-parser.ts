import { IAuthorityUriComponent } from '../uri-reference-parser';
import { IUriAuthorityParsingResult } from './uri-authority-parsing-result';

export interface IUriAuthorityParser {
  parse(
    authority: string | IAuthorityUriComponent
  ): IUriAuthorityParsingResult | null;
}
