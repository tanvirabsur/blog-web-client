import React from 'react';
import { NavLink } from 'react-router';

// BlogCardGrid.jsx - Responsive cards based on your skinshot. Uses TailwindCSS.

// const fakePosts = [
//   {
//     id: 1,
//     title: 'Custom Software Development Company in Bangladesh',
//     category: 'Software Development',
//     excerpt:
//       'How We Use Thought Of New Logistics Company In Bangladesh — Delivering Value Through Bespoke Software Solutions.',
//     image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=60',
//     author: 'Jane Doe',
//     date: 'Aug 30, 2025',
//     readTime: '6 min',
//   },
//   {
//     id: 2,
//     title: 'Mastering Node.JS Error Handling Practices (Part-2)',
//     category: 'Backend',
//     excerpt: 'It Is Hard To Find That Some People Are Struggling To Handle Errors. Here Are Some Tips.',
//     image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=60',
//     author: 'John Smith',
//     date: 'Sep 10, 2025',
//     readTime: '8 min',
//   },
//   {
//     id: 3,
//     title: 'What Is The Software Development Life Cycle? (SDLC)',
//     category: 'SDLC',
//     excerpt: 'Get Familiar With The Phases—Planning, Analysis, Design, Implementation, Testing And Maintenance.',
//     image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=60',
//     author: 'Alex Turner',
//     date: 'Jul 18, 2025',
//     readTime: '5 min',
//   },
//   {
//     id: 4,
//     title: 'How Much Does It Cost To Build An MVP In 2025?',
//     category: 'Business',
//     excerpt: 'An Honest Look Into The Typical Cost Drivers For Early-stage Product Development.',
//     image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=60',
//     author: 'Priya Patel',
//     date: 'Jun 02, 2025',
//     readTime: '7 min',
//   },
//   {
//     id: 5,
//     title: 'What Is MVP In Software Development?',
//     category: 'MVP',
//     excerpt: 'A Minimal Viable Product Helps You Validate Market Assumptions Fast.',
//     image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=60',
//     author: 'Lee Wong',
//     date: 'May 21, 2025',
//     readTime: '4 min',
//   },
//   {
//     id: 6,
//     title: 'Top 20 Web Design And Development Companies In Bangladesh',
//     category: 'Design',
//     excerpt: 'Companies That Have Shaped The Digital Landscape — Sorted By Portfolio And Services.',
//     image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=60',
//     author: 'Sara Khan',
//     date: 'Apr 11, 2025',
//     readTime: '12 min',
//   },
//   {
//     id: 7,
//     title: 'AI In Mobile App Development',
//     category: 'AI',
//     excerpt: 'How Artificial Intelligence Is Changing The Way We Build Mobile Experiences.',
//     image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=60',
//     author: 'Dev Team',
//     date: 'Mar 03, 2025',
//     readTime: '6 min',
//   },
//   {
//     id: 8,
//     title: 'Why Mobile Apps Are Important For Your Business',
//     category: 'Mobile App Development',
//     excerpt: 'Mobile Apps Increase Engagement — Here Are The Strategic Reasons To Invest.',
//     image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=60',
//     author: 'Marketing Lab',
//     date: 'Jan 19, 2025',
//     readTime: '3 min',
//   },
// ];
// ${
//                 id === 0 ? 'ring-2 ring-dashed ring-blue-600' : ''
//               }`
export default function BlogCard({post}) {
  return (
  
            <article
            
              className={`bg-[#0b0b1a] rounded-xl overflow-hidden shadow-md transform hover:scale-[1.01] transition-all duration-200 border border-transparent `}
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-3 left-3 bg-black/60 text-xs px-2 py-1 rounded">
                  {post.category}
                </span>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center text-sm">
                      {post.author.split(' ').map(n => n[0]).slice(0,2).join('')}
                    </div>
                    <div>
                      <div className="text-[13px]">{post.author}</div>
                      <div className="text-[11px]">{post.date} · {post.readTime}</div>
                    </div>
                  </div>

                 <NavLink to={`blog/${post.id}`}  className="text-xs px-3 py-1 border border-gray-700 rounded hover:bg-white/5">
                 Read
                 </NavLink>
                </div>
              </div>
            </article>
      
  );
}

