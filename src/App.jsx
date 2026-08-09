import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Materials from './components/Materials';
import News from './components/News';
import Support from './components/Support';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Garante que o navegador não restaure a posição antiga de rolagem
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Remove qualquer # da URL caso exista
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    // Rola para o topo da página ao carregar / recarregar
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Materials />
        <News />
        <Support />
        <Schedule />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
