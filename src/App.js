import React, { Component, Suspense } from 'react';
import classes from './App.module.css';
import Pokedex from './containers/Pokedex/Pokedex';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Spinner from './components/UI/Spinner/Spinner';
// import PokemonSummary from '../src/containers/PokemonSummary/PokemonSummary';

const PokemonSummary = React.lazy(() => import('./containers/PokemonSummary/PokemonSummary'))

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <Layout>
            <Switch>
              <Route path='/pokemon/:name' render={() => {
                return(
                  <Suspense fallback={<Spinner />}>
                    <PokemonSummary />
                  </Suspense>
                ) 
              }} exact />
              <Route path='/' exact component={Pokedex} />
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
