
import React from 'react';
import { Page } from '../App';

interface UnderConstructionProps {
  navigate: (page: Page) => void;
}

const UnderConstruction: React.FC<UnderConstructionProps> = ({ navigate }) => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-black text-white px-4 text-center animate-fadeIn">
      <div className="mb-12">
        <div className="w-32 h-2 bg-orange-600 mx-auto mb-8"></div>
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">
          UNDER <br className="md:hidden" /><span className="text-orange-600">CONSTRUCTION</span>
        </h1>
        <p className="text-2xl md:text-3xl font-bold uppercase tracking-tight max-w-2xl mx-auto leading-tight text-zinc-400">
          We’re currently updating this section of the site. <br className="hidden md:block" />Please check back soon.
        </p>
      </div>
      
      <div className="flex flex-col items-center gap-6">
        <button 
          onClick={() => navigate(Page.Rentals)}
          className="group flex flex-col items-center gap-2"
        >
          <span className="text-sm font-black uppercase tracking-[0.4em] text-zinc-600 group-hover:text-white transition-colors">
            For rentals, visit
          </span>
          <span className="text-3xl font-black uppercase tracking-widest text-orange-500 border-b-4 border-orange-500 pb-1 group-hover:text-white group-hover:border-white transition-all">
            Foxhound Rentals
          </span>
        </button>
        
        <button 
          onClick={() => navigate(Page.Home)}
          className="mt-12 px-10 py-4 border-4 border-zinc-800 text-zinc-500 font-black uppercase tracking-widest hover:border-white hover:text-white transition-all"
        >
          Return Home
        </button>
      </div>
    </div>
  );
};

export default UnderConstruction;
