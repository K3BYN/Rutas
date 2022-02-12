import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Outlet, useParams } from "react-router-dom";

const Usuario = () => {
  const [usuario, setUsuario] = useState([]);
  const {id} = useParams();

  const obtenerUsuario = async () => {
    const res = await axios.get(`https://my-json-server.typicode.com/K3BIN/Rutas/lista/${id}`);
    const users = await res.data;
    setUsuario(users);
  }
  useEffect(() => {
    obtenerUsuario();
  }, []);

  return(
    <div>
        <h4>Usuario</h4>
        <p>Nombre: {usuario.name}</p>
        <p>Email: {usuario.email}</p>
        <small>Teléfono: {usuario.phone}</small>
    </div>
  );
};

export default Usuario;