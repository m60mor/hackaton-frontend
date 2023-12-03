import { ChangeEvent, ReactElement, useState} from 'react';
interface Iprops {
  handleDataChange: (value: string | number, index: number) => void,
  dataArray: (string | number)[],
}
export default function Moc({
  handleDataChange,
  dataArray,
}: Iprops): ReactElement {
  const [moc, setMoc] = useState<number>(Number(dataArray[7]));
  function handleMocChange(event: ChangeEvent<HTMLInputElement>): void {
    setMoc(Number(event.target.value));
    handleDataChange(Number(event.target.value), 7);
  }

  return (
    <div className='form-major'>
      <h2>Moc</h2>
      {/* <label htmlFor="przekrój">Temperatura:</label> */}
      <input className='input-number' type="number" value={moc} onChange={handleMocChange} />
    </div>
  );
}
