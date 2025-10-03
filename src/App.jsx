import React, { useState } from 'react';
import './App.css';

export default function ConsultaCEP() {
  const [cep, setCep] = useState('');
  const [loading, setLoading] = useState(false);
  const [endereco, setEndereco] = useState(null);
  const [erro, setErro] = useState('');

  const formatarCEP = (valor) => {
    const numeros = valor.replace(/\D/g, '');
    const limitado = numeros.slice(0, 8);
    
    if (limitado.length > 5) {
      return limitado.slice(0, 5) + '-' + limitado.slice(5);
    }
    
    return limitado;
  };

  const validarCEP = (cep) => {
    const numeros = cep.replace(/\D/g, '');
    return numeros.length === 8;
  };

  const buscarCEP = async (cepParaBuscar) => {
    setErro('');
    setEndereco(null);

    const cepLimpo = cepParaBuscar.replace(/\D/g, '');

    if (!validarCEP(cepParaBuscar)) {
      setErro('CEP deve conter exatamente 8 dígitos');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
      
      if (!response.ok) {
        throw new Error('Erro ao consultar a API');
      }

      const dados = await response.json();

      if (dados.erro) {
        setErro('CEP não encontrado. Verifique o número digitado.');
        return;
      }

      setEndereco(dados);
    } catch (error) {
      setErro('Erro ao buscar CEP. Tente novamente mais tarde.');
      console.error('Erro:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBlur = () => {
    if (cep && validarCEP(cep)) {
      buscarCEP(cep);
    }
  };

  const handleChange = (e) => {
    const valorFormatado = formatarCEP(e.target.value);
    setCep(valorFormatado);
    
    if (erro) setErro('');
    if (endereco) setEndereco(null);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      buscarCEP(cep);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <div className="icon-wrapper">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <h1>Consulta de CEP</h1>
          <p>Digite um CEP para buscar informações de endereço</p>
        </div>

        <div className="input-group">
          <input
            type="text"
            value={cep}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyPress={handleKeyPress}
            placeholder="00000-000"
            maxLength="9"
            className="input"
          />
          <button
            onClick={() => buscarCEP(cep)}
            disabled={loading || !cep}
            className="button"
          >
            {loading ? (
              <>
                <span className="spinner"></span>
                Buscando...
              </>
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
                Buscar
              </>
            )}
          </button>
        </div>

        {erro && (
          <div className="alert error">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <div>
              <h3>Erro</h3>
              <p>{erro}</p>
            </div>
          </div>
        )}

        {endereco && (
          <div className="result">
            <div className="result-header">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <h3>Endereço Encontrado</h3>
            </div>
            
            <div className="result-grid">
              <div className="result-item">
                <label>CEP</label>
                <p>{endereco.cep}</p>
              </div>
              
              <div className="result-item">
                <label>Logradouro</label>
                <p>{endereco.logradouro || 'Não informado'}</p>
              </div>
              
              <div className="result-item">
                <label>Bairro</label>
                <p>{endereco.bairro || 'Não informado'}</p>
              </div>
              
              <div className="result-item">
                <label>Complemento</label>
                <p>{endereco.complemento || 'Não informado'}</p>
              </div>
              
              <div className="result-item">
                <label>Cidade</label>
                <p>{endereco.localidade}</p>
              </div>
              
              <div className="result-item">
                <label>Estado</label>
                <p>{endereco.uf}</p>
              </div>
              
              {endereco.ddd && (
                <div className="result-item">
                  <label>DDD</label>
                  <p>({endereco.ddd})</p>
                </div>
              )}
            </div>
          </div>
        )}

        {!endereco && !erro && (
          <div className="alert info">
            <div style={{ fontSize: '20px' }}>💡</div>
            <p>
              <strong>Dica:</strong> O CEP é buscado automaticamente ao sair do campo, pressionar Enter ou ao clicar no botão Buscar.
            </p>
          </div>
        )}
      </div>

      <div className="footer">
        Dados fornecidos pela API{' '}
        <a href="https://viacep.com.br/" target="_blank" rel="noopener noreferrer">
          ViaCEP
        </a>
      </div>
    </div>
  );
}