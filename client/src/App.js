import React from 'react';

import List from './components/list/List';
import Detail from './components/detail/Detail';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={List} />
        <Route exact path="/items" component={List} />
        <Route exact path="/items/:id" component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
