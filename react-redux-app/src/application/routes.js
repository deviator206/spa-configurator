import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../component/Home';
import P2 from '../component/P2';
import P3 from '../component/P3';
import P4 from '../component/P4';
import NoMatch from '../component/NoMatch'

const routes = (
    <div>
      <Switch>
      <Route exact path="/p2" component={P2} />
        <Route exact path="/p3" component={P3} />
        <Route exact path="/p4" component={P4} />
        <Route exact path="/" component={Home} />
       
        <Route component={NoMatch} />
      </Switch>
    </div>
  )
  
  export default routes