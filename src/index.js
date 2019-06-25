import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
/* import './index.css';*/

import { BrowserRouter as Router} from "react-router-dom";
import { RoomProvider } from "./context";


// console.log("RoomProvider", <RoomProvider></RoomProvider>);

ReactDOM.render(

  <RoomProvider>
    <Router>
      <App />
    </Router>
  </RoomProvider>
  ,
  document.getElementById('root')
);
