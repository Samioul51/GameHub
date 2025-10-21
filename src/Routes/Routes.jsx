import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../Layouts/RootLayout';
import Home from '../Components/Home';
import ErrorPage from '../Pages/ErrorPage';
import Apps from '../Pages/Apps';
import Installations from '../Pages/Installations';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

const router =createBrowserRouter([
    {
        path:"/",
        element:<RootLayout/>,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:"/home",
                Component:Home
            },
            {
                path:"/apps",
                Component:Apps
            },
            {
                path:"/installations",
                Component:Installations
            },
            {
                path:"/login",
                Component:Login
            },
            {
                path:"/register",
                Component:Register
            },
            {
                path:"*",
                Component:ErrorPage
            }
        ]
    }
]);

export default router;