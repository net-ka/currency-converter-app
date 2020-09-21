import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'antd/dist/antd.css';

import { Home } from './Home/scenes';
import { NotFound} from './NotFound';

export const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
