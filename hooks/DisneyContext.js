
import { useState } from "react";
import React from "react";

const DisneyContext = React.createContext([{}, () => {}]);

const DisneyProvider = (props) => {
  const [state, setState] = useState({
    historial: [],
    favoritos: [],
  });
  return (
    <DisneyContext.Provider value={[state, setState]}>
      {props.children}
    </DisneyContext.Provider>
  );
};

export { DisneyContext, DisneyProvider };