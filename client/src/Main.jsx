import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Error from './pages/Error.jsx'
import CreateAccount from './pages/CreateAccount.jsx';
import AddWork from './pages/AddWork.jsx';
import Journal from './pages/Journal.jsx';

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
        // 'pseudo-URL for the createAccount page'
        path: '/create-account',
        element: <CreateAccount />,
      },
      {
        path: '/add-work',
        element: <AddWork />,
      },
      {
        path: '/journal',
        element: <Journal />,
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
