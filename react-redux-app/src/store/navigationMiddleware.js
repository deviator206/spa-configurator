import { push } from 'connected-react-router'


class NavigatorHelper {
    static outcomeInfo = {};

    static checkOutcomeValidity = (outcome) => {
        let isValid = false;
        if (NavigatorHelper.outcomeInfo[outcome]) {
            isValid = true
        }
        return isValid;
    }

    static addOutcomes = (outcomesList) => {
        outcomesList.forEach(element => {
            if (NavigatorHelper.outcomeInfo[element.action]) {
                console.error('DUPLICATE ACTION:: ', element.action)
            }
            NavigatorHelper.outcomeInfo[element.action] = element;
        });

        console.log(outcomesList);
    }

    static navigateTo = (inputOutcomeInfo, store) => {
        console.log("navigating to ..")
        store.dispatch(push(inputOutcomeInfo.routeTo))
    }
}

const navigationMiddleware = store => next => action => {
    console.log('navigationMiddleware:: dispatching', action)
    if (NavigatorHelper.checkOutcomeValidity(action.type)) {
        console.log('navigationMiddleware:: THIS IS FOR NAVIGATION', action)
        NavigatorHelper.navigateTo(action.payload, store)
    } else {
        let result = next(action)
        console.log('next state', store.getState())
        return result;
    }

}


export {
    NavigatorHelper
}

export default navigationMiddleware;