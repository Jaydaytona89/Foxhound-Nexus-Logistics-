
import React from 'react';
import { Page } from '../App';

interface HomeProps {
  navigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ navigate }) => {
  return (
    <div className="animate-fadeIn bg-black text-orange-500">
      {/* Hero Section */}
      <section className="py-24 md:py-40 border-b-8 border-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-tighter leading-none text-white">
            FOXHOUND NEXUS<br /><span className="text-orange-500">LOGISTICS</span>
          </h1>
          <p className="text-2xl md:text-4xl font-black mb-8 text-orange-500 uppercase tracking-widest border-4 border-orange-500 inline-block py-4 px-10 bg-black shadow-[0_0_30px_rgba(249,115,22,0.3)]">
            NYC • CT • NJ • ALL 50 STATES
          </p>
          <p className="max-w-4xl mx-auto text-2xl md:text-3xl text-white mb-16 font-bold leading-tight">
            One umbrella. Two divisions. Same standards: fast response, clear communication, and reliable execution. Serving the Tri-State & Nationwide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <button 
              onClick={() => navigate(Page.Logistics)}
              className="px-12 py-6 bg-orange-600 text-black font-black uppercase tracking-widest hover:bg-orange-500 transition-all text-2xl shadow-[0_0_40px_rgba(234,88,12,0.4)]"
            >
              Get a Quote
            </button>
            <button 
              onClick={() => navigate(Page.Medical)}
              className="px-12 py-6 bg-black text-orange-500 font-black uppercase tracking-widest hover:bg-zinc-900 transition-all border-4 border-orange-500 text-2xl"
            >
              Request Pickup
            </button>
            <button 
              onClick={() => navigate(Page.Rentals)}
              className="px-12 py-6 bg-zinc-800 text-white font-black uppercase tracking-widest hover:bg-zinc-700 transition-all text-2xl"
            >
              Rental Inquiry
            </button>
          </div>
        </div>
      </section>

      {/* Trust Line */}
      <div className="bg-orange-600 text-black py-8">
        <div className="max-w-7xl mx-auto px-4">
           <div className="flex justify-between items-center whitespace-nowrap text-xl md:text-2xl font-black uppercase tracking-[0.2em]">
            <span>Same-Day</span>
            <span className="hidden md:inline">•</span>
            <span>Scheduled Routes</span>
            <span className="hidden md:inline">•</span>
            <span>Chain-of-Custody</span>
            <span className="hidden md:inline">•</span>
            <span>All 50 States Coverage</span>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-black p-14 border-4 border-orange-500 hover:border-white transition-all cursor-pointer flex flex-col h-full group" onClick={() => navigate(Page.Logistics)}>
              <h3 className="text-4xl font-black mb-8 uppercase tracking-tighter leading-none group-hover:text-white">Courier & Logistics</h3>
              <p className="text-white text-xl leading-relaxed mb-10 flex-grow font-semibold uppercase">
                Business-critical deliveries, same-day service, and scheduled routes with nationwide reach.
              </p>
              <span className="text-orange-500 font-black uppercase text-xl tracking-widest border-b-8 border-orange-500 inline-block pb-2 self-start group-hover:border-white group-hover:text-white">Learn More →</span>
            </div>
            
            <div className="bg-orange-600 text-black p-14 border-4 border-orange-600 hover:bg-orange-500 transition-all cursor-pointer flex flex-col h-full group" onClick={() => navigate(Page.Medical)}>
              <h3 className="text-4xl font-black mb-8 uppercase tracking-tighter leading-none">Medical Logistics</h3>
              <p className="text-black text-xl leading-relaxed mb-10 flex-grow font-black uppercase">
                Time-sensitive medical courier solutions across all 50 states with chain-of-custody handling.
              </p>
              <span className="text-black font-black uppercase text-xl tracking-widest border-b-8 border-black inline-block pb-2 self-start group-hover:border-zinc-800">Learn More →</span>
            </div>

            <div className="bg-black p-14 border-4 border-orange-500 hover:border-white transition-all cursor-pointer flex flex-col h-full group" onClick={() => navigate(Page.Rentals)}>
              <h3 className="text-4xl font-black mb-8 uppercase tracking-tighter leading-none group-hover:text-white">Foxhound Rentals</h3>
              <p className="text-white text-xl leading-relaxed mb-10 flex-grow font-semibold uppercase">
                Reliable rentals with flexible terms. Clean, vetted vehicles available for Tri-State needs.
              </p>
              <span className="text-orange-500 font-black uppercase text-xl tracking-widest border-b-8 border-orange-500 inline-block pb-2 self-start group-hover:border-white group-hover:text-white">Learn More →</span>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-32 bg-zinc-950 border-y-8 border-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-6xl md:text-8xl font-black mb-20 uppercase tracking-tighter text-center text-white">WHAT WE DO</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <ul className="space-y-12">
                {[
                  "Same-day and scheduled courier routes",
                  "Medical specimen transport (50 States)",
                  "Multi-stop routes and optimization",
                  "Secure delivery options (signature/photo POD)",
                  "Rental options for flexible mobility needs"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-8">
                    <span className="mt-1 flex-shrink-0 w-12 h-12 bg-orange-600 text-black flex items-center justify-center text-2xl font-black">
                      {i + 1}
                    </span>
                    <span className="text-3xl md:text-4xl font-black text-white leading-tight uppercase tracking-tighter">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative border-8 border-orange-500 overflow-hidden bg-black p-4">
                <img 
                  src="https://lh3.googleusercontent.com/d/1c4rm-381-0_Byh_iyOaMAjV08Umtiamb" 
                  alt="Operations" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-32 bg-black text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-7xl font-black mb-14 tracking-tighter uppercase leading-none">Need a courier that doesn’t<br /><span className="text-orange-500">need babysitting?</span></h2>
          <button 
            onClick={() => navigate(Page.Logistics)}
            className="px-20 py-8 bg-orange-600 text-black font-black uppercase tracking-[0.3em] hover:bg-orange-500 transition-all text-3xl shadow-[0_0_50px_rgba(249,115,22,0.4)]"
          >
            Get a Quote
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
