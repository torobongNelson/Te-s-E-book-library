// import signUp from "../auth/signUp";
// import loginPage from "../Features/LoginPage";

import Features from "../Features";
import Pages from "../Features/Pages";



// const Route = [

//     {
//         path: "/",
//         element: <signUp/>
//     }

// ]

// export default Route;

export const ROUTE = {
    path: "/",
    element: <Features/>,
    children: [
      {
        path: "/",
        element: <Pages/>
      }
    ]
  };
  

