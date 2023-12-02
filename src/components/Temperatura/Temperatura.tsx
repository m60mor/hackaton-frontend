import { ChangeEvent, ReactElement, useState } from 'react';
interface Iprops {
  handleDataChange: (value: string | number, index: number) => void
}
export default function Temperatura({
  handleDataChange
}: Iprops): ReactElement {
  const [temperatura, setTemperatura] = useState<number>(0);

  function handleTemperaturaChange(event: ChangeEvent<HTMLInputElement>): void {
    setTemperatura(Number(event.target.value));
    handleDataChange(Number(+event.target.value), 5);
  }

  return (
    <div className='form-major'>
      <h2>Temperatura otoczenia</h2>
      {/* <label htmlFor="przekrój">Temperatura:</label> */}
      <input type="number" id="przekrój" value={temperatura} onChange={handleTemperaturaChange} />
    </div>
  );
}
