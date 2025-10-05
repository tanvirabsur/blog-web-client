import React from 'react';
import { useParams, Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import useFetch from '../hooks/useFetch';

// Import your fake data

const BlogDetails = () => {
    const { id } = useParams();

    const { data } = useFetch('/Blogs.json')
    const post = data?.find((p) => p.id === parseInt(id));

    if (!post) {
        return (
            <div className="max-w-3xl mx-auto p-4">
                <p className="text-center text-gray-500">Post not found.</p>
                <Link to="/" className="text-blue-600 hover:underline flex items-center gap-2 justify-center mt-3">
                    <ArrowLeft size={16} /> Go Back
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-6">
            <div className="mb-6">
                <Link to="/" className="text-blue-600 hover:underline flex items-center gap-2 mb-4">
                    <ArrowLeft size={16} /> Back to Blogs
                </Link>
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-md"
                />
            </div>

            <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                    </span>
                    <span>{post.date}</span>
                    <span>• {post.readTime} read</span>
                    <span>• By {post.author}</span>
                </div>

                <div className="text-gray-700 leading-relaxed mt-6 space-y-4">
                    <p>
                        {post.excerpt} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lorem
                        sit amet turpis cursus efficitur. Curabitur ut elit vel justo ultrices mattis. Nulla
                        facilisi. Vestibulum sit amet nibh at nulla eleifend sagittis.
                    </p>
                    <p>
                        Integer ut lacus id libero dictum imperdiet. Suspendisse potenti. Sed sed eros sed odio
                        feugiat dapibus. Duis a nisl eget nunc tristique feugiat. Cras porttitor odio ac nibh
                        convallis volutpat. Donec posuere lectus a risus tristique, sit amet aliquam odio
                        volutpat.
                    </p>
                    <p>
                        Quisque suscipit, nulla vitae vehicula dapibus, odio justo interdum mauris, vitae
                        elementum sapien libero ac justo. Suspendisse ac facilisis urna. Sed at sem ac elit
                        mattis tincidunt.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
