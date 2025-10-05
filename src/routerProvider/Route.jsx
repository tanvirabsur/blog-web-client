import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import Home from '../pages/Home';
import BlogDetails from '../pages/BlogDetailes';

const Route = createBrowserRouter([
    {
        path:'/',
        Component: App,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/blog/:id',
                Component: BlogDetails
            }
        ]
    }
])

export default Route;