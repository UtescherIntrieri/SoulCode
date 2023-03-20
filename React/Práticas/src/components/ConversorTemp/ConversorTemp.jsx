import { useEffect, useState } from "react"
import "./ConversorTemp.css"

export function ConversorTemp() {
  const [tempC,setTempC] = useState(0)
  const [tempF,setTempF] = useState(0)
  const [tempK,setTempK] = useState(0)
  
  useEffect(() => {
    const resF = (Number(tempC) *1.8 + 32).toFixed(2)
    const resK = (Number(tempC) + 273).toFixed(2)
    
    setTempF(resF)
    setTempK(resK)
  },[tempC])
  return (
    <div>
      <input
       type="number"
       placeholder="Temperatura em °C"
       onChange={(evento) => setTempC(evento.target.value)}
       />
       <p>Valor digitado: {tempC}°C</p>
       <p>Temperatura em F: {tempF}°F</p>
       <p>Temperatura em K: {tempK}K</p>
    </div>
  )
}