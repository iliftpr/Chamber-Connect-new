import React from 'react';
import { NEWS } from '../constants';
import { Calendar, Tag } from 'lucide-react';

const News: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">News & Resources</h1>
          <p className="text-slate-600">
            Stay informed with the latest updates, press releases, and insights for your business.
          </p>
        </div>

        <div className="space-y-12">
          {NEWS.map((item) => (
            <article key={item.id} className="flex flex-col md:flex-row gap-8 items-start border-b border-slate-100 pb-12 last:border-0">
              <div className="w-full md:w-1/3 shrink-0">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-56 object-cover rounded-lg shadow-sm"
                />
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                  <span className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {item.date}
                  </span>
                  <span className="flex items-center text-amber-600 font-medium">
                    <Tag size={14} className="mr-1" />
                    {item.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3 hover:text-blue-900 cursor-pointer transition-colors">
                  {item.title}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {item.summary} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button className="text-blue-900 font-semibold text-sm hover:underline">
                  Read Full Article
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination Mock */}
        <div className="mt-16 flex justify-center space-x-2">
          <button className="px-4 py-2 border border-slate-300 rounded text-slate-600 hover:bg-slate-50">Previous</button>
          <button className="px-4 py-2 bg-blue-900 text-white rounded font-medium">1</button>
          <button className="px-4 py-2 border border-slate-300 rounded text-slate-600 hover:bg-slate-50">2</button>
          <button className="px-4 py-2 border border-slate-300 rounded text-slate-600 hover:bg-slate-50">3</button>
          <button className="px-4 py-2 border border-slate-300 rounded text-slate-600 hover:bg-slate-50">Next</button>
        </div>
      </div>
    </div>
  );
};

export default News;
