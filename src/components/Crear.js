import React, { useState } from 'react'
import { saveOnStorage } from '../helpers/saveOnStorage';

export const Crear = ({setListadoState}) => {

    const titulo = "Añadir pelicula";
    const [peli, setPeli] = useState({});

    const getFormValues = (e) => {
        e.preventDefault();
        const target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.textarea.value;
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        }

        setPeli(peli);

        setListadoState((elementos)=> {
          return [...elementos, peli];
        })

       saveOnStorage("pelis", peli);




    }

   

  return (
    <div className="add">
        <h3 className="title">{titulo}</h3>
        <form onSubmit={getFormValues}>
            <input 
            type="text" 
            placeholder="Titulo"
            name ="titulo"
            id="titulo"
            />
            <textarea 
            placeholder="Descripcion"
            name ="textarea"
            id='textarea'
            ></textarea>
            <input 
            type="submit" 
            value="Guardar"
            id='save'
            />
        </form>
    </div>
  )
}
