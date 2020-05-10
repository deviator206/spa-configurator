import React from 'react'
import { Route, Switch } from 'react-router'
import PageImports from './pageImports';
import NoMatch from '../component/NoMatch'

const getRoutes =  () =>{
  // load pages & initialize the navigations
  let pgImp = new PageImports()
  const routeList = pgImp.loadAllPagesAndGetRoutes();
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