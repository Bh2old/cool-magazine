import { IUriReferenceParsingResult } from './uri-reference-parsing-result';

export interface IUriReferenceParser {
  parse(uri: string): IUriReferenceParsingResult | null;
}
