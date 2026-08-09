import React, { useState } from 'react';

const trucksData = [
  {
    id: 1,
    title: 'CAMINHÃO 1',
    route: 'Rota 01',
    headerClass: 'header-truck-1',
    days: [
      {
        day: 'SEGUNDA-FEIRA',
        dayClass: 'day-segunda',
        neighborhoods: ['Areia Preta', 'Vila Tanque', 'Baú', 'Laranjeiras', 'Metalúrgico', 'Belmonte']
      },
      {
        day: 'TERÇA-FEIRA',
        dayClass: 'day-terca',
        neighborhoods: ['JK', 'Rosário', 'Mangabeiras', 'Vale do Sol', 'José Elói', 'São João', 'São Jorge', 'Castelo', 'São Benedito']
      },
      {
        day: 'QUARTA-FEIRA',
        dayClass: 'day-quarta',
        neighborhoods: ['Lucília', 'São Geraldo', 'Satélite de Baixo', 'Satélite de Cima', 'José de Alencar', 'Loanda', 'Vera Cruz', 'Palmares', 'ABM']
      },
      {
        day: 'QUINTA-FEIRA',
        dayClass: 'day-quinta',
        neighborhoods: ['Nossa Senhora da Conceição', 'Alvorada', 'Lourdes', 'República', 'Aclimação', 'Novo Horizonte']
      },
      {
        day: 'SEXTA-FEIRA',
        dayClass: 'day-sexta',
        neighborhoods: ['Carneirinhos', 'Empresas']
      }
    ]
  },
  {
    id: 2,
    title: 'CAMINHÃO 2',
    route: 'Rota 02',
    headerClass: 'header-truck-2',
    days: [
      {
        day: 'SEGUNDA-FEIRA',
        dayClass: 'day-segunda',
        neighborhoods: ['Santo Hipólito', 'Teresópolis', 'Petrópolis', 'Nova Monlevade']
      },
      {
        day: 'TERÇA-FEIRA',
        dayClass: 'day-terca',
        neighborhoods: ['Burian', 'Tanquinho 1', 'Tanquinho 2', 'Sion', 'Paineiras', 'Campos Elísios', 'Nova Esperança', 'Nova Aclimação', 'Cidade Nova', 'Boa Vista', 'Nova Cachoeirinha', 'Ponte Funda', 'Campo Alegre']
      },
      {
        day: 'QUARTA-FEIRA',
        dayClass: 'day-quarta',
        neighborhoods: ['Estrela Dalva', 'Santa Cecília', 'Cruzeiro Celeste', '1º de Maio', 'Corumbiara de Vanessa', 'Monte Sagrado']
      },
      {
        day: 'QUINTA-FEIRA',
        dayClass: 'day-quinta',
        neighborhoods: ['Centro Industrial', 'Santa Cruz', 'Amazonas', 'Jacuí', 'Serra do Egito', 'Pedreira', 'Santa Bárbara', 'Vale da Serra', 'Recanto Paraíso', 'Industrial', 'Ipiranga']
      },
      {
        day: 'SEXTA-FEIRA',
        dayClass: 'day-sexta',
        neighborhoods: ['Novo Cruzeiro', 'Ernestina Graciana', 'Promorar', 'Planalto']
      }
    ]
  }
];

const normalizeText = (text) => {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
};

export default function Schedule() {
  const [searchTerm, setSearchTerm] = useState('');

  const query = normalizeText(searchTerm);

  // Calcula correspondências totais de bairros
  let totalMatches = 0;
  if (query) {
    trucksData.forEach(truck => {
      truck.days.forEach(day => {
        day.neighborhoods.forEach(n => {
          if (normalizeText(n).includes(query)) {
            totalMatches++;
          }
        });
      });
    });
  }

  const renderResultMessage = () => {
    if (!query) return null;
    if (totalMatches === 0) {
      return (
        <div className="search-results-count" style={{ color: '#DC2626' }}>
          Nenhum bairro encontrado para "{searchTerm}".
        </div>
      );
    }
    return (
      <div className="search-results-count" style={{ color: 'var(--primary-dark)' }}>
        {totalMatches === 1 ? `1 bairro encontrado para "${searchTerm}".` : `${totalMatches} bairros encontrados para "${searchTerm}".`}
      </div>
    );
  };

  return (
    <section id="coleta" className="section schedule-section">
      <div className="container">
        <div className="section-header">
          <span className="badge">Cronograma Semanal</span>
          <h2 className="section-title">Dias e Bairros da Coleta Seletiva</h2>
          <p className="section-subtitle">
            Confira o dia da semana e faça sua parte em João Monlevade.<br />
            <strong className="schedule-highlight-time">🚚 Os caminhões começam a circular a partir das 08h.</strong>
          </p>
        </div>

        {/* Campo de Busca Rápida de Bairro */}
        <div className="neighborhood-search-container">
          <div className="search-box-wrapper">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              className="neighborhood-search-input"
              placeholder="Digite o nome do seu bairro para pesquisar (ex: Carneirinhos, Baú, Sion...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoComplete="off"
            />
            {query && (
              <button 
                type="button" 
                className="clear-search-btn" 
                style={{ display: 'block' }} 
                aria-label="Limpar busca"
                onClick={() => setSearchTerm('')}
              >
                &times;
              </button>
            )}
          </div>
          {renderResultMessage()}
        </div>

        {/* Grid dos Caminhões */}
        <div className="trucks-wrapper">
          {trucksData.map(truck => {
            // Verifica se algum bairro deste caminhão bate com a busca
            const truckHasMatches = !query || truck.days.some(day =>
              day.neighborhoods.some(n => normalizeText(n).includes(query))
            );

            return (
              <div 
                key={truck.id} 
                className={`truck-card ${!truckHasMatches ? 'hidden-by-search' : ''}`}
              >
                <div className={`truck-card-header ${truck.headerClass}`}>
                  <div className="truck-badge-title">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="1" y="3" width="15" height="13" rx="2"></rect>
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                      <circle cx="5.5" cy="18.5" r="2.5"></circle>
                      <circle cx="18.5" cy="18.5" r="2.5"></circle>
                    </svg>
                    <span>{truck.title}</span>
                  </div>
                  <span className="truck-sub-tag">{truck.route}</span>
                </div>

                <div className="days-container">
                  {truck.days.map((dayObj, idx) => {
                    const matchingNeighborhoods = dayObj.neighborhoods.filter(n =>
                      !query || normalizeText(n).includes(query)
                    );
                    const dayHasMatch = !query || matchingNeighborhoods.length > 0;

                    return (
                      <div 
                        key={idx} 
                        className={`day-card ${!dayHasMatch ? 'hidden-by-search' : ''}`}
                      >
                        <div className={`day-badge ${dayObj.dayClass}`}>{dayObj.day}</div>
                        <ul className="neighborhoods-list">
                          {dayObj.neighborhoods.map((n, nIdx) => {
                            const isMatch = query && normalizeText(n).includes(query);
                            return (
                              <li 
                                key={nIdx} 
                                className={`neighborhood-tag ${isMatch ? 'highlight-match' : ''}`}
                              >
                                {n}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner Informativo Adicional */}
        <div className="schedule-notice-banner">
          <div className="notice-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </div>
          <div className="notice-text">
            <strong>Importante:</strong> Coloque seus materiais recicláveis limpos e secos na calçada no dia marcado para o seu bairro.
            <br />
            Iniciativa da <strong>ATLIMARJOM</strong> em parceria com a <strong>Prefeitura de João Monlevade</strong>.
          </div>
        </div>
      </div>
    </section>
  );
}
