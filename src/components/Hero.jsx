import React from 'react';
import { handleScrollTo } from '../utils/navigation';

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">
              Transformando resíduos em <span>dignidade e sustentabilidade</span>.
            </h1>

            <p className="hero-description">
              A ATLIMARJOM une a força dos catadores de materiais recicláveis para construir uma João Monlevade mais
              limpa, promovendo a preservação ambiental e a valorização do trabalho comunitário.
            </p>

            <div className="hero-actions">
              <button 
                type="button"
                className="btn btn-primary"
                onClick={(e) => handleScrollTo(e, 'apoie')}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                Faça a sua parte
              </button>
              <button 
                type="button"
                className="btn btn-secondary"
                onClick={(e) => handleScrollTo(e, 'sobre')}
              >
                Conheça a nossa história
              </button>
            </div>

            <div className="hero-stats-row">
              <div className="stat-item">
                <h3>Reciclagem</h3>
                <p>solidária e consciente</p>
              </div>
              <div className="stat-item">
                <h3>Preservação</h3>
                <p>do meio ambiente</p>
              </div>
              <div className="stat-item">
                <h3>Transformação</h3>
                <p>social e valorização humana</p>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card-main">
              <div className="hero-video-wrapper">
                <iframe 
                  className="instagram-reel-iframe" 
                  src="https://www.instagram.com/reel/DYzRUmjh2Vu/embed/"
                  frameBorder="0" 
                  scrolling="no" 
                  allowTransparency="true" 
                  allow="encrypted-media"
                  title="Vídeo Educativo ATLIMARJOM no Instagram"
                ></iframe>
              </div>

              <div className="hero-floating-badge">
                <strong className="badge-title">Vídeo Educativo</strong>
                <div className="badge-source">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>Fonte: <a href="https://www.instagram.com/reel/DYzRUmjh2Vu/" target="_blank" rel="noopener noreferrer">@a3engenhariaemeioambiente</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
