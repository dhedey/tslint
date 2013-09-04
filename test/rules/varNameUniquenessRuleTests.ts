/// <reference path='../references.ts' />

describe("<varnameuniqueness>", () => {
    it("ensures that variable declarations are unique within a scope", () => {
        var fileName = "rules/varnameuniqueness.test.ts";
        var failureString = Lint.Rules.VarNameUniquenessRule.FAILURE_STRING + "duplicated'";

        var createFailure = Lint.Test.createFailuresOnFile(fileName, failureString);
        var expectedFailures = [
            createFailure([11, 13], [11, 23]),
            createFailure([22, 9], [22, 19]),
            createFailure([26, 5], [26, 15])
        ];

        var actualFailures = Lint.Test.applyRuleOnFile(fileName, "varnameuniqueness");
        Lint.Test.assertFailuresEqual(actualFailures, expectedFailures);
    });
});
