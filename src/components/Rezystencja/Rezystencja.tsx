import { ChangeEvent, useState } from 'react'

export default function Rezystencja() {
  const [rezystencja, setRezystencja] = useState<number>(0);

  function handleRezystencjaChange(event: ChangeEvent<HTMLInputElement>): void {
    setRezystencja(Number(event.target.value));
  }

  return (
    <div>
      <label htmlFor="form-resistation">Rezystencja:</label>
      <input type="range" min={0.5} max={3} step={.05} id="przekrój" value={rezystencja} onChange={handleRezystencjaChange} />
    </div>
  );
}
