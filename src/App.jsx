import React from "react";
import "react-notifications/lib/notifications.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/sass/app.css";
import Header from "./components/Header";
import history from "./configs/history";
import routes from "./constants/routes";

const App = () => (
  <div className="App">
    <Router history={history}>
      <Header />
      <Switch>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} component={route.component} />
        ))}
      </Switch>
    </Router>
  </div>
);

export default App;
