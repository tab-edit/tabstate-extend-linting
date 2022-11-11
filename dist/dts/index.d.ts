declare type Problem = any;
declare type LinterState = {
    problems: Problem[];
};
declare const _default: {
    RuleSource: {};
    StatePlugin: {
        rule_providers: string[];
        computes: string[];
        reduceValue(states: LinterState[]): any[];
    };
};
export default _default;
