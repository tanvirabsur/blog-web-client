import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import { Outlet } from 'react-router';

const AdminLayout = () => {
    return (
        <div className='flex min-h-screen'>
            <AdminSidebar />
            {/* Main content area */}
            <main className="flex-1">
                <Outlet />
            </main>
            
        </div>
    );
};

export default AdminLayout;