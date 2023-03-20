import { useEffect, useState } from "react"
import "./ConversorDist.css"

export function ConversorDist() {
  const [distM,setDistM] = useState(0)
  const [distMM,setDistMM] = useState(0)
  const [distCM,setDistCM] = useState(0)
  const [distKM,setDistKM] = useState(0)
  
  useEffect(() => {
    const resMM = Number(distM) * 1000
    const resCM = Number(distM) * 100
    const resKM = Number(distM) / 1000
    
    setDistMM((resMM.toFixed(2)))
    setDistCM((resCM.toFixed(2)))
    setDistKM((resKM.toFixed(2)))
  },[distM])
  return (
    <div className="card">
      <input
       type="range"
       max={1000}
       placeholder="Distância em"
       onChange={(evento) => setDistM(evento.target.value)}
       /> {distM} m
       <p>{distMM}mm</p>
       <p>{distCM}cm</p>
       <p>{distKM}km</p>
    </div>
  )
}