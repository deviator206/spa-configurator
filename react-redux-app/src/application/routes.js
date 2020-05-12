import React from 'react'
import { Route, Switch } from 'react-router'
import PageImports from './PageImports';
import NoMatch from '../component/NoMatch';
import RuleExecutor from '../rule-executor/RuleExecutor';
import MetaJSON from '../component/rules-meta.json';


const getRoutes = (appConfig) => {
  /*
  let ruleExecutorInstance = new RuleExecutor();
  const inputRuleDefintion = {
    ...MetaJSON
  }
  ruleExecutorInstance.excuteRule(inputRuleDefintion, { displayMessage: true })
  */
  // load pages & initialize the navigations
  let pageImportInstance = new PageImports()
  const routeList = pageImportInstance.loadAllPagesAndGetRoutes(appConfig);
  return routeList;
}


const Routes = ({appConfig}) => {
  return (
    <div>
      <Switch>
        {getRoutes(appConfig)}
        <Route component={NoMatch} />
      </Switch>
    </div>
  )
}


export default Routes