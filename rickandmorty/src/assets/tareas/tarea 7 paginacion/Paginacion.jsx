import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Episodio from "./assets/componentes/pages/Episodios"
import Characters from "./assets/componentes/pages/Characters"
import Location from "./assets/componentes/pages/Location"
import NotFount from "./assets/componentes/pages/404"


function App() {
return (
      <div className="paginacion">
      <Router>
      <nav>
        <ul>
          <div className="display">
          <li>
            <Link to="/">Characters</Link>
          </li>
          <li>
            <Link to="/Episodios">Episodio</Link>
          </li>
          <li>
            <Link to="/location">Location</Link>
          </li>
          </div>
        </ul>
      </nav>
      
     
      <Routes>
        <Route path ="/" element={<Characters />}/>
        <Route path ="/Episodio" element={<Episodio />}/>
        <Route path ="/Location" element={<Location />}/>
        <Route path ="*" element={<NotFount />}/>
        </Routes>
       </Router>
       
       </div>
    )
    }
    export default App



    