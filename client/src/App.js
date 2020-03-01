import React, { Fragment } from 'react';

import Header from './components/common/header/Header';

import List from './components/list/List';
import Detail from './components/detail/Detail';
import Results from './components/results/Results';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/items" component={Results} />
          <Route exact path="/items/:id" component={Detail} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
