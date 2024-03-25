'use client';

import React from 'react';

export default function IMC() {
  const [altura, setAltura] = React.useState(0);
  const [peso, setPeso] = React.useState(0);
  const [indice, setIndice] = React.useState(0);
  const [ativar, setAtivar] = React.useState(false);

  const mostrarIndice = () => {
    const alturaMetro = altura / 100;
    const imc = (peso / (alturaMetro * alturaMetro)).toFixed(2);
    setIndice(Number(imc));
    setAtivar(true);
  };

  return (
    <main>
      <label htmlFor="altura">Altura</label>
      <input
        type="number"
        placeholder="cm"
        id="altura"
        onChange={(event) => setAltura(event.target.valueAsNumber)}
      />
      <label htmlFor="peso">Peso</label>
      <input
        type="number"
        id="peso"
        placeholder="kg"
        onChange={(event) => setPeso(event.target.valueAsNumber)}
      />
      <button onClick={mostrarIndice}>Calcular</button>

      <h2 style={{ display: ativar ? 'block' : 'none' }}>IMC: {indice}</h2>
    </main>
  );
}
