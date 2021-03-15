import React from "react";
import ReactDOM from "react-dom";
import { Home } from "./pages/Home";
import { Gallery } from "./pages/Gallery";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./index.scss";

type IRoutes = {
  path: string | string[];
  exact: boolean;
  component: JSX.Element;
}[];

/* Elush- I created an array of routes here so that it is easier to add
 * routes through the lifetime of the app
 */
const routes: IRoutes = [
  {
    path: "/gallery",
    exact: true,
    component: <Gallery />,
  },
  {
    path: "/",
    exact: true,
    component: <Home />,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {routes.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            exact={route.exact}
            children={route.component}
          />
        ))}
        {/* Elush- I set a default redirect to / for unrecognized routes.
             Ideal would have been an ideal 404 page but did not have time */}
        <Route key={"default-redirect"}>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
