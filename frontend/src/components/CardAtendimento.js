import React from 'react';

export default function CardAtendimento({ atendimento }) {
  return (
    <div className="card">
      <p><strong>ID:</strong> {atendimento.id}</p>
      <p><strong>Descrição:</strong> {atendimento.descricao}</p>
    </div>
  );
}
