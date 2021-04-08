const { Rule } = require('./rule');
const { FullCoverageRule } = require('./custom-rules/full-coverage-rule');
const { MegaCoverageRule } = require('./custom-rules/mega-coverage-rule');
const { SpecialFullCoverageRule } = require('./custom-rules/special-full-coverage-rule');
const { SuperSaleRule } = require('./custom-rules/super-sale-rule');


class RuleFactory {
    constructor() { }

    getRuleInstace(type = '') {
        switch (type) {
            case 'Full Coverage': {
                return new FullCoverageRule();
            }
            case 'Mega Coverage': {
                return new MegaCoverageRule();
            }
            case 'Special Full Coverage': {
                return new SpecialFullCoverageRule();
            }
            case 'Super Sale': {
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