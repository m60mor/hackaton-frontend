import { useEffect } from "react"
import { fetchProductPageData } from "../Utils/ResponseConverter"

export default function ShowResults(data: any) {
  const cableNames = ["YDY 450/750 V", "YDYp 450/750 V", "YKY 0,6/1kV", "YAKXS 0,6/1kV", "N2XH 0,6/1kV", "YKXS 0,6/1kV"]
  const links = [
    "przewody-instalacyjne/ydy-450-750-v",
    "przewody-instalacyjne/ydy-450-750-v",
    "kable-1-kv/yky-0-6-1-kv",
    "kable-1-kv/yakxs-0-6-1-kv",
    "kable-1-kv/nopovic-n2xh-0-6-1-kv",
    "kable-1-kv/ykxs-0-6-1-kv"
]
  const images = ["https://www.nkt.com.pl/imgproxy/98WaOFNJmHosU2F2BOnX53jbHBSuAtonHn9_w1Ta2Kg/rt:fit/w:704/h:517/g:ce/ex:1/el:1/aHR0cHM6Ly9ua3Qud2lkZW4ubmV0L2NvbnRlbnQvMmV1cXgzNm1waS9wbmcvWURZxbxvXzN4MSw1X3MucG5nP2xhc3RNb2RpZmllZD1UdWUrTWFyKzA4KzE0JTNBMjElM0ExNitDRVQrMjAyMg.jpeg",
"https://www.nkt.com.pl/imgproxy/0kGpkzy8ai8CPATOnJXEg2FzUckBDM-ONRkSBrGnqJo/rt:fit/w:1600/h:800/g:ce/ex:1/el:1/aHR0cHM6Ly9ua3Qud2lkZW4ubmV0L2NvbnRlbnQvYnN5Z2F5aWNjZy9wbmcvbmt0X2luc3RhbF9ZRFlwXzNfenlseS16by0yMDE4LTA1LWJlei1sb2dhLTM2MDB4MjcwMHB4LnBuZz9sYXN0TW9kaWZpZWQ9VHVlK1NlcCswMSsxMiUzQTA2JTNBMjUrQ0VTVCsyMDIw.jpeg",
"https://www.nkt.com.pl/imgproxy/eR5Z7NHYCGmqv4lY3C4eVY0WGq1HrSHMLrbbJ36XbwA/rt:fit/w:704/h:0/g:ce/ex:1/el:1/aHR0cHM6Ly9ua3Qud2lkZW4ubmV0L2NvbnRlbnQvODR3YW5kYnh6ei9wbmcvWW5LWS5wbmc_bGFzdE1vZGlmaWVkPUZyaStTZXArMDQrMTUlM0E0NiUzQTM2K0NFU1QrMjAyMA.jpeg",
"https://www.nkt.com.pl/imgproxy/Zwpt9URpdMCDzstcLVze_NqmoP6aLRYZaufsSxh5gBQ/rt:fit/w:704/h:0/g:ce/ex:1/el:1/aHR0cHM6Ly9ua3Qud2lkZW4ubmV0L2NvbnRlbnQvOWd3aDRndmN5di9wbmcvWEFLWFMucG5nP2xhc3RNb2RpZmllZD1Nb24rQXVnKzMxKzE3JTNBMzclM0E0MitDRVNUKzIwMjA.jpeg",
"https://www.nkt.com.pl/imgproxy/xvDrxmCnItz7F2d-4tLn2tIRqYc_o-L5t2wnOzBE0JI/rt:fit/w:704/h:0/g:ce/ex:1/el:1/aHR0cHM6Ly9ua3Qud2lkZW4ubmV0L2NvbnRlbnQvcGtzNXlnbWhvci9wbmcvTk9QT1ZJQy1OMlhILnBuZz9sYXN0TW9kaWZpZWQ9VGh1K0p1bCswNCsxNSUzQTU4JTNBMjIrQ0VTVCsyMDE5.jpeg",
"https://www.nkt.com.pl/imgproxy/eR5Z7NHYCGmqv4lY3C4eVY0WGq1HrSHMLrbbJ36XbwA/rt:fit/w:704/h:0/g:ce/ex:1/el:1/aHR0cHM6Ly9ua3Qud2lkZW4ubmV0L2NvbnRlbnQvODR3YW5kYnh6ei9wbmcvWW5LWS5wbmc_bGFzdE1vZGlmaWVkPUZyaStTZXArMDQrMTUlM0E0NiUzQTM2K0NFU1QrMjAyMA.jpeg"]
  useEffect(() => {
  }, [data])
  console.log(data.data);
  return (
    <>
      {data.data.map((cable, index)=>
      <div className="cable" key={index}>
        <a href={`https://www.nkt.com.pl/produkty-rozwiazania/niskie-napiecie/${links[cableNames?.findIndex((value)=>value === cable.cableType)]}`}>

        <div className="img-container">
          <img src={`${images[cableNames?.findIndex((value)=>value === cable.cableType)]}`} width={200} height={200}></img>
          <div className="description">Kliknij aby zobaczy produkt na stronie NKT</div>
        </div>
        </a>
        <div>CableType</div>
        <div className="response-data">{cable.cableType}</div>
        <div>Circuit</div>
        <div className="response-data">{cable.circuit}</div>
        <div>Number of cores</div>
        <div className="response-data">{cable.numberOfCores}</div>
        <div>Number of cores loaded</div>
        <div className="response-data">{cable.numberOfCoresLoaded}</div>
        <div>Installation method</div>
        <div className="response-data">{cable.installationMethod}</div>
        <div >Reference method</div>
        <div className="response-data">{cable.referenceMethod}</div>
      </div> 
       )}
       <>
        {(!data.data || data.data.length === 0) && <p>Nie znaleziono pasujących kabli</p>}
       </>
       
    </>
  )
}