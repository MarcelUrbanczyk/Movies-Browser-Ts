import Navigation from "../features/Navigation";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import MovieList from "../features/List/Movies";
import PeopleList from "../features/List/People";

const App = () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path="/movies">
        <MovieList />
      </Route>
      <Route path="/shows"></Route>
      <Route path="/people">
        <PeopleList />
      </Route>
      <Route path="/">
        <Redirect to="/movies" />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;
