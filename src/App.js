import React, { Component } from 'react';
import './App.css';

import Home from "./pages/pages/Home";
import Rooms from "./pages/pages/Rooms";
import SingleRoom from "./pages/pages/SingleRoomPage";
import Error from "./pages/pages/Error";

function App() {
  return (
    <div>
      <Home></Home>
      <Rooms></Rooms>
      <SingleRoom></SingleRoom>
      <Error></Error>
    </div>
  )
}

export default App;
