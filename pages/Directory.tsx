import React, { useState, useMemo } from 'react';
import { Search, MapPin, Globe, Phone } from 'lucide-react';
import { BUSINESSES } from '../constants';

const Directory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = new Set(BUSINESSES.map(b => b.category));
    return ['All', ...Array.from(cats)];
  }, []);

  const filteredBusinesses = useMemo(() => {
    return BUSINESSES.filter(business => {
      const matchesSearch = business.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            business.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || business.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">Business Directory</h1>
          <p className="text-slate-600">Discover and connect with trusted local businesses.</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 mb-10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-md leading-5 bg-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 sm:text-sm"
                placeholder="Search by name or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="md:w-64">
              <select
                className="block w-full py-3 px-4 border border-slate-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 sm:text-sm"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid gap-6">
          {filteredBusinesses.length > 0 ? (
            filteredBusinesses.map((business) => (
              <div key={business.id} className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="md:flex">
                  <div className="md:w-64 h-48 md:h-auto shrink-0">
                    <img 
                      src={business.imageUrl} 
                      alt={business.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-slate-900">{business.name}</h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {business.category}
                        </span>
                      </div>
                      <p className="text-slate-600 mb-4 text-sm">{business.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-500">
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2 text-amber-500" />
                        {business.address}
                      </div>
                      <div className="flex items-center">
                        <Phone size={16} className="mr-2 text-amber-500" />
                        {business.phone}
                      </div>
                      <div className="flex items-center">
                        <Globe size={16} className="mr-2 text-amber-500" />
                        <a href={`http://${business.website}`} target="_blank" rel="noreferrer" className="hover:text-blue-900 hover:underline">
                          {business.website}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 text-slate-500">
              <p className="text-xl">No businesses found matching your criteria.</p>
              <button 
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                className="mt-4 text-amber-600 hover:text-amber-700 font-medium"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Directory;
