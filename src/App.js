import './App.css';
import React, { useState, useEffect } from 'react';
import { AddSection } from './Components/AddSection';
import { ViewPage } from './Components/ViewPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path='/'
            render={() => {
              return (
                <>
                  <AddSection />
                </>
              );
            }}
          ></Route>

          <Route exact path='/viewpage' component={ViewPage}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

// https://ui.dev/react-router-v4-pass-props-to-components/
