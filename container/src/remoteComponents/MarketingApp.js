import React, { useRef, useEffect } from "react";

import { mount } from "marketing/Marketing";
import { useHistory } from "react-router-dom";

export default () => {
  const elem = useRef(null);
  const history = useHistory(); //This is browser history

  useEffect(() => {
    const { onParentNavigate } = mount(elem.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        console.log("child navigates", nextPathname);
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={elem}></div>;
};
