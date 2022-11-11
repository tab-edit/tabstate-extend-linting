const ruleMap = {
// "comment-declared-instrument-type":   () => import("./instrument-type/comment-declared-instrument-type"),
};

var index = {
    RuleSource: ruleMap,
    StatePlugin: {
        rule_providers: ["linting"],
        computes: [
            "no-missing-linename"
        ]
    }
};

export { index as default };
//# sourceMappingURL=index.js.map
