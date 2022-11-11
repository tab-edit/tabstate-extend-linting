const ruleMap = {
// "comment-declared-instrument-type":   () => import("./instrument-type/comment-declared-instrument-type"),
};

var index = {
    RuleSource: ruleMap,
    Plugin: {
        rule_providers: ["linting"],
        computes: [
            "no-missing-linename"
        ],
        reduceValue(states) {
            return states.reduce((acc, state) => acc.concat(state.problems), []);
        }
    }
};

export { index as default };
//# sourceMappingURL=index.js.map
