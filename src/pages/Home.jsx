import React from 'react';
import BlogCard from '../components/BlogCard';
import useFetch from '../hooks/useFetch';

const Home = () => {
    const { data, err } = useFetch('/Blogs.json')
    console.log(data, err);
    if (!data) return <div>Loading...</div>
    if (err) return <div>Error: {err.message}</div>
    return (
        <main className="flex-1">
            <div className="min-h-screen bg-[#0f0f2b] text-white p-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-semibold mb-6">Resources and insights</h1>

                    {/* grid: 1 col on mobile, 2 on md, 3 on lg */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                        {
                            data.map(blog => <BlogCard key={blog.id} post={blog} />)
                        }
                    </div>
                </div>
            </div>

        </main>
    );
};

export default Home;