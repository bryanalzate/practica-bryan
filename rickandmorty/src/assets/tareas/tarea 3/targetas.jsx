import { useEffect, useState } from "react"
import Card from "./assets/componentes/card"
import Poke from "./poke.json"
import Moto from "./assets/motouno.jpg"
import Motos from "./assets/motodos.jpg"
import "./App.css"

function App() {
  const [saldo ,setSaldo] = useState()
  useEffect(()=>{

  },[])
 
  
  return (
  
    <>
    <div className="image" >
      <h2 className="pist">yamaha 1200</h2>
    <Card  titulo ="yamaha 1200"  imagen = {Moto} descripcion = {Poke.motouno}/>
    <Card titulo = "kawuasaki 100" imagen = {Motos} descripcion = {Poke.motodos}/>
    </div>
    </>
    
  )
  
}

export default App
