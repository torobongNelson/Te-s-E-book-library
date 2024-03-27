// import { useState } from 'react';
// import './App.css';
// import {Route} from "./Route";
// // import {useRoute} from "react-router-dom";

// import { BrowserRouter, Router } from "react-router-dom"; 


// // const Route = require("./Route/index")
// // const useRoute = require("react-router-dom")

// function App() {
//   return useState([Route])
//     // BrowserRouter(Route)

// }


// export default App;

import { ROUTE } from './Route';

import {useRoutes } from 'react-router-dom';
import './App.css';

function App() {
  return useRoutes([ROUTE]); 
}

export default App;
