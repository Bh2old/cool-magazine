import { IValidationRulesCheckingResult } from './validation-rules-checking-result';

export interface IValidationRulesChecker<TVerifiable> {
  check(verifiable: TVerifiable): IValidationRulesCheckingResult;
}
