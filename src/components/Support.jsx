import React from 'react';
import { handleScrollTo } from '../utils/navigation';

export default function Support() {
  return (
    <section id="apoie" className="section">
      <div className="container">
        <div className="support-banner">
          <div className="support-content">
            <span className="badge badge-light">
              Faça sua Parte
            </span>
            <h2>Como ajudar o meio ambiente e a ATLIMARJOM?</h2>
            <p>
              Pequenas atitudes no seu dia a dia fazem uma grande diferença para as famílias dos catadores e para a
              preservação de João Monlevade.
            </p>

            <div className="support-steps">
              <div className="step-card">
                <div className="step-number">1</div>
                <h4>Separe sem contaminar</h4>
                <p>Separe papéis, plásticos, vidros e metais, impedindo que lixo orgânico ou rejeitos sujem e inutilizem o
                  material reciclável.</p>
              </div>

              <div className="step-card">
                <div className="step-number">2</div>
                <h4>Limpe e embale com segurança</h4>
                <p>Lave as embalagens para evitar mau cheiro e embale vidros quebrados com segurança para evitar acidentes
                  graves com nossas equipes de triagem.</p>
              </div>

              <div className="step-card">
                <div className="step-number">3</div>
                <h4>Apoie a coleta seletiva</h4>
                <p>Disponibilize os recicláveis na calçada no dia da coleta seletiva em seu bairro ou entregue diretamente
                  em nosso galpão central.</p>
              </div>
            </div>

            <button 
              type="button"
              className="btn btn-accent"
              onClick={(e) => handleScrollTo(e, 'contato')}
            >
              Fale com a nossa equipe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
