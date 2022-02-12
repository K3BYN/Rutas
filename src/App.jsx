import React from "react";
import {render} from 'react-dom';
import{BrowserRouter as Router,
Routes,
Route,
Link} from 'react-router-dom';
import Usuarios from "./components/Usuarios";
import Usuario from "./components/Usuario";

function App() {
  const rootElement = document.getElementById("root");
  render(
    <Router>
      <Link to="/">Usuarios</Link>
      
      <Routes>
        <Route exact path="/" element={<Usuarios/>}/>
      </Routes>

      <Routes>
        <Route  path="/Usuario/:id" element={<Usuario/>}/>
      </Routes>
    </Router>,
    rootElement
  )
}

export default App;




