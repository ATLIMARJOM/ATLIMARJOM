import React, { useState } from 'react';

// Função utilitária para codificar o formulário para envio ao Netlify Forms
const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: 'Agendamento de Coleta Residencial',
    mensagem: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Envia os dados para a rota do Netlify Forms
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contato', ...formData }),
    })
      .then(() => {
        setIsSubmitted(true);
        setFormData({ nome: '', email: '', assunto: 'Agendamento de Coleta Residencial', mensagem: '' });
      })
      .catch((error) => {
        alert(
          'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente ou envie um e-mail direto para luisfilipe1000.lf@gmail.com.'
        );
        console.error('Erro no envio do formulário:', error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contato" className="section">
      <div className="container">
        <div className="section-header">
          <span className="badge">Canais de Atendimento</span>
          <h2 className="section-title">Entre em Contato Conosco</h2>
          <p className="section-subtitle">
            Dúvidas sobre descarte, agendamento de coleta para empresas ou parcerias? <br />
            Fale com a ATLIMARJOM.
          </p>
        </div>

        <div className="contact-grid">
          {/* Informações de Contato */}
          <div className="contact-info-card">
            <h3 className="contact-card-title">Endereço & Canais</h3>

            <div className="info-item">
              <div className="info-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="info-text">
                <h4>Localização</h4>
                <p>
                  Avenida Getúlio Vargas, nº 2.195, Bairro Baú
                  <br />
                  João Monlevade - MG
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="info-text">
                <h4>Telefone & WhatsApp</h4>
                <p>
                  <a href="tel:+553138511813">(31) 3851-1813</a>
                </p>
                <p>
                  <a href="tel:+5531987630181">(31) 98763-0181</a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="info-text">
                <h4>E-mail</h4>
                <p>
                  <a href="mailto:luisfilipe1000.lf@gmail.com">luisfilipe1000.lf@gmail.com</a>
                </p>
              </div>
            </div>

            <div className="info-item info-item-last">
              <div className="info-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="info-text">
                <h4>Horário de Funcionamento</h4>
                <p>Segunda a Sexta: 07:00 às 18:00</p>
                <p>Sábado: 07:00 às 16:00</p>
              </div>
            </div>
          </div>

          {/* Formulário Conectado ao Netlify Forms */}
          <div className="contact-form-card">
            <h3 className="contact-card-title">Envie uma Mensagem</h3>

            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'var(--accent-mint)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem auto',
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', color: 'var(--primary-dark)' }}>
                  Mensagem Enviada!
                </h4>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  Obrigado pelo contato. Sua mensagem foi recebida e será encaminhada diretamente para a equipe da{' '}
                  <strong>ATLIMARJOM</strong>.
                </p>
                <button className="btn btn-secondary" onClick={() => setIsSubmitted(false)}>
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form
                name="contato"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                {/* Campo oculto necessário para o Netlify Forms */}
                <input type="hidden" name="form-name" value="contato" />
                <p style={{ display: 'none' }}>
                  <label>
                    Anti-spam: <input name="bot-field" onChange={handleChange} />
                  </label>
                </p>

                <div className="form-group">
                  <label htmlFor="nome" className="form-label">
                    Seu Nome Completo
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    className="form-control"
                    placeholder="Ex: Maria Silva"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Seu E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="maria@exemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="assunto" className="form-label">
                    Assunto
                  </label>
                  <select
                    id="assunto"
                    name="assunto"
                    className="form-control"
                    value={formData.assunto}
                    onChange={handleChange}
                  >
                    <option value="Agendamento de Coleta Residencial">Agendamento de Coleta Residencial</option>
                    <option value="Parcerias e Grandes Geradores (Empresas)">
                      Parcerias e Grandes Geradores (Empresas)
                    </option>
                    <option value="Dúvidas, Sugestões ou Visitas ao Galpão">
                      Dúvidas, Sugestões ou Visitas ao Galpão
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="mensagem" className="form-label">
                    Sua Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    className="form-control"
                    placeholder="Escreva sua mensagem aqui..."
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-full-width" disabled={isSubmitting}>
                  {isSubmitting ? 'Enviando mensagem...' : 'Enviar Mensagem'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
