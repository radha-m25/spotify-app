import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SingUp';
import SongList from './components/SongList';

const AppRouter = createBrowserRouter ([
  {
    path: "/",
    element: <SignUp/>
  },
  {
    path: '/home',
    element: <App/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/songs/:name",
    element: <SongList/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={AppRouter}></RouterProvider>
  </React.StrictMode>
);
