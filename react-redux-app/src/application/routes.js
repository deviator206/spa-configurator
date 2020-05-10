import React from 'react'
import { Route, Switch } from 'react-router'
import PageImports from './PageImports';
import NoMatch from '../component/NoMatch'

const getRoutes =  () =>{
  // load pages & initialize the navigations
  let pageImportInstance = new PageImports()
  const routeList = pageImportInstance.loadAllPagesAndGetRoutes();
  return routeList;
}


const routes = (
  <div>
    <Switch>
      {getRoutes()}
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes