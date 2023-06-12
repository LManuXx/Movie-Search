import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({listadoState,setListadoState}) => {

  const [editar, setEditar] = useState(0);

  useEffect(()=>{
    getPelis();
  },[]);

  const getPelis = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    setListadoState(peliculas);
    return peliculas;
  }

  const deletePelis = (id) => {
    console.log(id);
    let peliculas = getPelis();
    let nuevoListado = peliculas.filter(peli => peli.id !==  parseInt(id));
    setListadoState(nuevoListado);
    localStorage.setItem('pelis',JSON.stringify(nuevoListado));

  }

  return (
    <>
        {listadoState != null ? (listadoState.map(peli => {
            return (
              <article className="peli-item" key={peli.id}>
                <h3 className="title">{peli.titulo}</h3>
                <p className="description">{peli.descripcion}</p>

                <button className="edit" onClick={()=>{setEditar(peli.id);}}>Editar</button>
                <button className="delete" onClick={() => deletePelis(peli.id)}>Borrar</button>

                {editar === peli.id && (
                    <Editar peli={peli} getPeliculas={getPelis} setEditar={setEditar} setListadoState={setListadoState}/>
                )}

        </article>

            )
          }))
          : (<h2>No hay peliculas para mostrar</h2>)
          
        }
        

               
    </>
  )
}
