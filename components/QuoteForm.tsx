
import React, { useState } from 'react';

interface QuoteFormProps {
  title: string;
  type: 'logistics' | 'medical' | 'rentals';
}

const QuoteForm: React.FC<QuoteFormProps> = ({ title, type }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-orange-600 p-16 border-8 border-black text-center animate-fadeIn shadow-[0_0_60px_rgba(249,115,22,0.3)]">
        <div className="w-32 h-32 bg-black text-orange-500 rounded-full flex items-center justify-center mx-auto mb-10">
          <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-5xl font-black mb-8 uppercase tracking-tighter text-black">SUCCESS</h3>
        <p className="text-3xl text-black font-black mb-12 uppercase leading-tight">Request Logged.<br />We will reach out shortly.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="px-12 py-5 bg-black text-orange-500 font-black uppercase tracking-widest text-xl hover:bg-zinc-800 transition-all"
        >
          Send Another
        </button>
      </div>
    );
  }

  const inputClasses = "w-full bg-black border-4 border-orange-500 p-6 focus:bg-zinc-900 focus:border-white focus:outline-none transition-all text-2xl font-black text-white placeholder-zinc-700 uppercase tracking-tighter";
  const labelClasses = "block text-xl font-black uppercase tracking-[0.2em] mb-4 text-orange-500";

  return (
    <div className="bg-black p-10 md:p-16 border-8 border-orange-500 shadow-[0_0_50px_rgba(249,115,22,0.2)]">
      <h2 className="text-5xl font-black mb-16 uppercase tracking-tighter border-b-8 border-orange-600 pb-4 inline-block text-white">{title}</h2>
      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <label className={labelClasses}>Full Name</label>
            <input type="text" required className={inputClasses} placeholder="Your Name" />
          </div>
          <div>
            <label className={labelClasses}>{type === 'medical' ? 'Facility' : 'Company'}</label>
            <input type="text" className={inputClasses} placeholder="Company Name" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <label className={labelClasses}>Phone</label>
            <input type="tel" required className={inputClasses} placeholder="Phone #" />
          </div>
          <div>
            <label className={labelClasses}>Email</label>
            <input type="email" required className={inputClasses} placeholder="Email" />
          </div>
        </div>

        {type !== 'rentals' ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <label className={labelClasses}>Pickup ZIP</label>
                <input type="text" required className={inputClasses} placeholder="ZIP" />
              </div>
              <div>
                <label className={labelClasses}>Delivery ZIP</label>
                <input type="text" required className={inputClasses} placeholder="ZIP" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <label className={labelClasses}>Urgency</label>
                <select className={inputClasses}>
                  {type === 'medical' ? (
                    <>
                      <option>STAT / Urgent</option>
                      <option>Same-day</option>
                      <option>Scheduled Daily</option>
                      <option>Scheduled Weekly</option>
                    </>
                  ) : (
                    <>
                      <option>Immediate / ASAP</option>
                      <option>Today (Standard)</option>
                      <option>Next-day</option>
                      <option>Scheduled Route</option>
                    </>
                  )}
                </select>
              </div>
              <div>
                <label className={labelClasses}>Details</label>
                <input type="text" className={inputClasses} placeholder="Size / Weight" />
              </div>
            </div>
          </>
        ) : (
          <div>
             <label className={labelClasses}>Platform (Turo/Direct)</label>
             <input type="text" className={inputClasses} placeholder="Turo Link or Inquiry" />
          </div>
        )}

        <div>
          <label className={labelClasses}>Notes</label>
          <textarea className={inputClasses} rows={4} placeholder="Specifics..."></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full bg-orange-600 text-black py-8 font-black uppercase tracking-[0.3em] text-3xl hover:bg-orange-500 transition-all shadow-2xl"
        >
          SUBMIT REQUEST
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;
