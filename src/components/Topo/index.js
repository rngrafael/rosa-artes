import './estilo.css';
import rosa from '../../imagens/rosa.png';
import { useState } from 'react';

export default function Topo() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <div className="topo">
      <div className="area-logo">
        <div className="logo">
          <img src={rosa} alt="Logo Rosa Artes em Pano" />
        </div>
        <div className="apres">
          <p className="titulo">Rosa Artes em Pano</p>
          <p className="subtitulo">Costura Artesanal</p>
        </div>
      </div>

      <div className={`nav-links ${menuAberto ? 'ativo' : ''}`}>
        <a href="#inicio" className="link">Início</a>
        <a href="#sobre" className="link">Sobre</a>
        <a href="#galeria" className="link">Galeria</a>
        <a href="#servicos" className="link">Serviços</a>
        <a href="#contato" className="link">Contato</a>
      </div>

      <div className="menu-mobile" onClick={() => setMenuAberto(!menuAberto)}>
        ☰
      </div>
    </div>
  );
}
