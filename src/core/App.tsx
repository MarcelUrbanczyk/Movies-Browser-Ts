import Navigation from "../features/Navigation";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import MovieList from "../features/List/Movies";
import PeopleList from "../features/List/People";
import ShowList from "../features/List/Shows";
import { toHome, toMovies, toPeople, toShows, toMovie, toShow } from "./routes";
import MoviePage from "../features/Page/Movie";
import ShowPage from "../features/Page/Show";

const App = () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path={toMovie}>
        <MoviePage />
      </Route>
      <Route path={toMovies}>
        <MovieList />
      </Route>
      <Route path={toShow}>
        <ShowPage />
      </Route>
      <Route path={toShows}>
        <ShowList />
      </Route>
      <Route path={toPeople}>
        <PeopleList />
      </Route>
      <Route path={toHome}>
        <Redirect to={toMovies} />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;
