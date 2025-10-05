import React from 'react';
import { Share2, Bookmark, ChevronLeft, ChevronRight, Facebook, Twitter } from 'lucide-react';

export default function BlogDetailPage() {
  const relatedPosts = [
    {
      id: 1,
      title: "Top 10 Graphic Software Development Companies (SAAS)",
      description: "Top 10 Graphic Software Development Companies - Explore the leading graphic software development companies...",
      image: "🎨"
    },
    {
      id: 2,
      title: "What is The Software Development In Dubai (SAAS)",
      description: "What is The Software Development In Dubai - Discover the software development landscape in Dubai...",
      image: "🏙️"
    },
    {
      id: 3,
      title: "What is ERP Software ? (SAAS)",
      description: "What is ERP Software - Learn about Enterprise Resource Planning software and its benefits...",
      image: "📊"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <div className="text-sm text-gray-500 mb-4">
          Home → Software Development → Custom Software Development Company in Bangladesh
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-6 pb-12">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm mb-4">
            Frame Structure
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Custom Software Development Company in Bangladesh
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            In the wake of rapid technological advancement globally, Bangladesh is emerging as...
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <span>📅 December 15, 2024</span>
            <span>•</span>
            <span>👤 By Admin</span>
            <span>•</span>
            <span>⏱️ 5 min read</span>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="relative mb-12">
          <div className="bg-gradient-to-br from-purple-400 via-blue-400 to-blue-300 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute top-4 left-8 text-white text-sm">Featured</div>
            <div className="absolute top-4 right-8 text-white text-sm">Services</div>
            
            <div className="relative z-10 mb-8">
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-3xl p-8">
                <svg className="w-32 h-32 text-white" viewBox="0 0 100 100" fill="none">
                  <path d="M20 30L35 15L35 85L20 70M80 70L65 85L65 15L80 30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M40 40L45 35L45 65L40 60M60 60L55 65L55 35L60 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <div className="flex justify-center gap-3 mb-4">
              <span className="bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                UI Needs
              </span>
              <span className="bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                Software
              </span>
            </div>

            <button className="bg-white text-gray-800 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition">
              Back-End
            </button>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span>📑</span> Table Of Contents
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">→</span>
              <a href="#intro" className="text-gray-600 hover:text-blue-600">Introduction</a>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">→</span>
              <a href="#what-is" className="text-gray-600 hover:text-blue-600">What is a custom software development company?</a>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">→</span>
              <a href="#best" className="text-gray-600 hover:text-blue-600">Best Custom Software Development Company in Bangladesh</a>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">→</span>
              <a href="#whats-best" className="text-gray-600 hover:text-blue-600">What's Best About Dcastalia?</a>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">→</span>
              <a href="#services" className="text-gray-600 hover:text-blue-600">Services Offered</a>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">→</span>
              <a href="#conclusion" className="text-gray-600 hover:text-blue-600">Conclusion</a>
            </li>
          </ul>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div id="intro" className="mb-12">
            <p className="text-gray-700 leading-relaxed mb-4">
              In the wake of rapid technological advancement globally, Bangladesh is emerging as a noteworthy player in the realm of custom software development. As businesses across the globe seek to digitize their operations and stay competitive, the demand for bespoke software solutions tailored to specific needs has skyrocketed. This surge in demand has opened up vast opportunities for software development companies in Bangladesh.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Whether for a small startup or a large enterprise, partnering with a custom software development company can be the difference between staying ahead in the race and lagging behind competitors. With a skilled workforce and cost-effective solutions, Bangladesh has become a go-to destination for businesses looking to leverage technology.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This article explores what makes Bangladesh an ideal location for custom software development and highlights why Dcastalia stands out as the best choice for businesses seeking reliable and innovative software solutions.
            </p>
          </div>

          {/* Share Section */}
          <div className="flex items-center gap-4 mb-8 pb-6 border-b">
            <span className="text-gray-600 text-sm">Share on:</span>
            <div className="flex gap-3">
              <button className="w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white text-xs">
                f
              </button>
              <button className="w-8 h-8 rounded-full bg-blue-400 hover:bg-blue-500 flex items-center justify-center text-white text-xs">
                t
              </button>
              <button className="w-8 h-8 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center text-white text-xs">
                p
              </button>
              <button className="w-8 h-8 rounded-full bg-blue-700 hover:bg-blue-800 flex items-center justify-center text-white text-xs">
                in
              </button>
            </div>
          </div>

          {/* What is Custom Software Development */}
          <section id="what-is" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What is a custom software development company?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A custom software development company is a specialized firm that creates software solutions tailored to a client's unique business requirements. Unlike off-the-shelf software, which offers generic features that might not align perfectly with specific needs, custom software is designed from the ground up to address a company's individual challenges and goals.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              These companies employ software developers, designers, project managers, and quality assurance professionals who work collaboratively to bring custom software ideas to life. Whether it's a web application, mobile app, enterprise software, or any other digital solution, these companies are equipped to handle projects of varying complexity and scope.
            </p>
            
            {/* Info Box */}
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-2xl p-6 my-6">
              <h3 className="font-semibold text-gray-900 mb-3">Key Benefits of Custom Software:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Tailored to specific business needs and workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Scalable and flexible for future growth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Better integration with existing systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Enhanced security and data protection</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Custom software solutions offer flexibility, scalability, and integration capabilities that generic software often lacks. They can be designed to grow with your business, adapt to changing requirements, and integrate seamlessly with your existing infrastructure.
            </p>
          </section>

          {/* Image Section 1 */}
          <div className="my-12 rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-8 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <div className="text-7xl mb-4">💻</div>
                <p className="text-gray-700 font-medium">Software Development Team at Work</p>
              </div>
            </div>
          </div>

          {/* Best Company Section */}
          <section id="best" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Best Custom Software Development Company in Bangladesh - Dcastalia
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              When it comes to choosing the best custom software development company in Bangladesh, Dcastalia stands out as a premier choice. With years of experience delivering high-quality, innovative software solutions, Dcastalia has built a reputation for excellence in the industry.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Dcastalia offers end-to-end software development services, from ideation and design to development, deployment, and maintenance. Their team comprises highly skilled developers who are proficient in the latest technologies and frameworks including React, Node.js, Python, Java, and cloud platforms like AWS and Azure.
            </p>

            {/* Image Section 2 */}
            <div className="my-8 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <div className="text-7xl mb-4">🏢</div>
                  <p className="text-gray-700 font-medium">Dcastalia Office Building</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              The company has successfully delivered projects for clients ranging from startups to Fortune 500 companies across various industries including healthcare, finance, e-commerce, education, and logistics.
            </p>
          </section>

          {/* Image Section 3 */}
          <div className="my-12 rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <div className="text-7xl mb-4">🎯</div>
                <p className="text-gray-700 font-medium">Agile Development Process</p>
              </div>
            </div>
          </div>

          {/* What's Best Section */}
          <section id="whats-best" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What's Best About Dcastalia?
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  1. Experienced Team
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Dcastalia's team brings extensive experience in handling complex projects across various industries. Their developers stay updated with the latest technologies and best practices to deliver cutting-edge solutions. The team includes certified professionals with expertise in modern development frameworks, cloud architecture, and DevOps practices.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  2. Tailored Solutions
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Every project is unique, and Dcastalia understands this. They work closely with clients to understand their specific needs and develop custom software that aligns perfectly with business objectives. Their consultative approach ensures that the final product not only meets but exceeds expectations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  3. Cost-Effective Services
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Bangladesh offers competitive pricing without compromising on quality. Dcastalia provides affordable solutions that deliver excellent value for money, making them an ideal choice for businesses of all sizes. Their transparent pricing model ensures no hidden costs or surprise charges.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  4. Agile Methodology
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Dcastalia follows agile development practices, ensuring faster delivery, better collaboration, and flexibility to adapt to changing requirements. Regular sprint reviews and continuous client communication keep projects on track and aligned with business goals.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  5. Post-Launch Support
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The relationship doesn't end at deployment. Dcastalia offers comprehensive maintenance and support services to ensure your software continues to perform optimally. Their dedicated support team is available 24/7 to address any issues and implement updates as needed.
                </p>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Services Offered by Dcastalia
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="text-3xl mb-3">📱</div>
                <h3 className="font-semibold text-lg mb-2">Mobile App Development</h3>
                <p className="text-gray-600 text-sm">iOS, Android, and cross-platform mobile applications with native performance.</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="text-3xl mb-3">🌐</div>
                <h3 className="font-semibold text-lg mb-2">Web Development</h3>
                <p className="text-gray-600 text-sm">Responsive, scalable web applications using modern frameworks and technologies.</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="text-3xl mb-3">☁️</div>
                <h3 className="font-semibold text-lg mb-2">Cloud Solutions</h3>
                <p className="text-gray-600 text-sm">Cloud migration, infrastructure setup, and optimization on AWS, Azure, and GCP.</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="text-3xl mb-3">🤖</div>
                <h3 className="font-semibold text-lg mb-2">AI & Machine Learning</h3>
                <p className="text-gray-600 text-sm">Intelligent solutions leveraging artificial intelligence and machine learning.</p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section id="conclusion" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Conclusion
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In today's digital age, having the right technology partner is crucial for business success. Bangladesh has emerged as a hub for custom software development, offering a perfect blend of skilled talent, competitive pricing, and quality deliverables.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dcastalia stands out as the best custom software development company in Bangladesh, combining technical expertise, industry experience, and a client-centric approach. Whether you're a startup looking to build your first product or an established enterprise seeking to modernize your systems, Dcastalia has the capabilities to turn your vision into reality.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Ready to start your custom software development journey? Contact Dcastalia today to discuss your project requirements and discover how they can help transform your business through innovative technology solutions.
            </p>
          </section>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-center text-white my-12">
            <h3 className="text-2xl font-bold mb-3">Ready to Build Your Custom Software?</h3>
            <p className="mb-6 opacity-90">Let's discuss how we can help bring your ideas to life</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Get Started Today
            </button>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
            #SoftwareDevelopment
          </span>
          <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
            #Bangladesh
          </span>
          <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
            #CustomSoftware
          </span>
          <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
            #Dcastalia
          </span>
        </div>

        {/* Navigation Footer */}
        <div className="flex justify-between items-center pt-8 border-t">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <ChevronLeft size={20} />
            <span>Previous Article</span>
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <span>Next Article</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </article>

      {/* Best Reading Topic Section */}
      <section className="bg-gray-900 text-white py-16 mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Best Reading Topic</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <div key={post.id} className="bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-transform">
                <div className="bg-gradient-to-br from-blue-400 to-purple-400 h-48 flex items-center justify-center text-6xl">
                  {post.image}
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{post.description}</p>
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}