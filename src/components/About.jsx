import React from 'react';

export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <div className="about-grid">
          <div className="about-card-bg">
            <span className="badge">Nossa História</span>
            <h2 className="section-title">Trabalho com propósito e respeito ao meio ambiente</h2>
            <p>
              Fundada em maio de 2001, a <strong>ATLIMARJOM</strong> (Associação dos Trabalhadores de
              Limpeza e Materiais Recicláveis de João Monlevade) nasceu com o propósito de garantir dignidade e uma
              alternativa sustentável de renda para as famílias que trabalhavam sob condições precárias no antigo lixão da
              cidade.
            </p>
            <p>
              Uma trajetória de mais de duas décadas marcada por superação, cooperação, inclusão socioeconômica e
              compromisso com a sustentabilidade de João Monlevade.
            </p>
          </div>

          <div className="about-feature-list">
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="feature-info">
                <h4>🌱 O que fazemos?</h4>
                <div className="feature-sublist">
                  <div className="feature-subitem">
                    <strong>Coleta e Triagem Seletiva:</strong> Executamos a coleta seletiva de resíduos porta a porta em
                    toda a cidade de João Monlevade, descarregamos os materiais no galpão e fazemos a triagem de papéis,
                    plásticos, vidros e metais na esteira.
                  </div>
                  <div className="feature-subitem">
                    <strong>Processamento e Logística Reversa:</strong> Beneficiamos os materiais coletados operando
                    prensas, picotadeiras e trituradores. Gerenciamos o estoque para venda direta, emitimos Notas Fiscais
                    e controlamos o Manifesto de Transporte de Resíduos (MTR) junto ao Certificado de Destinação Final
                    (CDF), auxiliando parceiros corporativos e marcas, como a ABIHPEC, na rastreabilidade pós-consumo.
                  </div>
                </div>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                </svg>
              </div>
              <div className="feature-info">
                <h4>🌍 No que isso ajuda?</h4>
                <div className="feature-sublist">
                  <div className="feature-subitem">
                    <strong>Preservação do Meio Ambiente:</strong> Evitamos que toneladas de resíduos poluam a natureza e
                    estendemos a vida útil do Aterro Sanitário de João Monlevade. Também realizamos palestras educativas
                    em escolas e empresas locais.
                  </div>
                  <div className="feature-subitem">
                    <strong>Inclusão e Valorização Social:</strong> Geramos trabalho e renda digna para pessoas
                    vulneráveis, resgatando a autoestima e a cidadania dos catadores.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
