import React from 'react';
import BlogCard from '../components/BlogCard';
import useFetch from '../hooks/useFetch';

const Home = () => {
    const {data,err} = useFetch('/Blogs.json')
    console.log(data,err);
    if(!data) return <div>Loading...</div>
    if(err) return <div>Error: {err.message}</div>
    return (
        <main className="flex-1">
            {
                data.map(blog => <BlogCard key={blog.id} blog={blog} />)
            }
        </main>
    );
};

export default Home;