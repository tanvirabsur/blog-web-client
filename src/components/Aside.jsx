import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
const categories = [
    'All Categories', 'AI', 'AR/VR', 'Blockchain', 'Business', 'Data Engineering', 'Design', 'DevOps', 'Gadgets', 'JavaScript', 'Mobile App Development', 'MVP', 'Programming & Development', 'React', 'Software Development', 'Startups', 'Technology', 'Web'
];

const Aside = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="flex md:hidden items-center justify-between border-b p-3 border-gray-800">
                <h1 className="text-lg font-semibold">Resources and insights</h1>
                <button onClick={() => setIsOpen(!isOpen)} className=" focus:outline-none cursor-pointer">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            <aside
                className={`fixed md:static top-0 left-0 z-20 w-64 bg-[#14143a] transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:translate-x-0 transition-transform duration-300 ease-in-out h-full md:h-auto md:min-h-screen p-6`}
            >
                <input
                    type="text"
                    placeholder="🔍 Search"
                    className="w-full p-2 rounded-lg text-black mb-4"
                />

                <h2 className="text-sm uppercase tracking-wide text-gray-400 mb-3">Blog Categories</h2>
                <ul className="space-y-2">
                    {categories.map((category, index) => (
                        <li
                            key={index}
                            className="cursor-pointer text-white hover:text-blue-400 transition-colors text-sm"
                        >
                            {category}
                        </li>
                    ))}
                </ul>
                {isOpen && (
                    <div
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black opacity-40 md:hidden"
                    ></div>
                )}
            </aside></>
    );
};

export default Aside;