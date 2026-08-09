import React from 'react';

const materialsList = [
  {
    id: 'papel',
    title: 'Papel e Papelão',
    desc: 'Caixas dobradas, jornais, revistas, folhas de rascunho e embalagens de papelão limpas.',
    img: `${import.meta.env.BASE_URL}images/papel.png`,
    badgeClass: 'mat-papel',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    )
  },
  {
    id: 'plastico',
    title: 'Plásticos',
    desc: 'Garrafas PET, frascos de produto de limpeza, tampas, potes e sacolas plásticas.',
    img: `${import.meta.env.BASE_URL}images/plastico.png`,
    badgeClass: 'mat-plastico',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 2h4v3h-4z"></path>
        <path d="M9 5h6v3l2 3.5V20a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V11.5L9 8V5z"></path>
        <line x1="7" y1="13" x2="17" y2="13"></line>
      </svg>
    )
  },
  {
    id: 'vidro',
    title: 'Vidros',
    desc: 'Garrafas de bebidas, potes de conserva e frascos inteiros (higienizados e seguros).',
    img: `${import.meta.env.BASE_URL}images/vidro.png`,
    badgeClass: 'mat-vidro',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 2h3v3l2 3.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8.5L6 5V2z"></path>
        <path d="M15 11h4v3a4 4 0 0 1-4 4v3m-2 0h4"></path>
      </svg>
    )
  },
  {
    id: 'metal',
    title: 'Metais',
    desc: 'Latas de alumínio, embalagens de aço, tampinhas de garrafa e pequenas sucatas.',
    img: `${import.meta.env.BASE_URL}images/metal.png`,
    badgeClass: 'mat-metal',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="6" y="3" width="12" height="18" rx="2.5"></rect>
        <ellipse cx="12" cy="6" rx="4" ry="1.5"></ellipse>
        <line x1="6" y1="18" x2="18" y2="18"></line>
        <path d="M6 12h12"></path>
      </svg>
    )
  },
  {
    id: 'eletronicos',
    title: 'Eletrônicos & Eletrodomésticos',
    desc: 'Fios, gabinetes, teclados, pequenos aparelhos domésticos e sucatas eletrônicas.',
    img: `${import.meta.env.BASE_URL}images/eletronico.png`,
    badgeClass: 'mat-eletronico',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="12" rx="2"></rect>
        <line x1="12" y1="16" x2="12" y2="20"></line>
        <line x1="8" y1="20" x2="16" y2="20"></line>
      </svg>
    )
  }
];

export default function Materials() {
  return (
    <section id="materiais" className="section materials-section">
      <div className="container">
        <div className="section-header">
          <span className="badge">Guia de Separação</span>
          <h2 className="section-title">O que coletamos na ATLIMARJOM</h2>
          <p className="section-subtitle">
            Confira os exemplos visuais dos materiais recicláveis que você pode separar na sua casa ou empresa em João Monlevade.
          </p>
        </div>

        <div className="materials-grid">
          {materialsList.map((item) => (
            <div key={item.id} className="material-card">
              <div className="material-img-container">
                <img 
                  src={item.img} 
                  alt={`Exemplos de ${item.title}`} 
                  className="material-img" 
                  loading="lazy" 
                />
                <div className={`material-icon-badge ${item.badgeClass}`}>
                  {item.icon}
                </div>
              </div>
              <div className="material-card-body">
                <h3 className="material-title">{item.title}</h3>
                <p className="material-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
