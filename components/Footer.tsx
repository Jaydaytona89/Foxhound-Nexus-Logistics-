
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t-8 border-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div>
             <img src="https://lh3.googleusercontent.com/d/1c4rm-381-0_Byh_iyOaMAjV08Umtiamb" alt="Logo" className="h-24 w-auto mb-8 bg-white p-2" />
            <h3 className="text-2xl font-black mb-6 tracking-tighter uppercase text-orange-500">FOXHOUND NEXUS</h3>
            <p className="text-zinc-400 font-bold uppercase tracking-widest text-sm leading-loose">
              Courier • Medical Logistics • Rentals<br />
              NYC • CT • NJ • All 50 States
            </p>
          </div>
          <div>
            <h4 className="text-xl font-black mb-8 uppercase tracking-widest text-orange-500 underline decoration-4 underline-offset-8">Service Areas</h4>
            <ul className="text-white space-y-4 text-lg font-black uppercase">
              <li>NYC (All Boroughs)</li>
              <li>CT (Fairfield / Hartford)</li>
              <li>NJ (North / Central)</li>
              <li className="text-orange-500">Nationwide (All 50 States)</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-black mb-8 uppercase tracking-widest text-orange-500 underline decoration-4 underline-offset-8">Inquiries</h4>
            <ul className="text-white space-y-4 text-lg font-black uppercase">
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Logistics Quote</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Medical STAT Inquiries</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Rental Reservations</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-black mb-8 uppercase tracking-widest text-orange-500 underline decoration-4 underline-offset-8">Mission</h4>
            <p className="text-zinc-400 text-lg font-bold uppercase leading-relaxed tracking-tight">
              A seamless connection between critical deliveries and businesses through reliable, secure solutions across the nation.
            </p>
          </div>
        </div>
        <div className="pt-12 border-t-4 border-zinc-900 text-center text-sm font-black uppercase tracking-widest text-zinc-600">
          <p>© {new Date().getFullYear()} Foxhound Nexus Logistics. All rights reserved.</p>
          <p className="mt-4 text-orange-600 text-lg">Same-Day • Scheduled Routes • All 50 States • Professional Execution</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;