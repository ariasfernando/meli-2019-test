import React, { Fragment } from 'react';
import Header from './components/common/header/Header';

import Detail from './components/detail/Detail';
import Results from './components/results/Results';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Search from '../../models/Search';

function App() {
  let search = new Search();
  console.log(search);
  return (
    <Fragment>
      <Router>
        <Header />
        <p>{ process.env.REACT_APP_BACKEND_PORT }</p>
        <Switch>
          <Route exact path="/items" component={Results} />
          <Route exact path="/items/:id" component={Detail} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
