import React from 'react';
import { ArrowRight, Users, Mic2, Network } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NEWS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://picsum.photos/1920/1080?random=100" 
            alt="City Skyline" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Building a Stronger <span className="text-amber-500">Community</span> Through Business
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl">
            We are the leading voice for business in the region. Join over 1,000 local enterprises dedicated to economic growth and community prosperity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/membership" 
              className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-md transition-all shadow-lg hover:shadow-amber-500/20"
            >
              Become a Member
            </Link>
            <Link 
              to="/directory" 
              className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-md backdrop-blur-sm transition-all border border-white/20"
            >
              Find a Business
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Our Mission</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-8 rounded-xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Educate</h3>
              <p className="text-slate-600 leading-relaxed">
                Providing resources, workshops, and seminars to help businesses adapt and thrive in a changing economy.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mic2 size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Advocate</h3>
              <p className="text-slate-600 leading-relaxed">
                Representing the interests of our members at the local, state, and federal levels of government.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Network size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Network</h3>
              <p className="text-slate-600 leading-relaxed">
                Facilitating meaningful connections through mixers, galas, and industry-specific committees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">Latest News</h2>
              <p className="text-slate-600">Updates from the Chamber and our community.</p>
            </div>
            <Link to="/news" className="hidden sm:flex items-center text-amber-600 font-semibold hover:text-amber-700">
              View All News <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {NEWS.slice(0, 3).map((item) => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">{item.category}</span>
                    <span className="text-xs text-slate-400">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">{item.summary}</p>
                  <Link to="/news" className="text-blue-900 font-medium text-sm hover:underline">Read more</Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Link to="/news" className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700">
              View All News <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            Join the Chamber today and gain access to exclusive resources, networking opportunities, and business advocacy.
          </p>
          <Link 
            to="/membership" 
            className="inline-block px-8 py-4 bg-amber-500 text-slate-900 font-bold rounded-md hover:bg-amber-400 transition-colors shadow-lg"
          >
            Join the Chamber
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
