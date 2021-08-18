import {
  IDictionary,
  IValidationRule,
  IValidationRulesChecker,
  IValidationRulesCheckingResult,
} from '../../interfaces';
import { ValidationRulesCheckingResult } from './validation-rules-checking-result';

export abstract class ValidationRulesChecker<TVerifiable>
  implements IValidationRulesChecker<TVerifiable>
{
  private readonly _verifiableName: string;
  private readonly _rules: IDictionary<string, IValidationRule<TVerifiable>>;

  protected constructor(
    verifiableName: string,
    dictionary: IDictionary<string, IValidationRule<TVerifiable>>
  ) {
    this._verifiableName = verifiableName;
    this._rules = dictionary;
  }

  check(verifiable: TVerifiable): IValidationRulesCheckingResult {
    const result = new ValidationRulesCheckingResult(this._verifiableName);

    for (const rulesItem of this._rules) {
      const [, rule] = rulesItem;

      if (!rule.validate(verifiable)) {
        result.addError(rule);
      }
    }

    return result;
  }

  addRule(
    ruleName: string,
    rule: IValidationRule<TVerifiable>
  ): ValidationRulesChecker<TVerifiable> {
    this._rules.add(ruleName, rule);

    return this;
  }
}
