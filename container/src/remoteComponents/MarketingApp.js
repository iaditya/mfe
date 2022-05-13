import React, { useRef, useEffect } from "react";

import { mount } from "marketing/Marketing";

console.log(mount);

export default () => {
  const elem = useRef(null);

  useEffect(() => {
    mount(elem.current);
  }, []);

  return <div ref={elem}></div>;
};
