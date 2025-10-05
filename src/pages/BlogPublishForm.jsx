import React, { useState } from 'react';
import { Upload, X, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, List, ListOrdered, Link, Image, Code, CirclePlus, PencilLine, Shell, Settings, Trash2, ArrowLeft } from 'lucide-react';
import { NavLink } from 'react-router';

export default function BlogPublishForm() {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
//   const [categories, setCategories] = useState([]);
  const [author, setAuthor] = useState('');
  const [summary, setSummary] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
//   const [activeVersion, setActiveVersion] = useState('editing');

  const handleAddTag = (e) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const versions = [
    { id: 1, label: 'Editing Draft Version', date: '8 seconds ago', active: true },
    { id: 2, label: 'Created', date: '8 seconds ago' },
    { id: 3, label: 'By', author: 'claude-full-team' },
    { id: 4, label: 'Last Update', date: '8 seconds ago' },
    { id: 5, label: 'By', author: 'claude-full-team' }
  ];

  const modelActions = [
    { icon: <PencilLine size={20} />, label: 'Edit The Model', color: 'bg-purple-100 border-purple-300' },
    { icon: <Settings size={20}/>, label: 'Configure The Line', color: 'bg-blue-100 border-blue-300' },
    { icon: <Trash2 size={20} />, label: 'Delete The Entry', color: 'bg-orange-100 border-orange-300' }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <NavLink className="text-purple-600 mb-2 flex items-center gap-1">
            <ArrowLeft size={20} /> Back
          </NavLink>
      
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Title - 3077270958</h1>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded bg-white text-gray-700 flex items-center gap-2">
                <CirclePlus size={20}/> Publish
              </button>
              <button className="px-4 py-2 bg-green-500 text-white rounded">
                Save
              </button>
            </div>
          </div>
          <div className="flex gap-2 mt-2 text-sm text-gray-600">
            <span className="bg-gray-200 px-2 py-1 rounded">📄 Draft</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Form */}
          <div className="lg:col-span-2 space-y-4">
            {/* Title */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <label className="block text-sm font-medium mb-2">Title*</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Enter blog title"
              />
            </div>

            {/* Image Upload */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <label className="block text-sm font-medium mb-2">Image</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                {uploadedImage ? (
                  <div className="relative">
                    <img src={uploadedImage} alt="Upload preview" className="max-h-48 mx-auto rounded" />
                    <button
                      onClick={() => setUploadedImage(null)}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <>
                    <Upload className="mx-auto mb-2 text-purple-600" size={32} />
                    <p className="text-sm text-gray-600 mb-1">
                      Drop file here or click to upload
                    </p>
                    <p className="text-xs text-gray-400 mb-3">
                      svg/png/jpg/gif supported, 10 Mb max
                    </p>
                    <div className="flex justify-center gap-2">
                      <label className="px-4 py-2 bg-purple-600 text-white rounded cursor-pointer text-sm">
                        FILE
                        <input
                          type="file"
                          onChange={handleImageUpload}
                          accept="image/*"
                          className="hidden"
                        />
                      </label>
                      <button className="px-4 py-2 border border-gray-300 rounded text-sm">
                        LINK
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Slug and Tags */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <label className="block text-sm font-medium mb-2">Publish_url</label>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="3X/X3X0"
                className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
              />

              <label className="block text-sm font-medium mb-2">Tags*</label>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-green-400 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  New
                  <button onClick={() => {}} className="hover:bg-green-500 rounded-full">
                    <X size={14} />
                  </button>
                </span>
                {tags.map((tag, index) => (
                  <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    {tag}
                    <button onClick={() => handleRemoveTag(tag)} className="hover:bg-gray-300 rounded-full">
                      <X size={14} />
                    </button>
                  </span>
                ))}
              </div>
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleAddTag}
                placeholder="Add a Tag"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            {/* Categories */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <label className="block text-sm font-medium mb-2">Category*</label>
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-gray-300 rounded text-sm">
                  All
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded text-sm">
                  #foodCart
                </button>
              </div>
            </div>

            {/* Author */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <label className="block text-sm font-medium mb-2">Authors*</label>
              <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option value="">Claude-Xt Team</option>
                <option value="admin">Admin</option>
                <option value="editor">Editor</option>
              </select>
            </div>

            {/* Summary */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <label className="block text-sm font-medium mb-2">Summary*</label>
              <textarea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 h-20"
                placeholder="Enter summary"
              />
            </div>

            {/* Meta Description */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <label className="block text-sm font-medium mb-2">Meta-Description</label>
              <textarea
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 h-20"
                placeholder="Description"
              />
            </div>

            {/* Blog Content */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <label className="block text-sm font-medium mb-2">Blog Content*</label>
              
              {/* Toolbar */}
              <div className="border border-gray-300 rounded-t px-2 py-2 flex gap-1 bg-gray-50">
                <select className="text-sm border-0 bg-transparent">
                  <option>p</option>
                  <option>H1</option>
                  <option>H2</option>
                  <option>H3</option>
                </select>
                <div className="border-l mx-1"></div>
                <button className="p-1 hover:bg-gray-200 rounded"><Bold size={16} /></button>
                <button className="p-1 hover:bg-gray-200 rounded"><Italic size={16} /></button>
                <button className="p-1 hover:bg-gray-200 rounded"><Underline size={16} /></button>
                <div className="border-l mx-1"></div>
                <button className="p-1 hover:bg-gray-200 rounded"><AlignLeft size={16} /></button>
                <button className="p-1 hover:bg-gray-200 rounded"><AlignCenter size={16} /></button>
                <button className="p-1 hover:bg-gray-200 rounded"><AlignRight size={16} /></button>
                <div className="border-l mx-1"></div>
                <button className="p-1 hover:bg-gray-200 rounded"><List size={16} /></button>
                <button className="p-1 hover:bg-gray-200 rounded"><ListOrdered size={16} /></button>
                <div className="border-l mx-1"></div>
                <button className="p-1 hover:bg-gray-200 rounded"><Link size={16} /></button>
                <button className="p-1 hover:bg-gray-200 rounded"><Image size={16} /></button>
                <button className="p-1 hover:bg-gray-200 rounded"><Code size={16} /></button>
              </div>
              
              <textarea
                value={blogContent}
                onChange={(e) => setBlogContent(e.target.value)}
                className="w-full border border-gray-300 rounded-b px-3 py-2 h-40 border-t-0"
                placeholder="Write your blog content here..."
              />
            </div>
          </div>

          {/* Right Column - Versions & Actions */}
          <div className="space-y-4">
            {/* Versions */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-medium mb-3"><Shell /> Editing Draft Version</h3>
              <div className="space-y-2 text-sm">
                {versions.map((version) => (
                  <div key={version.id} className="flex justify-between py-1">
                    <span className="text-gray-600">{version.label}</span>
                    <span className="text-gray-500">
                      {version.date || version.author}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2">
              {modelActions.map((action, index) => (
                <button
                  key={index}
                  className={`w-full ${action.color} border-2 rounded-lg p-3 text-left flex items-center gap-2`}
                >
                  <span>{action.icon}</span>
                  <span className="text-sm font-medium">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}