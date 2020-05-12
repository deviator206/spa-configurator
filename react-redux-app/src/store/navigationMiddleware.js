import { navigatorHelperInstance } from './NavigatorHelper';
import { RuleExecutorInstance } from '../rule-executor/RuleExecutor';


const navigationMiddleware = store => next => action => {
    if (navigatorHelperInstance.checkOutcomeValidity(action.type, (action.pageIdentifier) ? action.pageIdentifier : "")) {
        console.log('navigationMiddleware:: THIS IS FOR NAVIGATION', action)
        // override the navigation logic from data that is stored at beginning 
        const navigationDetails = navigatorHelperInstance.getNavigationDetails(action.type, (action.pageIdentifier) ? action.pageIdentifier : "");
        if (navigationDetails.ruleId) {
            const inputRuleDefintion = navigatorHelperInstance.getRuleDefinitionById(navigationDetails.ruleId);
            console.log("### DEF ### ", inputRuleDefintion);
            RuleExecutorInstance.excuteRule(inputRuleDefintion, action.payload).then(resp => {
                if (resp && resp.events && resp.events.length > 0) {
                    store.dispatch(
                        {
                            type: 'RULE_EXECUTOR_SUCESS',
                            payload: { ruleExecutionResult: resp.events[resp.events.length-1].params.success, ...action.payload }
                        });
                } else {
                    store.dispatch(
                        {
                            type: 'RULE_EXECUTOR_FAILURE',
                            payload: { ruleExecutionResult: inputRuleDefintion.event.params.failure, ...action.payload }
                        });
                }
            }).catch(err => {
                console.log(err);
            });
        } else {
            navigatorHelperInstance.navigateTo(navigationDetails, store)
        }
    } else {
        let result = next(action)
        return result;
    }
}
export default navigationMiddleware;