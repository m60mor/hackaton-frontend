import { useState } from "react";

export default function Izolacja() {
    const [izolacja, setIzolacja] = useState<number>(0);
    const typy = ["PVC", "XLPE", "tworzywo bezhalogenowe"];

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIzolacja(+event.target.value);
    };

    return (
        <div className="form-isolation">
            <div>Rodzaj tworzywa izolacyjnego</div>
            <div className="form-isolation-elements">
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