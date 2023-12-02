import { useEffect } from "react"
import { fetchProductPageData } from "../Utils/ResponseConverter"

export default function ShowResults(data: any) {
  useEffect(() => {
    console.log(data)
    fetchProductPageData('kable-1-kv/ykxs-0-6-1-kv.html')
  }, [data])
  return (
    <div>ShowResults: {JSON.stringify(data)}</div>
  )
}
