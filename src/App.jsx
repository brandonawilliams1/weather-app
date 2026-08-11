import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Collage from './components/Collage';
import CTA from './components/CTA';
import Social from './components/Social';
import ContactModal from './components/ContactModal';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  useScrollReveal();

  return (
    <>
      <Header />
      <main>
        <Hero onOpenModal={() => setModalOpen(true)} />
        <Services />
        <Benefits />
        <Collage />
        <CTA onOpenModal={() => setModalOpen(true)} />
        <Social />
      </main>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
