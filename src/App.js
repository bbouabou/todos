import React from 'react';
import {Provider as StoreProvider} from 'react-redux'
import {store} from "./redux/store";
import {Todos} from "./component/Todos";

const App = () => <Todos/>;

const Provider = () => (
  <StoreProvider store={store}>
    <App/>
  </StoreProvider>
);
export default Provider;
