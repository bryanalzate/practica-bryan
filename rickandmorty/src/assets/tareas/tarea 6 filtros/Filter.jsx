import { useEffect } from "react"
import { useState } from "react"
import { Card } from "./assets/componentes/Cards"
import "./App.css"


const App = ()=>{
  const[characters, setCharactes] = useState([])
  const [page,setPage] = useState(1)
  const [search, setSearch] = useState("")
  console.log(search)
  useEffect(() => {
    const fetching = async() => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`)
    const data =  await response.json()
 setCharactes(data.results);
  }
  fetching() 
 }, [page, search])
  return(
    <div>
      <div className="container">
        <h1 className="text-8xl font-bold">RICK AND MORTY</h1>
      </div>
      <div className="input">
        <input onChange={(e)=>{
           setSearch(e.target.value)
        }} placeholder="search character"></input>
      </div>
      <div className="buton">
        <button onClick={()=>{
          if (page > 1) {
            setPage(page - 1)
          }else{
            setPage(1)
          }
        }}>back</button>
        <button onClick={()=>{
          setPage(page + 1)
        }}>next</button>
      </div>
      <Card characters={characters} search={search}></Card> 
    </div>

    
  )

}
export default App