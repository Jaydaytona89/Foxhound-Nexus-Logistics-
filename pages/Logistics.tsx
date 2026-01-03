
import React from 'react';
import QuoteForm from '../components/QuoteForm';

const Logistics: React.FC = () => {
  return (
    <div className="animate-fadeIn bg-black">
      <section className="bg-black text-white py-32 border-b-8 border-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="bg-white p-6 rounded-2xl shadow-[0_0_40px_rgba(249,115,22,0.3)]">
                <img src="https://lh3.googleusercontent.com/d/1c4rm-381-0_Byh_iyOaMAjV08Umtiamb" alt="FNL Logo" className="w-64 h-auto" />
            </div>
            <div>
              <h1 className="text-7xl md:text-9xl font-black mb-10 tracking-tighter leading-none uppercase">
                COURIER & <br /><span className="text-orange-500">LOGISTICS</span>
              </h1>
              <p className="text-2xl md:text-4xl font-black max-w-4xl leading-tight uppercase tracking-tight text-white">
                Speed. Accountability. Execution. Business-critical logistics across the Tri-State and all 50 States.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-5xl font-black mb-16 uppercase tracking-tighter border-b-8 border-orange-600 pb-2 inline-block text-orange-500">Service Suite</h2>
              <ul className="space-y-12">
                {[
                  "Same-day local delivery (NYC/CT/NJ)",
                  "Nationwide priority / rush courier",
                  "All 50 States logistics coverage",
                  "Business-to-business transport",
                  "Full POD (Photo/Signature)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-8 group">
                    <span className="w-8 h-8 mt-2 bg-orange-600 flex-shrink-0"></span>
                    <span className="text-4xl font-black uppercase leading-none tracking-tighter text-white group-hover:text-orange-500 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-24 p-16 border-8 border-orange-600 bg-zinc-950">
                <h3 className="text-3xl font-black mb-8 uppercase tracking-widest text-orange-500">TARGET CLIENTS:</h3>
                <p className="text-3xl font-black leading-tight text-white uppercase tracking-tighter">
                  Warehouses, Retailers, and High-Volume Businesses needing professional nationwide execution.
                </p>
              </div>
            </div>

            <div id="quote-form">
              <QuoteForm title="Logistics Quote Request" type="logistics" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Logistics;