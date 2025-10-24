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
import MyProfile from '../Pages/MyProfile';
import UpdateProfile from '../Pages/UpdateProfile';
import PublicRoute from '../Provider/PublicRoute';
import ForgetPassword from '../Pages/ForgetPassword';

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
                element:<PublicRoute>
                    <Login></Login>
                </PublicRoute>
            },
            {
                path:"/register",
                element:<PublicRoute>
                    <Register></Register>
                </PublicRoute>
            },
            {
                path:"/gamedetails/:id",
                loader:()=>fetch("/data.json"),
                element:<PrivateRoute>
                    <GameDetails></GameDetails>
                </PrivateRoute>
            },
            {
                path:"/profile",
                element:<PrivateRoute>
                    <MyProfile></MyProfile>
                </PrivateRoute>
            },
            {
                path:"/updateprofile",
                element:<PrivateRoute>
                    <UpdateProfile></UpdateProfile>
                </PrivateRoute>
            },
            {
                path:"/forgotpassword",
                element:<PublicRoute>
                    <ForgetPassword></ForgetPassword>
                </PublicRoute>
            },
            {
                path:"*",
                Component:ErrorPage
            }
        ]
    }
]);

export default router;