import React, { useState, useEffect, useRef } from 'react';
import { handleScrollTo } from '../utils/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);

  const toggleMenu = (state) => {
    const nextState = state !== undefined ? state : !isOpen;
    setIsOpen(nextState);
    if (window.innerWidth <= 1024) {
      document.body.style.overflow = nextState ? 'hidden' : '';
    }
  };

  const navClick = (e, sectionId) => {
    handleScrollTo(e, sectionId);
    toggleMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && headerRef.current && !headerRef.current.contains(e.target)) {
        toggleMenu(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        toggleMenu(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 1024 && isOpen) {
        toggleMenu(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  return (
    <header className="header" ref={headerRef}>
      <div className="container nav-container">
        <a href="/" className="logo" onClick={(e) => navClick(e, 'inicio')}>
          <img src="/logo.png" alt="Logo ATLIMARJOM" className="logo-icon" />
          <div className="logo-text">
            ATLIMARJOM
            <span className="logo-sub">João Monlevade - MG</span>
          </div>
        </a>

        <nav className={`nav-menu ${isOpen ? 'active' : ''}`} id="navMenu">
          <button type="button" className="nav-link active" onClick={(e) => navClick(e, 'inicio')}>Início</button>
          <button type="button" className="nav-link" onClick={(e) => navClick(e, 'sobre')}>Sobre Nós</button>
          <button type="button" className="nav-link" onClick={(e) => navClick(e, 'materiais')}>O Que Reciclamos</button>
          <button type="button" className="nav-link" onClick={(e) => navClick(e, 'noticias')}>Notícias</button>
          <button type="button" className="nav-link" onClick={(e) => navClick(e, 'apoie')}>Como Apoiar</button>
          <button type="button" className="nav-link" onClick={(e) => navClick(e, 'coleta')}>Dias da Coleta</button>
          <button type="button" className="nav-link" onClick={(e) => navClick(e, 'contato')}>Fale Conosco</button>
        </nav>

        <button 
          className="mobile-toggle" 
          aria-label="Abrir Menu" 
          aria-expanded={isOpen} 
          aria-controls="navMenu"
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
}
