import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Kevin from './Kevin'
import Linsy from './Linsy'
import Lake from './Lake'
import Ed from './Ed'
import Brandon from './Brandon'
import Joe from './Joe'
import Bama from './Bama'


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      {/* add the routes here */}
      <Route path="/Kevin" component={Kevin}/>
      <Route path="/Linsy" component={Linsy}/>
      <Route path="/Lake" component={Lake}/>
      <Route path="/Ed" component={Ed}/>
      <Route path="/Brandon" component={Brandon}/>
      <Route path="/Joe" component={Joe}/>
      <Route path="/Bama" component={Bama}/>
    </Route>

  </Router>
), document.getElementById('root'))
