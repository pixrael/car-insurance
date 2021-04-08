const { Rule } = require('./rule');
const { FullCoverageRule } = require('./custom-rules/full-coverage-rule');
const { MegaCoverageRule } = require('./custom-rules/mega-coverage-rule');
const { SpecialFullCoverageRule } = require('./custom-rules/special-full-coverage-rule');
const { SuperSaleRule } = require('./custom-rules/super-sale-rule');

const { FULL_COVERAGE,
    MEGA_COVERAGE,
    SPECIAL_FULL_COVERAGE,
    SUPER_SALE } = require('./types');


class RuleFactory {
    constructor() { }

    getRuleInstace(type = '') {
        switch (type) {
            case FULL_COVERAGE: {
                return new FullCoverageRule();
            }
            case MEGA_COVERAGE: {
                return new MegaCoverageRule();
            }
            case SPECIAL_FULL_COVERAGE: {
                return new SpecialFullCoverageRule();
            }
            case SUPER_SALE: {
                return new SuperSaleRule();
            }
            default: {
                return new Rule();
            }
        }

    }

}

module.exports = {
    RuleFactory
}