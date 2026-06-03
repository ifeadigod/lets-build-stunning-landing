import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { ContactCEO } from './components/ContactCEO';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <ContactCEO />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
