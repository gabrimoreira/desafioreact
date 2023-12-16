import React, { useState } from 'react';
import '../Style/Formulario.css';
function Formulario() {
  return (
    <div className="mainFormulario">
    <div className="formulario">
      <h1>FORMULÁRIO</h1>
      <form > 
        <label>
          Nome:
          <input type="text" name="nome"/>
        </label>
        <label>
          Email:
          <input type="email" name="email"/>
        </label>
        <label>
          Telefone:
          <input type="text" name="phone"/>
        </label>
        <label>
          Mensagem:
          <textarea name="mensagem"/>
        </label>
        
        <button type="submit">Enviar</button>
      </form>
    </div>
    </div>
  );
}

export default Formulario;
