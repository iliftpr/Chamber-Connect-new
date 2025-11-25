import React, { useState } from 'react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { EVENTS } from '../constants';
import { Event } from '../types';

const Events: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const formatTime = (dateString: string) => {
     return new Date(dateString).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">Upcoming Events</h1>
          <p className="text-slate-600">Network, learn, and grow at our exclusive chamber events.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {EVENTS.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all group">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-48 h-48 sm:h-auto shrink-0 relative overflow-hidden">
                    <img 
                      src={event.imageUrl} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-0 left-0 bg-amber-500 text-white px-3 py-1 text-xs font-bold uppercase">
                      {event.category}
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center text-xs text-slate-500 mb-2">
                        <Calendar size={14} className="mr-1 text-amber-500" />
                        <span className="mr-3">{formatDate(event.date)}</span>
                        <Clock size={14} className="mr-1 text-amber-500" />
                        <span>{formatTime(event.date)}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{event.title}</h3>
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2">{event.description}</p>
                    </div>
                    <div className="flex items-center justify-between mt-4 sm:mt-0">
                      <div className="flex items-center text-sm text-slate-500">
                        <MapPin size={16} className="mr-1 text-slate-400" />
                        {event.location}
                      </div>
                      <button 
                        onClick={() => setSelectedEvent(event)}
                        className="text-blue-900 font-semibold text-sm hover:underline flex items-center"
                      >
                        Details <ArrowRight size={14} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 sticky top-24">
              <h3 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Filter Events</h3>
              <div className="space-y-2">
                {['All Events', 'Networking', 'Workshop', 'Webinar', 'Gala'].map(filter => (
                  <label key={filter} className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-slate-50 rounded">
                    <input type="radio" name="event-filter" className="text-amber-500 focus:ring-amber-500" defaultChecked={filter === 'All Events'} />
                    <span className="text-slate-700 text-sm">{filter}</span>
                  </label>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Subscribe</h3>
                <p className="text-xs text-slate-500 mb-4">Get the latest events delivered to your inbox weekly.</p>
                <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="Your email address" className="px-3 py-2 border border-slate-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-amber-500" />
                  <button className="bg-slate-900 text-white py-2 rounded text-sm font-semibold hover:bg-slate-800">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Event Detail Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden animate-fade-in">
              <div className="relative h-64">
                 <img src={selectedEvent.imageUrl} alt={selectedEvent.title} className="w-full h-full object-cover" />
                 <button 
                   onClick={() => setSelectedEvent(null)}
                   className="absolute top-4 right-4 bg-white/90 p-2 rounded-full text-slate-900 hover:bg-white transition-colors"
                 >
                   <span className="sr-only">Close</span>
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                 </button>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-bold uppercase">{selectedEvent.category}</span>
                </div>
                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">{selectedEvent.title}</h2>
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-slate-600">
                  <div className="flex items-center">
                    <Calendar className="mr-2 text-amber-500" size={18} />
                    {formatDate(selectedEvent.date)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 text-amber-500" size={18} />
                    {formatTime(selectedEvent.date)}
                  </div>
                  <div className="col-span-2 flex items-center">
                    <MapPin className="mr-2 text-amber-500" size={18} />
                    {selectedEvent.location}
                  </div>
                </div>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {selectedEvent.description}
                  <br /><br />
                  Join us for an evening of connection and opportunity. This event is open to all members and future members looking to expand their local footprint.
                </p>
                <div className="flex gap-4">
                  <button 
                    className="flex-1 bg-amber-500 text-slate-900 py-3 rounded-lg font-bold hover:bg-amber-400 transition-colors"
                    onClick={() => alert("RSVP functionality would go here!")}
                  >
                    RSVP Now
                  </button>
                  <button 
                    className="flex-1 border border-slate-300 text-slate-700 py-3 rounded-lg font-bold hover:bg-slate-50 transition-colors"
                    onClick={() => setSelectedEvent(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
