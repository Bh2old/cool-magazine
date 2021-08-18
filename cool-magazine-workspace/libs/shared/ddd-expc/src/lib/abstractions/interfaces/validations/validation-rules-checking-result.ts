import { IValidationRulesCheckingResultError } from './validation-rules-checking-result-error';

export interface IValidationRulesCheckingResult {
  readonly verifiableName: string;
  readonly isValid: boolean;
  readonly errors: Iterable<IValidationRulesCheckingResultError>;
}
