import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import CakeContainer from "../src/components/CakeContainer";
import HooksCakeContainer from "../src/components/HooksCakeContainer";
import IceCreamContainer from "../src/components/IceCreamContainer";
import HooksIceCreamContainer from "../src/components/HooksIceCreamContainer";
import NewCakeContainer from "../src/components/NewCakeContainer";
import Users from "../src/components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <HooksIceCreamContainer />
        <NewCakeContainer />
        <Users/>
      </div>
    </Provider>
  );
}

export default App;
