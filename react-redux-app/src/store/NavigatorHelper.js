import { push } from 'connected-react-router'
class NavigatorHelper {

    constructor() {
        this.outcomeInfo = {};
        this.ruleDefinitions = {};
    }

    setRuleDefinitions = (ruleDefs, pageIdentifier = "") => {
        for (let [key, value] of Object.entries(ruleDefs)) {
            if (this.ruleDefinitions[key]) {
                console.error('DUPLICATE Rule:: ', key)
            }
            this.ruleDefinitions[key] = value;
            this.ruleDefinitions[key].pageIdentifier = pageIdentifier;
        }
    }

    getRuleDefinitionById = (ruleId) => {
        console.log("ruleId ::: ",ruleId)
        if(this.ruleDefinitions[ruleId]) {
            return this.ruleDefinitions[ruleId];
        }
    }

    checkOutcomeValidity = (outcome, pageIdentifier) => {
        let isValid = false;
        if (!pageIdentifier && this.outcomeInfo[outcome]) {
            isValid = true
        }
        if (pageIdentifier && this.outcomeInfo[outcome] && this.outcomeInfo[outcome].pageIdentifier == pageIdentifier) {
            isValid = true
        }
        return isValid;
    }

    // SAME DISPATCH FROM 2 PAGES WOULD OVERRIDE EACH OTHER
    addOutcomes = (outcomesList, pageIdentifier) => {
        for (let [key, value] of Object.entries(outcomesList)) {
            if (this.outcomeInfo[key]) {
                console.error('DUPLICATE ACTION:: ', key)
            }
            this.outcomeInfo[key] = value;
            this.outcomeInfo[key].pageIdentifier = pageIdentifier;
        }
    }

    getNavigationDetails = (outcome, pageIdentifier = "") => {
        if (pageIdentifier && this.outcomeInfo[outcome] && this.outcomeInfo[outcome].pageIdentifier == pageIdentifier) {
            return this.outcomeInfo[outcome]
        }
        return this.outcomeInfo[outcome];
    }

    navigateTo = (inputOutcomeInfo, store) => {
        console.log("navigating to ..")
        store.dispatch(push(inputOutcomeInfo.routeTo))
    }
}

export default NavigatorHelper;
const navigatorHelperInstance = new NavigatorHelper();
export {
    navigatorHelperInstance
}