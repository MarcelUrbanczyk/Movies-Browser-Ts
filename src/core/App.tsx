import React from "react";
import Navigation from "../features/Navigation";
import Main from "../common/main";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import MovieList from "../features/List/Movies";

const App = () => (
  <HashRouter>
    <Navigation />
    <Main>
      <Switch>
        <Route path="/movies">
          <MovieList />
        </Route>
        <Route path="/shows"></Route>
        <Route path="/people"></Route>
        <Route path="/">
          <Redirect to="/movies" />
        </Route>
      </Switch>
    </Main>
  </HashRouter>
);

export default App;
