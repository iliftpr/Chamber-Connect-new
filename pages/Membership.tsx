import React from 'react';
import { Check } from 'lucide-react';
import { MEMBERSHIP_TIERS } from '../constants';

const Membership: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">Membership Levels</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose the membership tier that fits your business needs. Invest in your growth and the future of our community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {MEMBERSHIP_TIERS.map((tier) => (
            <div 
              key={tier.id} 
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col ${
                tier.recommended ? 'border-2 border-amber-500 transform md:-translate-y-4' : 'border border-slate-200'
              }`}
            >
              {tier.recommended && (
                <div className="absolute top-0 inset-x-0 bg-amber-500 text-slate-900 text-center text-xs font-bold uppercase tracking-widest py-1">
                  Most Popular
                </div>
              )}
              
              <div className="p-8 text-center border-b border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                <div className="text-4xl font-serif font-bold text-blue-900 mb-1">{tier.price}</div>
                <span className="text-slate-500 text-sm">per year</span>
              </div>
              
              <div className="p-8 flex-grow">
                <ul className="space-y-4">
                  {tier.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="text-green-500 shrink-0 mr-3" size={20} />
                      <span className="text-slate-700 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-8 pt-0">
                <button 
                  className={`w-full py-3 rounded-lg font-bold transition-all ${
                    tier.recommended 
                      ? 'bg-blue-900 text-white hover:bg-blue-800 shadow-lg' 
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                  onClick={() => alert(`You selected the ${tier.name} plan. This would open the registration flow.`)}
                >
                  Join Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white p-8 md:p-12 rounded-xl shadow-sm border border-slate-200">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Is membership tax deductible?</h4>
                  <p className="text-slate-600 text-sm">Yes, Chamber membership dues may be deductible as an ordinary and necessary business expense.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Can I upgrade my membership later?</h4>
                  <p className="text-slate-600 text-sm">Absolutely. You can upgrade your membership tier at any time by contacting our support team.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Do you offer non-profit rates?</h4>
                  <p className="text-slate-600 text-sm">Yes, we offer a 20% discount for registered 501(c)(3) non-profit organizations.</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Still have questions?</h3>
              <p className="text-slate-600 mb-6 text-sm">
                Our membership team is here to help you find the right fit for your business.
              </p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none" placeholder="you@company.com" />
                </div>
                <button className="w-full py-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-md transition-colors">
                  Contact Membership Team
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
