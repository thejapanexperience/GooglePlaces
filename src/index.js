// jshint esversion:6
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import Layout from './components/Layout';
import Landing from './components/Landing';
import Search from './components/Search';
import Intro from './components/Intro';
import Saved from './components/Saved';

render(
  <div>
    <div className="container">
      <Router history={browserHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Landing}></IndexRoute>
          <Route path='/intro' component={Intro}></Route>
          <Route path='/search' component={Search}></Route>
          {/* <Route path='/saved' component={Saved}></Route> */}
        </Route>
      </Router>
    </div>
  </div>,
  document.getElementById('root')
);
