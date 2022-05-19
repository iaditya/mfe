import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import SignIn from "./components/Signin";
import Signup from "./components/Signup";

export default ({ history }) => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "au",
  });

  return (
    <div>
      <p>Auth</p>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin" component={SignIn}></Route>
            <Route path="/auth/signup" component={Signup}></Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
