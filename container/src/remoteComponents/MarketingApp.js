import React, { useRef, useEffect } from "react";

import { mount } from "marketing/Marketing";
import { useHistory } from "react-router-dom";

export default () => {
  const elem = useRef(null);
  const history = useHistory(); //This is browser history

  useEffect(() => {
    mount(elem.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });
  }, []);

  return <div ref={elem}></div>;
};
