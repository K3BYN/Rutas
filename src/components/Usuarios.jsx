import React,{useState,useEffect} from "react";
import axios from "axios";
import{Link, Outlet} from 'react-router-dom';

const Usuarios = () => {
  const rootElement = document.getElementById("root");
  const [usuarios, setUsuarios] = useState([]);

  const obtenerUsuarios = async () => {
    const res = await axios.get(
      "https://my-json-server.typicode.com/K3BIN/Rutas/lista"
    );
    const users = await res.data;
    setUsuarios(users);
  };
  useEffect(() => {
    obtenerUsuarios();
  }, []);

  return(
    <div>
        <h2>Lista de Usuarios</h2>
        <nav>
        {
            usuarios.map((item) =>(
                <div>
                    
                        <Link to={`/usuario/${item.id}`}>{item.name}</Link>
                    
                </div>                    
            ))}
            </nav>
            <Outlet/>
    </div>
);
}

export default Usuarios;