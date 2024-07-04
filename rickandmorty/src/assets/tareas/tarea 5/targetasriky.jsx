import React,{useEffect, useState} from "react"
import Riky from "./assets/componentes/Riky"
import Character from "./assets/componentes/Character"


function App (){

  const [character, setCharacter] = useState ([])
  const [paginacion, setPaginacion] = useState (1)
const url = `https://rickandmortyapi.com/api/character/?page=${paginacion}` 

  const fetchcharacter = (url)=>{
    fetch(url)
    .then((response) => response.json())
    .then( (data)=> setCharacter(data.results))
  
  }
  useEffect(()=>{
    fetchcharacter(url)
  },[paginacion])

  return (
    <>
    < Riky props="RIKY AND MORTY"/>
    <div>
    <Character character = {character} />
      </div>
      <button onClick={()=> setPaginacion (paginacion - 1 )}>siguiente anterior</button>
      <button onClick={()=> setPaginacion (paginacion + 1 )}>siguiente pagina</button>
    
    </>

  )
}

export default App