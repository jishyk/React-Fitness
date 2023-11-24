import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import Home from './src/pages/Home.jsx'
import Error from './src/pages/Error.jsx'
import CreateAccount from './src/pages/CreateAccount.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        // need to change to login page later once set 
        index: true,
        element: <Home />,
      },
      {
        // need to change to login page later once set 
        path: '/create-account',
        element: <CreateAccount />,
      },
    //   {
    //     path: 'home',
    //     element: <Home />,
    //   },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
