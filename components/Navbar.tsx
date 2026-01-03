
import React, { useState } from 'react';
import { Page } from '../App';

interface NavbarProps {
  navigate: (page: Page) => void;
  currentPage: Page;
}

const Navbar: React.FC<NavbarProps> = ({ navigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', value: Page.Home },
    { label: 'Logistics', value: Page.Logistics },
    { label: 'Medical', value: Page.Medical },
    { label: 'Rentals', value: Page.Rentals },
  ];

  return (
    <nav className="bg-black text-orange-500 sticky top-0 z-50 border-b-4 border-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-40">
          <div className="flex items-center">
            <button 
              onClick={() => navigate(Page.Home)}
              className="flex items-center gap-8 group"
            >
              <img 
                src="https://lh3.googleusercontent.com/d/1c4rm-381-0_Byh_iyOaMAjV08Umtiamb" 
                alt="Foxhound Nexus Logo" 
                className="h-32 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col items-start leading-none hidden lg:flex">
                <span className="text-4xl font-black tracking-tighter text-white">FOXHOUND NEXUS</span>
                <span className="text-2xl font-black tracking-[0.2em] text-orange-500 mt-2">LOGISTICS</span>
              </div>
            </button>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => navigate(item.value)}
                  className={`px-3 py-2 text-2xl font-black tracking-widest uppercase transition-all border-b-4 ${
                    currentPage === item.value ? 'border-orange-500 text-orange-500' : 'border-transparent text-white hover:text-orange-500'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-orange-500 hover:bg-zinc-900"
            >
              <svg className="h-12 w-12" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black border-t-2 border-orange-500">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  navigate(item.value);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-6 py-6 text-2xl font-black uppercase ${
                  currentPage === item.value ? 'bg-zinc-900 text-orange-500' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
