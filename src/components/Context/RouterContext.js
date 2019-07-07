import React from "react";

const { Provider, Consumer } = React.createContext({
    pathname: ""
});

export { Consumer as RouterContextConsumer, Provider as RouterContextProvider };
