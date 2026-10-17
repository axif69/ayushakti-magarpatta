import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActionBar } from './components/FloatingActionBar';
import { BookingModal } from './components/BookingModal';
import { HomePage } from './pages/HomePage';
import { TreatmentsPage } from './pages/TreatmentsPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [prefillTherapy, setPrefillTherapy] = useState<string | undefined>(undefined);

  // Sync with browser hash if present
  useEffect(() => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    if (['home', 'treatments', 'programs', 'about', 'contact'].includes(hash)) {
      setCurrentPage(hash);
    }

    const handleHashChange = () => {
      const newHash = window.location.hash.replace('#/', '').replace('#', '');
      if (['home', 'treatments', 'programs', 'about', 'contact'].includes(newHash)) {
        setCurrentPage(newHash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (therapy?: string) => {
    setPrefillTherapy(therapy);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setPrefillTherapy(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream-100 text-charcoal-900 font-body selection:bg-gold-500/30 selection:text-forest-950">
      {/* Editorial Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Multi-Page Container */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}
        {currentPage === 'treatments' && (
          <TreatmentsPage
            onOpenBooking={handleOpenBooking}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'programs' && (
          <ProgramsPage
            onOpenBooking={handleOpenBooking}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onOpenBooking={handleOpenBooking}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            onOpenBooking={() => handleOpenBooking()}
          />
        )}
      </main>

      {/* High-End Editorial Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Floating Action Bar (Sticky Mobile Quick Access) */}
      <FloatingActionBar
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive Global Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        prefillTherapy={prefillTherapy}
      />
    </div>
  );
}

export default App;
