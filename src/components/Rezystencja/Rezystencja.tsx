import { ChangeEvent, ReactElement, useState } from 'react'
interface Iprops {
  handleDataChange: (value: string | number, index: number) => void
}
export default function Rezystencja({
  handleDataChange
}: Iprops): ReactElement {
  const [rezystencja, setRezystencja] = useState<number>(1);

  function handleRezystencjaChange(event: ChangeEvent<HTMLInputElement>): void {
    setRezystencja(Number(event.target.value));
    handleDataChange(Number(+event.target.value), 6);
  }

  return (
    <div>
      <h2>Rezystywność cieplna gruntu w jednostce K*m/W</h2>
      {/* <label htmlFor="form-resistation">Rezystencja:</label> */}
      <input type="range" min={0.5} max={3} step={.05} id="przekrój" value={rezystencja} onChange={handleRezystencjaChange} />
    </div>
  );
}
