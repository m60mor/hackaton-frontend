import { ChangeEvent, useState } from 'react';

export default function Temperatura() {
  const [temperatura, setTemperatura] = useState<number>(0);

  function handleTemperaturaChange(event: ChangeEvent<HTMLInputElement>): void {
    setTemperatura(Number(event.target.value));
  }

  return (
    <div className='form-major'>
      <label htmlFor="przekrój">Temperatura:</label>
      <input type="number" id="przekrój" value={temperatura} onChange={handleTemperaturaChange} />
    </div>
  );
}
