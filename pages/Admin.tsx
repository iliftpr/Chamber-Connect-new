import React, { useState } from 'react';
import { LayoutDashboard, Users, Calendar, FileText, Sparkles, Plus, CheckCircle, AlertCircle } from 'lucide-react';
import { generateEventDescription, generatePressRelease } from '../services/geminiService';

type AdminTab = 'overview' | 'members' | 'events' | 'content';

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');
  
  // State for Event Generation
  const [eventTitle, setEventTitle] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDetails, setEventDetails] = useState('');
  const [generatedDescription, setGeneratedDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateDescription = async () => {
    if (!eventTitle || !eventDetails) return;
    setIsGenerating(true);
    const desc = await generateEventDescription(eventTitle, eventDate, eventDetails);
    setGeneratedDescription(desc);
    setIsGenerating(false);
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-slate-300 flex flex-col hidden md:flex">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-xl font-bold text-white tracking-wide">Admin Portal</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors ${activeTab === 'overview' ? 'bg-amber-500 text-slate-900 font-bold' : 'hover:bg-slate-800'}`}
          >
            <LayoutDashboard size={20} className="mr-3" /> Overview
          </button>
          <button 
            onClick={() => setActiveTab('members')}
            className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors ${activeTab === 'members' ? 'bg-amber-500 text-slate-900 font-bold' : 'hover:bg-slate-800'}`}
          >
            <Users size={20} className="mr-3" /> Members
          </button>
          <button 
            onClick={() => setActiveTab('events')}
            className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors ${activeTab === 'events' ? 'bg-amber-500 text-slate-900 font-bold' : 'hover:bg-slate-800'}`}
          >
            <Calendar size={20} className="mr-3" /> Events
          </button>
          <button 
            onClick={() => setActiveTab('content')}
            className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors ${activeTab === 'content' ? 'bg-amber-500 text-slate-900 font-bold' : 'hover:bg-slate-800'}`}
          >
            <Sparkles size={20} className="mr-3" /> AI Assistant
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        {activeTab === 'overview' && (
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-8">Dashboard Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-slate-500 font-medium">Total Members</h3>
                  <Users className="text-blue-900" size={24} />
                </div>
                <p className="text-3xl font-bold text-slate-900">1,248</p>
                <p className="text-green-500 text-sm mt-2 flex items-center"><Plus size={14} /> 12 this week</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-slate-500 font-medium">Active Events</h3>
                  <Calendar className="text-amber-500" size={24} />
                </div>
                <p className="text-3xl font-bold text-slate-900">8</p>
                <p className="text-slate-400 text-sm mt-2">Next event in 3 days</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-slate-500 font-medium">Pending Approvals</h3>
                  <AlertCircle className="text-red-500" size={24} />
                </div>
                <p className="text-3xl font-bold text-slate-900">5</p>
                <p className="text-slate-400 text-sm mt-2">Directory listings</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex items-center border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mr-4">
                      <Users size={20} className="text-slate-600" />
                    </div>
                    <div>
                      <p className="text-slate-900 font-medium">New member registration: ABC Corp</p>
                      <p className="text-slate-500 text-sm">2 hours ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'members' && (
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-6">Manage Members</h1>
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Business Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Tier</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <tr key={i}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Business {i}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">Corporate</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-900 cursor-pointer">Edit</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'events' && (
             <div>
                 <h1 className="text-3xl font-bold text-slate-900 mb-6">Events Management</h1>
                 <p className="text-slate-600 mb-4">Use the AI Assistant tab to generate descriptions for your events.</p>
                 <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center justify-center text-center py-20">
                     <Calendar size={48} className="text-slate-300 mb-4" />
                     <h3 className="text-xl font-bold text-slate-900 mb-2">No Draft Events</h3>
                     <p className="text-slate-500 mb-6">Start by creating a new event.</p>
                     <button 
                        onClick={() => setActiveTab('content')}
                        className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800"
                    >
                        Create Event with AI
                     </button>
                 </div>
             </div>
        )}

        {activeTab === 'content' && (
          <div>
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-amber-100 p-2 rounded-lg">
                    <Sparkles className="text-amber-600" size={24} />
                </div>
                <h1 className="text-3xl font-bold text-slate-900">AI Content Assistant</h1>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Event Generator */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <Calendar className="mr-2 text-blue-900" size={20} /> Event Description Generator
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Event Title</label>
                    <input 
                      type="text" 
                      className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-amber-500 outline-none" 
                      placeholder="e.g. Summer Networking Bash"
                      value={eventTitle}
                      onChange={(e) => setEventTitle(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
                    <input 
                      type="date" 
                      className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-amber-500 outline-none"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Key Details (Speakers, Topics, Venue)</label>
                    <textarea 
                      className="w-full border border-slate-300 rounded-md p-2 h-24 focus:ring-2 focus:ring-amber-500 outline-none" 
                      placeholder="e.g. Keynote by Mayor, 5pm at The Grand Hotel, drinks included."
                      value={eventDetails}
                      onChange={(e) => setEventDetails(e.target.value)}
                    ></textarea>
                  </div>
                  <button 
                    className="w-full bg-blue-900 text-white py-2 rounded-md font-bold hover:bg-blue-800 disabled:opacity-50 flex items-center justify-center gap-2"
                    onClick={handleGenerateDescription}
                    disabled={isGenerating || !eventTitle || !eventDetails}
                  >
                    {isGenerating ? 'Generating...' : <><Sparkles size={16} /> Generate Description</>}
                  </button>
                </div>
              </div>

              {/* Output */}
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col h-full">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Generated Content</h3>
                <div className="flex-grow bg-white border border-slate-200 rounded-md p-4 text-slate-700 whitespace-pre-wrap overflow-y-auto">
                  {generatedDescription ? (
                    generatedDescription
                  ) : (
                    <span className="text-slate-400 italic">Content will appear here...</span>
                  )}
                </div>
                {generatedDescription && (
                    <div className="mt-4 flex gap-2">
                         <button className="flex-1 border border-slate-300 text-slate-600 py-2 rounded hover:bg-slate-50">Copy to Clipboard</button>
                         <button className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700">Save as Draft</button>
                    </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
