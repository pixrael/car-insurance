const assert = require('assert');
const { RuleFactory } = require('../utils/rules/ruleFactory');
const { FullCoverageRule } = require('../utils/rules/custom-rules/full-coverage-rule');



describe('Rule Factory |', function () {
    describe('Should return the correct intance - ', function () {
        it('should get correct instance for MediumCoverageRule', function () {

            const ruleFactory = new RuleFactory();

            const instance = ruleFactory.getRuleInstace('Full Coverage');

            assert.ok(instance instanceof (FullCoverageRule));
        });
       
    });
});
