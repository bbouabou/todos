import React from 'react';
import {Provider as StoreProvider} from 'react-redux'
import {store} from "./redux/store";
import {Todos} from "./component/Todos";

const App = () => (
  <div style={{ width:"500px",position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}>
    <Todos/>
  </div>);

const Provider = () => (
  <StoreProvider store={store}>
    <App/>
  </StoreProvider>
);
export default Provider;
