import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component></Route>
        <Route exact path="/:id" component></Route>
        <Route exact path="/producto:id" component></Route>
      </Switch>
    </Router>
  );
}

export default App;
