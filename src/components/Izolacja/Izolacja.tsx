import { ReactElement, useState } from "react";
interface Iprops {
    handleDataChange: (value: string | number, index: number) => void
  }
export default function Izolacja({
    handleDataChange
  }: Iprops): ReactElement {
    const [izolacja, setIzolacja] = useState<number>(0);
    const typy = ["PVC", "XLPE", "tworzywo bezhalogenowe"];

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIzolacja(+event.target.value);
        handleDataChange(String.fromCharCode(97 + +event.target.value), 1);
    };

    return (
        <div className="form-major">
          <h2>Rodzaj tworzywa izolacyjnego</h2>
            <div className="form-minor">
                {typy.map((typ, index) => (
                    <div className="radio" key={index}>
                        <label className={`${typ === "tworzywo bezhalogenowe" ? "text-small" : ""}`} htmlFor={`${index}`}>{typ}
                            <input 
                                type="radio"
                                value={index}
                                checked={izolacja === index}
                                onChange={handleOptionChange}
                            />
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}