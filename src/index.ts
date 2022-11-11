import { ruleMap } from "./rules";
export default {
    RuleSource: ruleMap,
    StatePlugin: {
        rule_providers: ["linting"],
        computes: [
            "no-missing-linename"
        ]
    }
}