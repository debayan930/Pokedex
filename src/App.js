import React, { Component } from 'react';
import classes from './App.module.css';
import Pokedex from './containers/Pokedex/Pokedex';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <Layout>
            <Switch>
              <Route to='/' exact component={Pokedex} />
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
