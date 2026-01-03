
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Logistics from './pages/Logistics';
import Medical from './pages/Medical';
import Rentals from './pages/Rentals';
import UnderConstruction from './pages/UnderConstruction';

enum Page {
  Home = 'home',
  Logistics = 'logistics',
  Medical = 'medical',
  Rentals = 'rentals',
  UnderConstruction = 'under-construction'
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <Home navigate={setCurrentPage} />;
      case Page.Logistics:
      case Page.Medical:
        // Redirecting both to Under Construction per request
        return <UnderConstruction navigate={setCurrentPage} />;
      case Page.Rentals:
        return <Rentals />;
      default:
        return <Home navigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar navigate={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
export { Page };
