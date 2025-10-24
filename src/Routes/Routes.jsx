import React, { Component } from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../Layouts/RootLayout';
import Home from '../Pages/Home';
import ErrorPage from '../Pages/ErrorPage';
import Apps from '../Pages/Apps';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import GameDetails from '../Pages/GameDetails';
import PrivateRoute from '../Provider/PrivateRoute';

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
                Component:Apps,
                loader:()=>fetch('/data.json'),
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
                path:"/gamedetails/:id",
                loader:()=>fetch("/data.json"),
                element:<PrivateRoute>
                    <GameDetails></GameDetails>
                </PrivateRoute>
            },
            {
                path:"*",
                Component:ErrorPage
            }
        ]
    }
]);

export default router;