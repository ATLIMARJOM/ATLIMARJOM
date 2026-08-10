import React, { useState, useEffect, useRef } from 'react';

// Função utilitária para converter strings de data (ex: DD/MM/YYYY ou YYYY-MM-DD) em objeto Date
function parseDate(dateStr) {
  if (!dateStr) return new Date(0);
  const parts = String(dateStr).split('/');
  if (parts.length === 3) {
    const [day, month, year] = parts;
    return new Date(Number(year), Number(month) - 1, Number(day));
  }
  const date = new Date(dateStr);
  return isNaN(date.getTime()) ? new Date(0) : date;
}

// Carrega dinamicamente todos os arquivos JSON criados no CMS dentro de src/content/noticias/
const newsModules = import.meta.glob('/src/content/noticias/*.json', { eager: true });

export default function News() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Estados de Arraste (Drag & Touch) com Animação
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragDelta, setDragDelta] = useState(0);
  const isMovedRef = useRef(false);

  // Adapta o número de itens exibidos por aba conforme a largura da tela
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Extrai o conteúdo dos arquivos importados pelo Vite
  const rawNewsList = Object.keys(newsModules).map((path) => {
    const mod = newsModules[path];
    return mod.default || mod;
  });

  // Ordena as notícias da mais recente para a mais antiga
  const sortedNews = [...rawNewsList].sort((a, b) => parseDate(b.date) - parseDate(a.date));

  // Agrupa as notícias em páginas/abas
  const pages = [];
  for (let i = 0; i < sortedNews.length; i += itemsPerPage) {
    pages.push(sortedNews.slice(i, i + itemsPerPage));
  }

  const totalPages = Math.max(1, pages.length);
  const safeCurrentPage = Math.min(currentPage, totalPages - 1);

  // --- LÓGICA DE ARRASTE (MOUSE E TOUCH) ---
  const handleDragStart = (clientX) => {
    setIsDragging(true);
    setStartX(clientX);
    setDragDelta(0);
    isMovedRef.current = false;
  };

  const handleDragMove = (clientX) => {
    if (!isDragging) return;
    const delta = clientX - startX;
    setDragDelta(delta);
    if (Math.abs(delta) > 5) {
      isMovedRef.current = true;
    }
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // Se arrastou mais de 50px para a esquerda -> próxima aba
    if (dragDelta < -50 && safeCurrentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
    // Se arrastou mais de 50px para a direita -> aba anterior
    else if (dragDelta > 50 && safeCurrentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }

    setDragDelta(0);
  };

  // Handlers para Mouse
  const onMouseDown = (e) => handleDragStart(e.clientX);
  const onMouseMove = (e) => handleDragMove(e.clientX);
  const onMouseUp = () => handleDragEnd();
  const onMouseLeave = () => {
    if (isDragging) handleDragEnd();
  };

  // Handlers para Touch (Celulares/Tablets)
  const onTouchStart = (e) => handleDragStart(e.touches[0].clientX);
  const onTouchMove = (e) => handleDragMove(e.touches[0].clientX);
  const onTouchEnd = () => handleDragEnd();

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  const handleLinkClick = (e) => {
    if (isMovedRef.current) {
      e.preventDefault();
    }
  };

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

        <div className="news-carousel-wrapper">
          {/* Seta Esquerda */}
          {totalPages > 1 && (
            <button
              className="carousel-btn prev-btn"
              onClick={handlePrev}
              disabled={safeCurrentPage === 0}
              aria-label="Notícias anteriores"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
          )}

          {/* Area do Carrossel Arrastável */}
          <div
            className="news-carousel-container"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Trilho Deslizante com Animação Smooth */}
            <div
              className="news-slider-track"
              style={{
                transform: `translateX(calc(-${safeCurrentPage * 100}% + ${dragDelta}px))`,
                transition: isDragging ? 'none' : 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)',
              }}
            >
              {pages.map((pageItems, pageIdx) => (
                <div key={pageIdx} className="news-page">
                  <div className="news-grid">
                    {pageItems.map((item, itemIdx) => {
                      const hasExternalLink = Boolean(item.link && item.link.trim() !== '#' && item.link.trim() !== '');
                      const targetAttr = hasExternalLink ? '_blank' : undefined;
                      const relAttr = hasExternalLink ? 'noopener noreferrer' : undefined;

                      return (
                        <article key={itemIdx} className="news-card">
                          <div className="news-image">
                            {item.tag && <span className="news-tag">{item.tag}</span>}
                            {item.image ? (
                              <img
                                src={item.image}
                                alt={item.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                draggable={false}
                              />
                            ) : (
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10l5 5v11a2 2 0 0 1-2 2z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                              </svg>
                            )}
                          </div>
                          <div className="news-content">
                            <div className="news-date">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                              </svg>
                              {item.date}
                            </div>
                            <h3 className="news-card-title">
                              <a
                                href={item.link || '#'}
                                target={targetAttr}
                                rel={relAttr}
                                onClick={handleLinkClick}
                              >
                                {item.title}
                              </a>
                            </h3>
                            <p className="news-excerpt">{item.excerpt}</p>
                            <a
                              href={item.link || '#'}
                              className="news-read-more"
                              target={targetAttr}
                              rel={relAttr}
                              onClick={handleLinkClick}
                            >
                              Ler notícia completa
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                              </svg>
                            </a>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Seta Direita */}
          {totalPages > 1 && (
            <button
              className="carousel-btn next-btn"
              onClick={handleNext}
              disabled={safeCurrentPage === totalPages - 1}
              aria-label="Próximas notícias"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          )}
        </div>

        {/* Indicador de Bolinhas (Pagination Dots) */}
        {totalPages > 1 && (
          <div className="news-dots">
            {Array.from({ length: totalPages }).map((_, pageIdx) => (
              <button
                key={pageIdx}
                className={`news-dot ${pageIdx === safeCurrentPage ? 'active' : ''}`}
                onClick={() => setCurrentPage(pageIdx)}
                aria-label={`Ir para a página ${pageIdx + 1} de notícias`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
