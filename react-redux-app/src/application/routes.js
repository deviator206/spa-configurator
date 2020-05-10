import React from 'react'
import { Route, Switch } from 'react-router'
import pageImports from './pageImports';
import NoMatch from '../component/NoMatch'
import utilsInstance from '../misc/Utility';
import {NavigatorHelper} from '../store/navigationMiddleware';

const routeConfig = [
 {
    route: "/p2",
    pageInfo:{
      name:'p2'
    }
  },
  {
    route: "/p3",
    pageInfo:{
      name:'p3'
    }
  },
  {
    route: "/p4",
    pageInfo:{
      name:'p4'
    }
  },
  {
    route: "/",
    pageInfo:{
      name:'home'
    }
  }
]


const getRoutes = (routeConfig) =>{
  const routeList = [];
  routeConfig.forEach(element => {
    // get dynamic component from window instance
    let DynamicComponent = utilsInstance.getGlobalSetComponent(element.pageInfo.name);
    // get page configurations to register the outcomes
    let pageConfig = utilsInstance.getGlobalSetPageConfig(element.pageInfo.name);
    if(pageConfig.outcomes && pageConfig.outcomes.length > 0){
      // register the outcomes with middleware
       NavigatorHelper.addOutcomes(pageConfig.outcomes)
    }
    routeList.push(
      <Route key={element.pageInfo.name} exact path={element.route} component={DynamicComponent} />
    )
  });
  return routeList;
}


const routes = (
  <div>
    <Switch>
      {getRoutes(routeConfig)}
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes