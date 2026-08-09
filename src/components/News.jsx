import React from 'react';

export default function News() {
  return (
    <section id="noticias" className="section news-section">
      <div className="container">
        <div className="section-header">
          <span className="badge">Informativo</span>
          <h2 className="section-title">Notícias e Comunicados</h2>
          <p className="section-subtitle">
            Acompanhe as últimas novidades, projetos e eventos da associação em João Monlevade.
          </p>
        </div>

        <div className="news-grid">
          {/* Notícia 1 */}
          <article className="news-card">
            <div className="news-image">
              <span className="news-tag">Conquista</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              </svg>
            </div>
            <div className="news-content">
              <div className="news-date">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                04 de Agosto, 2026
              </div>
              <h3 className="news-card-title">
                <a href="#">ATLIMARJOM fortalece capacidade de prensa de materiais recicláveis</a>
              </h3>
              <p className="news-excerpt">
                Com novos equipamentos no galpão, a associação amplia o volume diário de enfardamento de papelão e
                plásticos, otimizando o envio às indústrias.
              </p>
              <a href="#" className="news-read-more">
                Ler notícia completa
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </article>

          {/* Notícia 2 */}
          <article className="news-card">
            <div className="news-image">
              <span className="news-tag">Comunidade</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="news-content">
              <div className="news-date">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                26 de Julho, 2026
              </div>
              <h3 className="news-card-title">
                <a href="#">Oficinas de Educação Ambiental para alunos das escolas de Monlevade</a>
              </h3>
              <p className="news-excerpt">
                Integrantes da associação realizaram palestras explicativas sobre a relevância da separação correta do
                lixo seco nas residências.
              </p>
              <a href="#" className="news-read-more">
                Ler notícia completa
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </article>

          {/* Notícia 3 */}
          <article className="news-card">
            <div className="news-image">
              <span className="news-tag">Parcerias</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              </svg>
            </div>
            <div className="news-content">
              <div className="news-date">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                12 de Julho, 2026
              </div>
              <h3 className="news-card-title">
                <a href="#">Programa Recicla Comércio impulsiona adesão de empresas locais</a>
              </h3>
              <p className="news-excerpt">
                Lojas e escritórios do centro comercial de João Monlevade passam a destinar papéis e embalagens
                diretamente à ATLIMARJOM.
              </p>
              <a href="#" className="news-read-more">
                Ler notícia completa
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
