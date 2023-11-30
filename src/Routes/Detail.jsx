import React from 'react'
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const{datos} = useContext(ContextGlobal)
  const params = useParams()
  const detalle = datos.find(detalle => detalle.id === parseInt(params.id))
  return (
    <>
     <main>
      <h1>Detalle de cada persona</h1>
      <div className='container-table'>
      <h2>id {params.id}</h2>
      <table>
        <tbody>
          <tr>
            <td>Nombre:</td>
            <td>{detalle?.name}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{detalle?.email}</td>
          </tr>
          <tr>
            <td>Teléfono:</td>
            <td>{detalle?.phone}</td>
          </tr>
          <tr>
            <td>Sitio web:</td>
            <td>{detalle?.website}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </main>
    </>
  )
}

export default Detail