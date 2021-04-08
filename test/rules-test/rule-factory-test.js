const assert = require('assert');
const { Rule } = require('../../utils/rules/rule')
const { RuleFactory } = require('../../utils/rules/ruleFactory');
const { FullCoverageRule } = require('../../utils/rules/custom-rules/full-coverage-rule');
const { MegaCoverageRule } = require('../../utils/rules/custom-rules/mega-coverage-rule');
const { SpecialFullCoverageRule } = require('../../utils/rules/custom-rules/special-full-coverage-rule');
const { SuperSaleRule } = require('../../utils/rules/custom-rules/super-sale-rule');

const { FULL_COVERAGE,
    MEGA_COVERAGE,
    SPECIAL_FULL_COVERAGE,
    SUPER_SALE } = require('../../utils/rules/types');


describe('Rule Factory |', function () {
    describe('Should return the correct intance - ', function () {
        it('should get correct instance for MediumCoverageRule', function () {
            const ruleFactory = new RuleFactory();
            const instance = ruleFactory.getRuleInstace(FULL_COVERAGE);
            assert.ok(instance instanceof (FullCoverageRule));
        });

        it('should get correct instance for MegaCoverageRule', function () {
            const ruleFactory = new RuleFactory();
            const instance = ruleFactory.getRuleInstace(MEGA_COVERAGE);
            assert.ok(instance instanceof (MegaCoverageRule));
        });

        it('should get correct instance for SpecialFullCoverageRule', function () {
            const ruleFactory = new RuleFactory();
            const instance = ruleFactory.getRuleInstace(SPECIAL_FULL_COVERAGE);
            assert.ok(instance instanceof (SpecialFullCoverageRule));
        });

        it('should get correct instance for SuperSaleRule', function () {
            const ruleFactory = new RuleFactory();
            const instance = ruleFactory.getRuleInstace(SUPER_SALE);
            assert.ok(instance instanceof (SuperSaleRule));
        });

        it('should get by default the Rule a class for any case that doesnt match prev types', function () {
            const ruleFactory = new RuleFactory();
            const instance = ruleFactory.getRuleInstace('Low Coverage');
            assert.ok(instance instanceof (Rule));


            const instance2 = ruleFactory.getRuleInstace('*****');
            assert.ok(instance2 instanceof (Rule));

            const instance3 = ruleFactory.getRuleInstace('any value');
            assert.ok(instance3 instanceof (Rule));
        });



    });
});
