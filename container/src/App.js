import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import Header from "./components/Header";
import Progress from "./components/Progress";

const MarketingLazy = lazy(() => import("./remoteComponents/MarketingApp"));
const AuthLazy = lazy(() => import("./remoteComponents/AuthApp"));

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const generateClassName = createGenerateClassName({
    productionPrefix: "co",
  });

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header signedIn={isSignedIn} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth" component={AuthLazy}>
                <AuthLazy onSignedIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
