
import React from 'react';
import QuoteForm from '../components/QuoteForm';

const Rentals: React.FC = () => {
  return (
    <div className="animate-fadeIn bg-black">
      <section className="bg-red-700 text-white py-32 border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="bg-white p-6 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.3)]">
              <img 
                src="https://lh3.googleusercontent.com/d/197NNSmOjGYMGBvjds62nDvQxUhasTO5y" 
                alt="Rental Logistics Logo" 
                className="w-64 md:w-80 h-auto object-contain"
              />
            </div>
            <div>
              <h1 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-none uppercase text-white">
                FOXHOUND <br /><span className="text-black">RENTALS</span>
              </h1>
              <p className="text-2xl md:text-4xl font-black max-w-4xl leading-tight uppercase text-white opacity-90">
                Reliable vehicles. Flexible terms. Business-friendly mobility solutions for the tri-state area.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="space-y-24">
              <div>
                <h2 className="text-5xl font-black mb-14 uppercase tracking-tighter border-b-8 border-red-600 pb-2 inline-block text-red-600">Rental Options</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { title: "Daily & Weekly", desc: "Short-term flexibility for local needs." },
                    { title: "Business Use", desc: "UberEats DoorDash Instacart Amazon Flex" },
                    { title: "Long-term", desc: "Extended rental packages with simple terms." }

                  
                  ].map((item, i) => (
                    <div key={i} className="p-10 border-4 border-red-600 bg-zinc-950 hover:bg-red-700 hover:text-white transition-all group">
                      <h4 className="font-black text-2xl uppercase mb-4 tracking-tighter group-hover:text-black">{item.title}</h4>
                      <p className="text-xl text-white group-hover:text-black font-bold uppercase">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-14 bg-zinc-900 border-l-8 border-red-600">
                <h2 className="text-4xl font-black mb-12 uppercase tracking-tighter text-red-600 underline underline-offset-8 decoration-8">HOW IT WORKS</h2>
                <div className="space-y-12">
                  {[
                    { step: "01", title: "Submit Inquiry", text: "Fill out our form with your requirements." },
                    { step: "02", title: "Confirm Availability", text: "We verify the fleet and send clear pricing." },
                    { step: "03", title: "Schedule Handoff", text: "Pick up the vehicle or wait for delivery." },
                    { step: "04", title: "Simple Terms", text: "Transparent pricing with no hidden drama." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-10">
                      <span className="text-6xl font-black text-red-700 opacity-50">{item.step}</span>
                      <div>
                        <h4 className="font-black text-2xl text-white uppercase mb-2 tracking-tight">{item.title}</h4>
                        <p className="text-zinc-400 text-xl font-bold uppercase">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div id="rental-inquiry">
              <QuoteForm title="Rentals Inquiry" type="rentals" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rentals;
