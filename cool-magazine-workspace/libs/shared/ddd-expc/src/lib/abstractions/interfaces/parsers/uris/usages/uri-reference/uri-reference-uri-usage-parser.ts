import { IUriReferenceUriUsageParsingResult } from './uri-reference-uri-usage-parsing-result';

export interface IUriReferenceUriUsageParser {
  parse(uri: string): IUriReferenceUriUsageParsingResult | null;
}
