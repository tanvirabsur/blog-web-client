import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import Home from '../pages/Home';
import BlogDetails from '../pages/BlogDetailes';
import AdminLogin from '../pages/AdminLogin';
import AdminLayout from '../pages/AdminLayout';
import BlogPublishForm from '../pages/BlogPublishForm';
import AdminHome from '../pages/AdminHome';
import BlogDetailPage from '../pages/DetailesPage';

const Route = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/blog/:id',
                Component: BlogDetails
            },
            {
                path: '/dev',
                Component: BlogDetailPage
            }
        ]
    },

    {
        path: '/admin-panal',
        Component: AdminLayout,
        children: [
            {
                index: true,
                Component: AdminHome
            },
            {
                path: 'upload-blog',
                Component: BlogPublishForm
            }
        ]

    },
    {
        path: '/admin-login',
        Component: AdminLogin
    },


])

export default Route;