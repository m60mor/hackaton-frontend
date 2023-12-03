import { ChangeEvent, ReactElement, useState} from 'react';
interface Iprops {
  handleDataChange: (value: string | number, index: number) => void,
  dataArray: (string | number)[],
}
export default function Temperatura({
  handleDataChange,
  dataArray,
}: Iprops): ReactElement {
  const [temperatura, setTemperatura] = useState<number>(Number(dataArray[5]));
  function handleTemperaturaChange(event: ChangeEvent<HTMLInputElement>): void {
    setTemperatura(Number(event.target.value));
    handleDataChange(Number(event.target.value), 5);
  }

  return (
    <div className='form-major'>
      <h2>Temperatura otoczenia</h2>
      {/* <label htmlFor="przekrój">Temperatura:</label> */}
      <input className='input-number' type="number" id="przekrój" value={temperatura} onChange={handleTemperaturaChange} />
      {dataArray[0] === 'YKY' && temperatura > 70 && <p className='text-small'>Temperatura otoczenia nie może być większa niż 70°C dla metalu YKY</p>}
      {dataArray[0] === 'YKXS' && temperatura > 90 && <p className='text-small'>Temperatura otoczenia nie może być większa niż 90°C dla metalu YKXS</p>}
      {dataArray[0] === 'YAKXS' && temperatura > 90 && <p className='text-small'>Temperatura otoczenia nie może być większa niż 90°C dla metalu YAKXS</p>}
      {dataArray[0] === 'N2XH' && temperatura > 90 && <p className='text-small'>Temperatura otoczenia nie może być większa niż 90°C dla metalu N22XH</p>}
    </div>
  );
}
