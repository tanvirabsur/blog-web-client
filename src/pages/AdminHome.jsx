import React, { useState } from 'react';
import { Search, Bell, Edit, Trash2 } from 'lucide-react';

export default function AdminHome() {
  const [posts] = useState([
    { id: 1, title: 'How AI Is Changing The Future Of Travel', status: 'Published', views: 4532, date: 'February 15, 2015', author: 'Marvin McKinney' },
    { id: 2, title: '10 Easy Vegan Recipes For Busy People', status: 'Draft', views: 4532, date: 'November 7, 2017', author: 'Theresa Webb' },
    { id: 3, title: 'Best Budget Destinations For 2025', status: 'Draft', views: 4532, date: 'March 28, 2013', author: 'Jane Cooper' },
    { id: 4, title: '10 Easy Vegan Recipes For Busy People', status: 'Published', views: 4532, date: 'May 31, 2015', author: 'Robert Fox' },
    { id: 5, title: 'Best Budget Destinations For 2025', status: 'Scheduled', views: 4532, date: 'May 6, 2012', author: 'Darrel Steward' },
    { id: 6, title: 'Best Budget Destinations For 2025', status: 'Published', views: 4532, date: 'December 19, 2015', author: 'Wade Warren' },
    { id: 7, title: '10 Easy Vegan Recipes For Busy People', status: 'Draft', views: 4532, date: 'February 15, 2014', author: 'Annette Black' },
    { id: 8, title: 'Best Budget Destinations For 2025', status: 'Scheduled', views: 4532, date: 'May 31, 2015', author: 'Leslie Alexander' }
  ]);

  const getStatusColor = (status) => {
    switch(status) {
      case 'Published': return 'text-green-600 bg-green-50';
      case 'Draft': return 'text-blue-600 bg-blue-50';
      case 'Scheduled': return 'text-orange-600 bg-orange-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="font-bold text-xl">Newsx</span>
            </div>
            <nav className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-900 font-medium border-b-2 border-purple-600 pb-4">Dashboard</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Bell size={20} className="text-gray-600" />
            </button>
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">TB</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-purple-100 to-purple-50 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Good Morning !</p>
              <h1 className="text-2xl font-bold text-gray-900">Tylor Break</h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">📊</span>
              </div>
              <div>
                <p className="text-xs text-gray-600">Total Posts</p>
                <p className="text-2xl font-bold">128</p>
                <p className="text-xs text-gray-500">Lifetime</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Posts Section */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="px-6 py-4 border-b">
            <h2 className="text-lg font-semibold">Recent Posts</h2>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b text-left text-sm text-gray-600">
                  <th className="px-6 py-3 font-medium">S/N</th>
                  <th className="px-6 py-3 font-medium">Title</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                  <th className="px-6 py-3 font-medium">Views</th>
                  <th className="px-6 py-3 font-medium">Date Published</th>
                  <th className="px-6 py-3 font-medium">Author</th>
                  <th className="px-6 py-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id} className="border-b border-gray-300 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {String(post.id).padStart(2, '0')}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {post.title}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(post.status)}`}>
                        {post.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {post.views.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {post.date}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {post.author}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded text-gray-400 hover:text-blue-600">
                          <Edit size={16} />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded text-gray-400 hover:text-red-600">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}