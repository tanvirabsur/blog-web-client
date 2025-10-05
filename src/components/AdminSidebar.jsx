import React, { useState } from 'react';
import { Home, Users, Settings, BarChart, LogOut, Menu } from 'lucide-react';

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    { id: 1, name: 'Dashboard', icon: <Home size={20} />, link: '#' },
    { id: 2, name: 'Users', icon: <Users size={20} />, link: '#' },
    { id: 3, name: 'Analytics', icon: <BarChart size={20} />, link: '#' },
    { id: 4, name: 'Settings', icon: <Settings size={20} />, link: '#' },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`$ {
          isOpen ? 'w-64' : 'w-20'
        } bg-gray-900 text-white min-h-screen transition-all duration-300 flex flex-col justify-between`}
      >
        <div>
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
            <h1 className={`text-xl font-bold ${!isOpen && 'hidden'}`}>Admin</h1>
            <button onClick={toggleSidebar} className="text-gray-400 hover:text-white">
              <Menu size={20} />
            </button>
          </div>

          <ul className="mt-6 space-y-1">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-800 transition-colors"
                >
                  {item.icon}
                  <span className={`${!isOpen && 'hidden'} text-sm font-medium`}>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-gray-800 px-4 py-3">
          <button className="flex items-center gap-3 text-red-400 hover:text-red-500 w-full">
            <LogOut size={20} />
            <span className={`${!isOpen && 'hidden'} text-sm font-medium`}>Logout</span>
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default AdminSidebar;