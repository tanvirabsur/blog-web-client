import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import Home from '../pages/Home';

const Route = createBrowserRouter([
    {
        path:'/',
        Component: App,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    }
])

export default Route;