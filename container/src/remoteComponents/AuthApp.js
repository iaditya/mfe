import React, { useRef, useEffect } from "react";

import { mount } from "auth/Auth";
import { useHistory } from "react-router-dom";

export default ({ onSignedIn }) => {
  const elem = useRef(null);
  const history = useHistory(); //This is browser history

  useEffect(() => {
    const { onParentNavigate } = mount(elem.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        console.log("Auth App  navigates", nextPathname);
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      onSignIn: () => {
        onSignedIn();
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={elem}></div>;
};
