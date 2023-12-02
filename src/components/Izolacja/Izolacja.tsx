import { useState } from "react";

export default function Izolacja() {
    const [izolacja, setIzolacja] = useState<number>(0);
    const typy = ["PVC", "XLPE", "tworzywo bezhalogenowe"];

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIzolacja(+event.target.value);
    };

    return (
        <>
            Rodzaj tworzywa izolacyjnego	
            {typy.map((typ, index) => (
                <div key={index}>
                    <label htmlFor={`${index}`}>{typ}</label>
                    <input
                        type="radio"
                        value={index}
                        checked={izolacja === index}
                        onChange={handleOptionChange}
                    />
                </div>
            ))}
        </>
    );
}