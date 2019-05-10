import React from 'react';
import './App.css';

import Home from "./pages/pages/Home";
import Rooms from "./pages/pages/Rooms";
import SingleRoom from "./pages/pages/SingleRoomPage";
import Error from "./pages/pages/Error";

import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />

        <Route component={Error} />
      </Switch>
    </div>
  )
}

export default App;
