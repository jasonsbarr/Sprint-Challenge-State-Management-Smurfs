import React, { useReducer, useMemo } from "react";

const SmurfProvider = ({ smurfReducer, smurfContext, children }) => {
  const [smurfs, dispatch] = useReducer(smurfReducer, smurfContext);

  const smurfStore = useMemo(() => [smurfs, dispatch], [smurfs]);

  return (
    <smurfContext.Provider reducer={smurfReducer} value={smurfStore}>
      {children}
    </smurfContext.Provider>
  );
};

export { SmurfProvider };
