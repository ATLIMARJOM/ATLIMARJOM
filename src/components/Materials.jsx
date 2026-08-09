import React from 'react';

export default function Materials() {
  return (
    <section id="materiais" className="section materials-section">
      <div className="container">
        <div className="section-header">
          <span className="badge">Guia de Separação</span>
          <h2 className="section-title">O que coletamos na ATLIMARJOM</h2>
          <p className="section-subtitle">
            Saiba quais materiais você pode separar na sua casa ou empresa em João Monlevade para doar à nossa associação.
          </p>
        </div>

        <div className="materials-grid">
          {/* Card Papel */}
          <div className="material-card">
            <div className="material-icon-wrap mat-papel">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <h3 className="material-title">Papel e Papelão</h3>
            <p className="material-desc">Caixas dobradas, jornais, revistas, folhas de rascunho e embalagens de papelão limpas.</p>
          </div>

          {/* Card Plástico */}
          <div className="material-card">
            <div className="material-icon-wrap mat-plastico">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 2h4v3h-4z"></path>
                <path d="M9 5h6v3l2 3.5V20a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V11.5L9 8V5z"></path>
                <line x1="7" y1="13" x2="17" y2="13"></line>
              </svg>
            </div>
            <h3 className="material-title">Plásticos</h3>
            <p className="material-desc">Garrafas PET, frascos de produto de limpeza, tampas, potes e sacolas plásticas.</p>
          </div>

          {/* Card Vidro */}
          <div className="material-card">
            <div className="material-icon-wrap mat-vidro">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 2h3v3l2 3.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8.5L6 5V2z"></path>
                <path d="M15 11h4v3a4 4 0 0 1-4 4v3m-2 0h4"></path>
              </svg>
            </div>
            <h3 className="material-title">Vidros</h3>
            <p className="material-desc">Garrafas de bebidas, potes de conserva e frascos inteiros (higienizados e seguros).</p>
          </div>

          {/* Card Metal */}
          <div className="material-card">
            <div className="material-icon-wrap mat-metal">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="3" width="12" height="18" rx="2.5"></rect>
                <ellipse cx="12" cy="6" rx="4" ry="1.5"></ellipse>
                <line x1="6" y1="18" x2="18" y2="18"></line>
                <path d="M6 12h12"></path>
              </svg>
            </div>
            <h3 className="material-title">Metais</h3>
            <p className="material-desc">Latas de alumínio, embalagens de aço, tampinhas de garrafa e pequenas sucatas.</p>
          </div>

          {/* Card Eletrônicos */}
          <div className="material-card">
            <div className="material-icon-wrap mat-eletronico">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="4" width="16" height="12" rx="2"></rect>
                <line x1="12" y1="16" x2="12" y2="20"></line>
                <line x1="8" y1="20" x2="16" y2="20"></line>
              </svg>
            </div>
            <h3 className="material-title">Eletrodomésticos e Eletrônicos</h3>
            <p className="material-desc">Fios de eletrodomésticos, gabinetes, aparelhos antigos e pequenos eletrônicos.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
