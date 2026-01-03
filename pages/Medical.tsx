
import React from 'react';
import QuoteForm from '../components/QuoteForm';

const Medical: React.FC = () => {
  return (
    <div className="animate-fadeIn bg-black">
      <section className="bg-black text-white py-32 border-b-8 border-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <img 
              src="https://lh3.googleusercontent.com/d/19vZUVBjAmVoJRp0LpclkJhFS0_wHhP1g" 
              alt="Medical Logistics Logo" 
              className="w-64 md:w-80 h-auto object-contain bg-white p-4 rounded-xl shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            />
            <div>
              <div className="mb-6 flex items-center justify-center md:justify-start gap-6">
                <div className="w-20 h-3 bg-orange-600"></div>
                <span className="text-2xl font-black tracking-[0.5em] uppercase text-orange-500">Critical care</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none uppercase">
                MEDICAL <br /><span className="text-orange-500">LOGISTICS</span>
              </h1>
              <p className="text-2xl md:text-3xl font-bold max-w-4xl leading-tight uppercase text-white">
                Supporting healthcare facilities with time-sensitive deliveries across the Tri-State and all 50 States.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <div className="mb-24">
                <h2 className="text-4xl font-black mb-12 uppercase tracking-tighter border-b-8 border-orange-600 pb-2 inline-block text-orange-500">Capabilities</h2>
                <ul className="space-y-10">
                  {[
                    "Clinic-to-lab routes (Local & National)",
                    "Specimen transport in all 50 States",
                    "Scheduled medical routes (daily/weekly)",
                    "STAT / rush runs (Nationwide coverage)",
                    "Full Chain-of-Custody POD"
                  ].map((item, i) => (
                    <li key={i} className="text-3xl font-black uppercase flex items-center gap-8 text-white">
                      <div className="w-10 h-10 bg-orange-600 text-black flex items-center justify-center text-xl">✓</div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-orange-600 text-black p-14 border-8 border-orange-600 shadow-[0_0_40px_rgba(249,115,22,0.2)]">
                <h2 className="text-4xl font-black mb-12 uppercase tracking-tighter border-b-8 border-black pb-2 inline-block">Standards</h2>
                <div className="space-y-12">
                  <div>
                    <h4 className="font-black text-2xl mb-4 uppercase tracking-tight">Chain-of-Custody</h4>
                    <p className="text-black text-xl font-bold uppercase opacity-80 leading-snug">Handoff verification and timestamped confirmation for every transfer, everywhere.</p>
                  </div>
                  <div>
                    <h4 className="font-black text-2xl mb-4 uppercase tracking-tight">Secure Transport</h4>
                    <p className="text-black text-xl font-bold uppercase opacity-80 leading-snug">Standardized procedures for sensitive materials transport across the US.</p>
                  </div>
                  <div>
                    <h4 className="font-black text-2xl mb-4 uppercase tracking-tight">Live Updates</h4>
                    <p className="text-black text-xl font-bold uppercase opacity-80 leading-snug">Consistent communication throughout the national delivery lifecycle.</p>
                  </div>
                </div>
              </div>
            </div>

            <div id="medical-quote">
              <QuoteForm title="Medical Quote Request" type="medical" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Medical;